"use client";

import content from "../content/content.json";
import ContactForm from "@components/contactComponents/ContactForm";
import SocialLinks from "@components/contactComponents/SocialLinks";
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
      icon: <AiOutlineMail size={30} />,
      label: "Email",
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    {
      icon: <FaTelegramPlane size={30} />,
      label: "Telegram",
      href: contact.telegram,
      value: "@Farrukh_Djumayev",
    },
    {
      icon: <FaLinkedin size={30} />,
      label: "LinkedIn",
      href: contact.linkedin,
      value: "farrukhdjumayev",
    },
    {
      icon: <FaGithub size={30} />,
      label: "GitHub",
      href: contact.github,
      value: "Farrukh-Front-Dev",
    },
    {
      icon: <FaInstagram size={30} />,
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
    <section
      id="contact"
      className="py-16 sm:py-30 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeInUp">
        {labels.getInTouch}
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl animate-fadeInUp animation-delay-200">
        {labels.alwaysOpen}
      </p>

      <ContactForm onSubmit={handleSendMessage} />
      <SocialLinks links={contactLinks} />
    </section>
  );
}
