"use client";

import { useState } from "react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await onSubmit(formData);
      setFormData({ name: "", email: "", message: "" });
      setSuccess("Message sent successfully!");
    } catch {
      setSuccess("Failed to send message.");
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
        flex flex-col gap-6
        p-8 mb-16
        rounded-3xl
        backdrop-blur-2xl
        bg-white/10
        border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
      "
    >
      {/* subtle glass highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-white/20 via-transparent to-transparent" />

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        className="
          relative z-10
          w-full
          rounded-xl
          bg-white/20
          px-4 py-3
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-white/60
          border border-white/30
          backdrop-blur-md
          focus:outline-none focus:ring-2 focus:ring-blue-400/60
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
        className="
          relative z-10
          w-full
          rounded-xl
          bg-white/20
          px-4 py-3
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-white/60
          border border-white/30
          backdrop-blur-md
          focus:outline-none focus:ring-2 focus:ring-blue-400/60
          transition
        "
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="
          relative z-10
          w-full
          rounded-xl
          bg-white/20
          px-4 py-3
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-white/60
          border border-white/30
          backdrop-blur-md
          resize-none
          focus:outline-none focus:ring-2 focus:ring-blue-400/60
          transition
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          relative z-10
          mt-2
          rounded-xl
          bg-linear-to-r from-blue-500/80 to-cyan-500/80
          px-6 py-3
          font-semibold text-white
          backdrop-blur-md
          shadow-lg
          transition
          hover:scale-[1.02]
          hover:shadow-xl
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="relative z-10 text-center text-sm text-emerald-400">
          {success}
        </p>
      )}
    </form>
  );
}
