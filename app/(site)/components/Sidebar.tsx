"use client";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <aside className="fixed right-0 top-0 h-screen w-20 flex flex-col justify-between items-center p-4
      bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg
      text-gray-900 dark:bg-gray-900/30 dark:border-gray-700 dark:text-white z-50"
    >
      <div className="flex flex-col gap-6 mt-10">
        <a href="#hero" className="hover:scale-110 transition-all duration-200">H</a>
        <a href="#projects" className="hover:scale-110 transition-all duration-200">P</a>
        <a href="#tech" className="hover:scale-110 transition-all duration-200">T</a>
        <a href="#contact" className="hover:scale-110 transition-all duration-200">C</a>
      </div>

      <div className="flex flex-col gap-4 mb-10">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white/20 dark:bg-gray-700/30 hover:scale-110 transition-all duration-200"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </aside>
  );
}
