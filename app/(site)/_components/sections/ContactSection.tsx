"use client";

import content from "@content/content.json";
import ContactForm from "@components/features/contact/ContactForm";
import SocialLinks from "@components/features/contact/SocialLinks";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function ContactSection() {
  const { contact, labels } = content;

  const contactLinks = [
    {
      icon: <AiOutlineMail size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      label: "Email",
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    {
      icon: <FaTelegramPlane size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      label: "Telegram",
      href: contact.telegram,
      value: "@Farrukh_Djumayev",
    },
    {
      icon: <FaLinkedin size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      label: "LinkedIn",
      href: contact.linkedin,
      value: "farrukhdjumayev",
    },
    {
      icon: <FaGithub size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      label: "GitHub",
      href: contact.github,
      value: "Farrukh-Front-Dev",
    },
    {
      icon: <FaInstagram size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      label: "Instagram",
      href: contact.instagram,
      value: "farrukh.djumayev",
    },
  ];

  const handleSendMessage = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-24 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                     mb-4 sm:mb-6 tracking-tight
                     text-gray-900
                     dark:bg-linear-to-r dark:from-white dark:to-gray-300 
                     dark:bg-clip-text dark:text-transparent animate-fadeInUp">
        {labels.getInTouch}
      </h2>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                    text-gray-600 dark:text-gray-400 
                    mb-8 sm:mb-12 md:mb-16 max-w-2xl 
                    animate-fadeInUp animation-delay-200">
        {labels.alwaysOpen}
      </p>

      <ContactForm onSubmit={handleSendMessage} />
      <SocialLinks links={contactLinks} />
    </section>
  );
}
