/**
 * Input validation utilities
 */

import { CONTACT_FORM, VALIDATION_MESSAGES } from "./constants";

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): void => {
  if (!name || name.trim().length === 0) {
    throw new ValidationError(VALIDATION_MESSAGES.NAME_REQUIRED);
  }
  if (name.length < CONTACT_FORM.MIN_NAME_LENGTH) {
    throw new ValidationError(VALIDATION_MESSAGES.NAME_TOO_SHORT);
  }
  if (name.length > CONTACT_FORM.MAX_NAME_LENGTH) {
    throw new ValidationError(VALIDATION_MESSAGES.NAME_TOO_LONG);
  }
};

export const validateEmailFormat = (email: string): void => {
  if (!email || email.trim().length === 0) {
    throw new ValidationError("Email is required");
  }
  if (!validateEmail(email)) {
    throw new ValidationError(VALIDATION_MESSAGES.EMAIL_INVALID);
  }
};

export const validateMessage = (message: string): void => {
  if (!message || message.trim().length === 0) {
    throw new ValidationError(VALIDATION_MESSAGES.MESSAGE_REQUIRED);
  }
  if (message.length < CONTACT_FORM.MIN_MESSAGE_LENGTH) {
    throw new ValidationError(VALIDATION_MESSAGES.MESSAGE_TOO_SHORT);
  }
  if (message.length > CONTACT_FORM.MAX_MESSAGE_LENGTH) {
    throw new ValidationError(VALIDATION_MESSAGES.MESSAGE_TOO_LONG);
  }
};

export const validateContactForm = (data: {
  name: string;
  email: string;
  message: string;
}): void => {
  validateName(data.name);
  validateEmailFormat(data.email);
  validateMessage(data.message);
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .slice(0, CONTACT_FORM.MAX_MESSAGE_LENGTH);
};
