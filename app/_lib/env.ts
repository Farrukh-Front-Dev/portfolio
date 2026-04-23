/**
 * Environment variables validation and type-safe access
 * This ensures all required env vars are present at runtime
 */

// Validate required environment variables at runtime (not build time)
function validateEnv() {
  const missing: string[] = [];

  // Check server-side vars (only in server context and not during build)
  if (typeof window === "undefined" && process.env.NODE_ENV !== "production") {
    if (!process.env.TELEGRAM_BOT_TOKEN) {
      missing.push("TELEGRAM_BOT_TOKEN");
    }
    if (!process.env.TELEGRAM_CHAT_ID) {
      missing.push("TELEGRAM_CHAT_ID");
    }
  }

  if (missing.length > 0 && process.env.NODE_ENV === "development") {
    console.warn(
      `Missing environment variables: ${missing.join(", ")}\n` +
      `Some features may not work. Please check your .env.local file`
    );
  }
}

// Validate on module load (only in development)
if (typeof window === "undefined" && process.env.NODE_ENV === "development") {
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
