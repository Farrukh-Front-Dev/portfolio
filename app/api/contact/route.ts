import { NextResponse, type NextRequest } from "next/server";
import { env } from "@lib/env";
import { logger } from "@lib/logger";
import { validateContactForm, ValidationError } from "@lib/validators";
import { isRateLimited, getClientIp, RateLimitError } from "@lib/rateLimit";
import { HTTP_STATUS } from "@lib/constants";
import type { ApiResponse, ContactFormData } from "@types";

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(req);

    // Check rate limit
    if (isRateLimited(clientIp)) {
      logger.warn("Rate limit exceeded", { ip: clientIp });
      throw new RateLimitError();
    }

    // Parse request body
    const body = await req.json();
    const { name, email, message } = body as ContactFormData;

    // Validate input
    validateContactForm({ name, email, message });

    logger.info("Contact form validated", { email });

    // Send to Telegram
    const text = `📩 New Contact Message\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${env.telegram.botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: env.telegram.chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();
      logger.error("Telegram API error", { error, status: telegramResponse.status });
      throw new Error("Failed to send message to Telegram");
    }

    logger.info("Message sent successfully", { email });

    return NextResponse.json(
      {
        status: "success",
        message: "Message sent successfully!",
      },
      { status: HTTP_STATUS.OK }
    );
  } catch (err) {
    if (err instanceof ValidationError) {
      logger.warn("Validation error", { message: err.message });
      return NextResponse.json(
        {
          status: "error",
          message: err.message,
        },
        { status: HTTP_STATUS.BAD_REQUEST }
      );
    }

    if (err instanceof RateLimitError) {
      return NextResponse.json(
        {
          status: "error",
          message: err.message,
        },
        { status: HTTP_STATUS.RATE_LIMITED }
      );
    }

    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    logger.error("Contact API error", errorMessage);
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send message. Please try again later.",
      },
      { status: HTTP_STATUS.SERVER_ERROR }
    );
  }
}
