/**
 * Global type definitions
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T = any> {
  status: "success" | "error";
  message: string;
  data?: T;
}

export interface ApiError {
  status: number;
  message: string;
  code: string;
}

export interface VisitorData {
  visitorId: string;
  name?: string;
  type: "visit" | "first_visit";
  page: string;
  screen: string;
  timestamp?: string;
}
