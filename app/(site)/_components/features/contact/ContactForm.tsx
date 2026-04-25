"use client";

import { useState } from "react";
import { VALIDATION_MESSAGES } from "@lib/constants";
import type { ApiResponse } from "@types";

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    message: string;
  }) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ApiResponse;

      if (!response.ok) {
        throw new Error(data.message || VALIDATION_MESSAGES.SUBMISSION_ERROR);
      }

      setFormData({ name: "", email: "", message: "" });
      setSuccess(VALIDATION_MESSAGES.SUBMISSION_SUCCESS);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : VALIDATION_MESSAGES.SUBMISSION_ERROR;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        relative
        w-full max-w-xl
        mx-auto
        flex flex-col gap-4 sm:gap-5 md:gap-6
        p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16
        rounded-2xl sm:rounded-3xl
        group
        transition-all duration-500 ease-out
        overflow-hidden
      "
      style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Base + Gradient + Glow - only dark mode */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden z-0 hidden dark:block">
        <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl 
                       border border-white/50 dark:border-white/40 
                       shadow-lg sm:shadow-xl dark:shadow-xl dark:sm:shadow-2xl 
                       transition-all duration-400 
                       group-hover:bg-white/30 dark:group-hover:bg-white/15" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(135% 135% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Light mode background */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden z-0 dark:hidden bg-white" />

      {/* Liquid shine effect - only dark mode */}
      <span className="absolute -top-1 -left-8 sm:-left-16 w-12 h-24 sm:w-20 sm:h-40 
                      bg-white/30 dark:bg-white/20 rounded-full blur-xl sm:blur-2xl
                      transform rotate-45 scale-150 dark:animate-pulse pointer-events-none z-0 hidden dark:block"></span>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={loading}
        className="
          relative z-10
          w-full
          rounded-lg sm:rounded-xl
          bg-white dark:bg-white/10
          px-3 py-2.5 sm:px-4 sm:py-3
          text-sm sm:text-base
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-white/60
          border border-gray-300 dark:border-white/20
          dark:backdrop-blur-md
          focus:outline-none focus:ring-2 focus:ring-blue-400/60
          disabled:opacity-50 disabled:cursor-not-allowed
          transition
        "
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={loading}
        className="
          relative z-10
          w-full
          rounded-lg sm:rounded-xl
          bg-white dark:bg-white/10
          px-3 py-2.5 sm:px-4 sm:py-3
          text-sm sm:text-base
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-white/60
          border border-gray-300 dark:border-white/20
          dark:backdrop-blur-md
          focus:outline-none focus:ring-2 focus:ring-gray-400/60
          disabled:opacity-50 disabled:cursor-not-allowed
          transition
        "
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={loading}
        rows={5}
        className="
          relative z-10
          w-full
          rounded-lg sm:rounded-xl
          bg-white dark:bg-white/10
          px-3 py-2.5 sm:px-4 sm:py-3
          text-sm sm:text-base
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-white/60
          border border-gray-300 dark:border-white/20
          dark:backdrop-blur-md
          resize-none
          focus:outline-none focus:ring-2 focus:ring-blue-400/60
          disabled:opacity-50 disabled:cursor-not-allowed
          transition
        "
        style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
      />

      <button
        type="submit"
        disabled={loading}
        className="
          relative z-10
          mt-1 sm:mt-2
          rounded-full
          px-8 py-2.5 sm:px-10 sm:py-3
          text-sm sm:text-base
          font-semibold text-gray-900 dark:text-white
          transition-all duration-300
          group/btn
          overflow-hidden
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:scale-[1.02] active:scale-95
        "
        style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Base + Gradient + Glow - only dark mode */}
        <div className="absolute inset-0 rounded-full overflow-hidden hidden dark:block">
          <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl 
                         border border-white/50 dark:border-white/40 
                         shadow-lg sm:shadow-xl dark:shadow-xl dark:sm:shadow-2xl 
                         transition-all duration-400 
                         group-hover/btn:bg-white/30 dark:group-hover/btn:bg-white/15" />
          <div
            className="absolute inset-0 opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(135% 135% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Light mode background - white */}
        <div className="absolute inset-0 rounded-full overflow-hidden dark:hidden bg-white" />

        {/* Liquid shine effect - only dark mode */}
        <span className="absolute -top-1 -left-8 sm:-left-16 w-12 h-24 sm:w-20 sm:h-40 
                        bg-white/30 dark:bg-white/20 rounded-full blur-xl sm:blur-2xl
                        transform rotate-45 scale-150 dark:animate-pulse pointer-events-none hidden dark:block"></span>

        <span className="relative z-10">
          {loading ? "Sending..." : "Send Message"}
        </span>
      </button>

      {success && (
        <p className="relative z-10 text-center text-xs sm:text-sm text-emerald-400">
          ✓ {success}
        </p>
      )}

      {error && (
        <p className="relative z-10 text-center text-xs sm:text-sm text-red-400">
          ✗ {error}
        </p>
      )}
    </form>
  );
}
