"use client";

import { useState } from "react";
import { VALIDATION_MESSAGES } from "@lib/constants";
import type { ApiResponse } from "@types";
import GlassSurface from "../../components/GlassSurface";

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
    <div className="w-full max-w-xl mx-auto mb-8 sm:mb-12 md:mb-16">
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={24}
        borderWidth={0.08}
        brightness={50}
        opacity={0.93}
        blur={12}
        displace={0}
        backgroundOpacity={0.08}
        saturation={1.1}
        distortionScale={-200}
        redOffset={0}
        greenOffset={12}
        blueOffset={24}
        xChannel="R"
        yChannel="G"
        mixBlendMode="difference"
        className="shadow-lg hover:shadow-xl transition-all duration-700"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-4 sm:p-6 md:p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="
              w-full
              rounded-lg sm:rounded-xl
              bg-white/20 dark:bg-white/10
              px-3 py-2.5 sm:px-4 sm:py-3
              text-sm sm:text-base
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-white/60
              border border-white/30 dark:border-white/20
              backdrop-blur-md
              focus:outline-none focus:ring-2 focus:ring-blue-400/60
              disabled:opacity-50 disabled:cursor-not-allowed
              transition
            "
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
              w-full
              rounded-lg sm:rounded-xl
              bg-white/20 dark:bg-white/10
              px-3 py-2.5 sm:px-4 sm:py-3
              text-sm sm:text-base
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-white/60
              border border-white/30 dark:border-white/20
              backdrop-blur-md
              focus:outline-none focus:ring-2 focus:ring-blue-400/60
              disabled:opacity-50 disabled:cursor-not-allowed
              transition
            "
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
              w-full
              rounded-lg sm:rounded-xl
              bg-white/20 dark:bg-white/10
              px-3 py-2.5 sm:px-4 sm:py-3
              text-sm sm:text-base
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-white/60
              border border-white/30 dark:border-white/20
              backdrop-blur-md
              resize-none
              focus:outline-none focus:ring-2 focus:ring-blue-400/60
              disabled:opacity-50 disabled:cursor-not-allowed
              transition
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-1 sm:mt-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <GlassSurface
              width="auto"
              height="auto"
              borderRadius={16}
              borderWidth={0.08}
              brightness={50}
              opacity={0.93}
              blur={12}
              displace={0}
              backgroundOpacity={0.08}
              saturation={1.1}
              distortionScale={-200}
              redOffset={0}
              greenOffset={12}
              blueOffset={24}
              xChannel="R"
              yChannel="G"
              mixBlendMode="difference"
              className="shadow-lg hover:shadow-xl transition-all duration-700"
            >
              <span className="block px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                {loading ? "Sending..." : "Send Message"}
              </span>
            </GlassSurface>
          </button>

          {success && (
            <p className="text-center text-xs sm:text-sm text-emerald-400">
              ✓ {success}
            </p>
          )}

          {error && (
            <p className="text-center text-xs sm:text-sm text-red-400">
              ✗ {error}
            </p>
          )}
        </form>
      </GlassSurface>
    </div>
  );
}
