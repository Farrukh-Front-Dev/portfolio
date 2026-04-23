/**
 * Application constants
 */

export const CONTACT_FORM = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
  RATE_LIMIT: {
    REQUESTS: 5,
    WINDOW_MS: 60000, // 1 minute
  },
} as const;

export const SECTIONS = {
  HERO: "hero",
  ABOUT: "about",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

export const SECTION_IDS = Object.values(SECTIONS);

export const VALIDATION_MESSAGES = {
  NAME_REQUIRED: "Name is required",
  NAME_TOO_SHORT: `Name must be at least ${CONTACT_FORM.MIN_NAME_LENGTH} characters`,
  NAME_TOO_LONG: `Name must be less than ${CONTACT_FORM.MAX_NAME_LENGTH} characters`,
  EMAIL_INVALID: "Please enter a valid email address",
  MESSAGE_REQUIRED: "Message is required",
  MESSAGE_TOO_SHORT: `Message must be at least ${CONTACT_FORM.MIN_MESSAGE_LENGTH} characters`,
  MESSAGE_TOO_LONG: `Message must be less than ${CONTACT_FORM.MAX_MESSAGE_LENGTH} characters`,
  RATE_LIMITED: "Too many requests. Please try again later.",
  SUBMISSION_ERROR: "Failed to send message. Please try again.",
  SUBMISSION_SUCCESS: "Message sent successfully!",
} as const;

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  RATE_LIMITED: 429,
  SERVER_ERROR: 500,
} as const;
