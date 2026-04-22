/**
 * Environment variables validation and type-safe access
 * This ensures all required env vars are present at build time
 */

const requiredEnvVars = {
  // Server-side only
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  
  // Public (client-side)
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS,
  NEXT_PUBLIC_ENABLE_COMMENTS: process.env.NEXT_PUBLIC_ENABLE_COMMENTS,
} as const;

// Validate required environment variables
function validateEnv() {
  const missing: string[] = [];

  // Check server-side vars (only in server context)
  if (typeof window === "undefined") {
    if (!requiredEnvVars.TELEGRAM_BOT_TOKEN) {
      missing.push("TELEGRAM_BOT_TOKEN");
    }
    if (!requiredEnvVars.TELEGRAM_CHAT_ID) {
      missing.push("TELEGRAM_CHAT_ID");
    }
  }

  // Check public vars
  if (!requiredEnvVars.NEXT_PUBLIC_SITE_URL) {
    missing.push("NEXT_PUBLIC_SITE_URL");
  }
  if (!requiredEnvVars.NEXT_PUBLIC_SITE_NAME) {
    missing.push("NEXT_PUBLIC_SITE_NAME");
  }
  if (!requiredEnvVars.NEXT_PUBLIC_API_URL) {
    missing.push("NEXT_PUBLIC_API_URL");
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}\n` +
      `Please check your .env.local file`
    );
  }
}

// Validate on module load (server-side only)
if (typeof window === "undefined") {
  validateEnv();
}

export const env = {
  // Server-side only
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || "",
    chatId: process.env.TELEGRAM_CHAT_ID || "",
  },

  // Public (client-side safe)
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio",
  },

  api: {
    url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  },

  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
    comments: process.env.NEXT_PUBLIC_ENABLE_COMMENTS === "true",
  },
} as const;

export type Env = typeof env;
