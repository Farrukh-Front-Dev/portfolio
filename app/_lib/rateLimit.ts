/**
 * Rate limiting utility
 */

import { CONTACT_FORM, VALIDATION_MESSAGES } from "./constants";

export class RateLimitError extends Error {
  constructor(message: string = VALIDATION_MESSAGES.RATE_LIMITED) {
    super(message);
    this.name = "RateLimitError";
  }
}

const requestCounts = new Map<string, number[]>();

/**
 * Check if a request from an IP is rate limited
 * @param ip - Client IP address
 * @param limit - Max requests allowed (default: 5)
 * @param window - Time window in ms (default: 60000 = 1 minute)
 * @returns true if rate limited, false otherwise
 */
export const isRateLimited = (
  ip: string,
  limit: number = CONTACT_FORM.RATE_LIMIT.REQUESTS,
  window: number = CONTACT_FORM.RATE_LIMIT.WINDOW_MS
): boolean => {
  const now = Date.now();
  const windowStart = now - window;

  const times = requestCounts.get(ip) || [];
  const recentRequests = times.filter((t) => t > windowStart);

  if (recentRequests.length >= limit) {
    return true;
  }

  requestCounts.set(ip, [...recentRequests, now]);
  return false;
};

/**
 * Get client IP from request headers
 * @param request - Next.js Request object
 * @returns Client IP address
 */
export const getClientIp = (request: Request): string => {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
};

/**
 * Clean up old entries from rate limit map (run periodically)
 * @param window - Time window in ms
 */
export const cleanupRateLimitMap = (
  window: number = CONTACT_FORM.RATE_LIMIT.WINDOW_MS
): void => {
  const now = Date.now();
  const windowStart = now - window;

  for (const [ip, times] of requestCounts.entries()) {
    const recentRequests = times.filter((t) => t > windowStart);
    if (recentRequests.length === 0) {
      requestCounts.delete(ip);
    } else {
      requestCounts.set(ip, recentRequests);
    }
  }
};
