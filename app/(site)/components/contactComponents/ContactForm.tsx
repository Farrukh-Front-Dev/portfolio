"use client";

import { useState } from "react";

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    } catch (err) {
      console.error(err);
      setSuccess("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/40 bg-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-md placeholder-white/70 text-white"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/40 bg-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-md placeholder-white/70 text-white"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full sm:col-span-2 rounded-xl border border-white/40 bg-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-md placeholder-white/70 text-white h-32 resize-none"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`sm:col-span-2 rounded-xl bg-blue-500/70 backdrop-blur-sm px-6 py-3 text-white font-semibold transition-all shadow-md hover:shadow-lg hover:bg-blue-600/80 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {success && <p className="sm:col-span-2 text-green-400 font-medium mt-2">{success}</p>}
    </form>
  );
}
