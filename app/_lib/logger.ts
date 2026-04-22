/**
 * Logging utility
 */

type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
}

const isDevelopment = process.env.NODE_ENV === "development";

const formatLog = (level: LogLevel, message: string, data?: any): LogEntry => ({
  timestamp: new Date().toISOString(),
  level,
  message,
  data,
});

const logToConsole = (entry: LogEntry): void => {
  const prefix = `[${entry.level.toUpperCase()}] ${entry.timestamp}`;

  switch (entry.level) {
    case "info":
      console.log(prefix, entry.message, entry.data || "");
      break;
    case "warn":
      console.warn(prefix, entry.message, entry.data || "");
      break;
    case "error":
      console.error(prefix, entry.message, entry.data || "");
      break;
    case "debug":
      if (isDevelopment) {
        console.debug(prefix, entry.message, entry.data || "");
      }
      break;
  }
};

export const logger = {
  info: (message: string, data?: any): void => {
    const entry = formatLog("info", message, data);
    logToConsole(entry);
  },

  warn: (message: string, data?: any): void => {
    const entry = formatLog("warn", message, data);
    logToConsole(entry);
  },

  error: (message: string, error?: any): void => {
    const entry = formatLog("error", message, error);
    logToConsole(entry);
  },

  debug: (message: string, data?: any): void => {
    const entry = formatLog("debug", message, data);
    logToConsole(entry);
  },
};
