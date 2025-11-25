"use client";
import { useTheme } from "../context/ThemeContext";

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative p-4 rounded-full transition-all duration-700 ease-out hover:scale-110 group cursor-pointer will-change-transform"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{ filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))" }}
    >
      {/* Background Layer - Liquid Glass */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {/* Base glass layer */}
        <div
          className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl border border-white/50 dark:border-white/40 shadow-xl dark:shadow-2xl transition-all duration-700"
          style={{ boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2), inset 0 1px 0 rgba(255,255,255,0.3)" }}
        />

        {/* Gradient overlay for liquid effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(135% 135% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Icon Container */}
      <div className="relative z-20 flex items-center justify-center transition-colors duration-700">
        {/* Sun Icon for Dark Mode */}
        <svg
          className={`w-6 h-6 text-yellow-400 absolute transition-all duration-300 ${
            darkMode ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zm2.828-2.828l1.414-1.414a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414zm0-4.243L13.536 5.464a1 1 0 10-1.414-1.414L12.95 6.293a1 1 0 001.414 1.414zM5.464 5.464a1 1 0 00-1.414 1.414L5.464 8.293a1 1 0 001.414-1.414L5.464 5.464zm0 9.172L4.05 13.707a1 1 0 101.414 1.414l1.414-1.414a1 1 0 00-1.414-1.414zM18 10a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM2 10a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm15.657-5.657a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414zm-2.121-2.121a1 1 0 10-1.414 1.414l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414zM5 10a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>

        {/* Moon Icon for Light Mode */}
        <svg
          className={`w-6 h-6 text-blue-400 absolute transition-all duration-300 ${
            !darkMode ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>

      {/* Enhanced Glow Effect */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Shimmer effect on hover */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none animate-shimmer"
        style={{
          background:
            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          filter: "blur(1px)",
        }}
      />
    </button>
  );
}
