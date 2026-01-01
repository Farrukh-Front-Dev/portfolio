"use client";

import Ballpit from "@components/components/Ballpit";
import content from "../content/content.json";
import ContactForm from "@components/contactComponents/ContactForm";
import SocialLinks from "@components/contactComponents/SocialLinks";
import { AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const { contact, labels } = content;

  const contactLinks = [
    { icon: <AiOutlineMail size={24} />, label: "Email", href: `mailto:${contact.email}`, value: contact.email },
    { icon: <FaTelegramPlane size={24} />, label: "Telegram", href: contact.telegram, value: "@Farrukh_Djumayev" },
    { icon: <FaLinkedin size={24} />, label: "LinkedIn", href: contact.linkedin, value: "Farrukh" },
    { icon: <FaGithub size={24} />, label: "GitHub", href: contact.github, value: "Farrukh-Front-Dev" },
  ];

  const handleSendMessage = async (data: { name: string; email: string; message: string }) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
  {/* Ballpit fon */}
  <div className="absolute inset-0 w-full h-full -z-10">
    <Ballpit
      count={200}
      gravity={0.7}
      friction={0.8}
      wallBounce={0.95}
      followCursor={true}
    />
  </div>

  {/* Kontent container */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeInUp">
      {labels.getInTouch}
    </h2>

    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl animate-fadeInUp animation-delay-200">
      {labels.alwaysOpen}
    </p>

    <ContactForm onSubmit={handleSendMessage} />
    <SocialLinks links={contactLinks} />
  </div>
</section>

  );
}
