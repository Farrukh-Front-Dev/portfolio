"use client";
import { memo, useCallback } from "react";
import { useTheme } from "@context/ThemeContext";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";

const ToggleButton = memo(function ToggleButton() {
  const { darkMode, toggleDarkMode } = useTheme();

  const handleClick = useCallback(() => {
    toggleDarkMode();
  }, [toggleDarkMode]);

  return (
    <button
      onClick={handleClick}
      className="relative p-2.5 rounded-full transition-all duration-700 ease-out hover:scale-110 group cursor-pointer will-change-transform"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
      aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {/* Background Layer - Liquid Glass (Dark Mode Only) */}
      <div className="absolute inset-0 rounded-full overflow-hidden hidden dark:block">
        {/* Base glass layer */}
        <div
          className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-4xl border border-white/50 dark:border-white/40 shadow-xl dark:shadow-2xl transition-all duration-700"
          style={{
            boxShadow:
              "0 0 40px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(255,255,255,0.5)",
          }}
        />

        {/* Gradient overlay for liquid effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(135% 135% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)",
            backdropFilter: "blur(8px)",
          }}
        />
      </div>

      {/* Light Mode - Simple Background */}
      <div className="absolute inset-0 rounded-full overflow-hidden dark:hidden">
        <div className="absolute inset-0 bg-white transition-all duration-700" />
      </div>

      {/* Icon Container */}
      <div className="relative z-20 flex items-center justify-center">
        {/* Sun icon */}
        <IoIosSunny
          className={`
      w-4 h-4 text-yellow-500 absolute
      transition-all duration-700 ease-in-out
      ${darkMode
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-180 scale-50"}
    `}
        />

        {/* Moon icon */}
        <BsMoonStarsFill
          className={`
      w-3.5 h-3.5 text-gray-700 absolute
      transition-all duration-700 ease-in-out
      ${darkMode
              ? "opacity-0 -rotate-180 scale-50"
              : "opacity-100 rotate-0 scale-100"}
    `}
        />
      </div>

      {/* Enhanced Glow Effect - Dark Mode Only */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />

      {/* Shimmer effect on hover - Dark Mode Only */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none animate-shimmer hidden dark:block"
        style={{
          background:
            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          filter: "blur(2px)",
        }}
      />
    </button>
  );
});

export default ToggleButton;
