"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function VisitorInput() {
  const [name, setName] = useState("");
  const [flipped, setFlipped] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const pathname = usePathname();
  const lastClick = useRef<number>(0);

  // ================================
  // BODY + SITE SCROLL + INTERACTION BLOCK
  // ================================
  useEffect(() => {
    const main = document.querySelector("main");
    const sidebar = document.querySelector("aside");

    if (showInput) {
      document.body.style.overflow = "hidden";
      main?.classList.add("pointer-events-none", "select-none");
      sidebar?.classList.add("pointer-events-none", "select-none");
    } else {
      document.body.style.overflow = "";
      main?.classList.remove("pointer-events-none", "select-none");
      sidebar?.classList.remove("pointer-events-none", "select-none");
    }
  }, [showInput]);

  // ================================
  // VISITOR INIT + HAR VISIT LOG
  // ================================
  useEffect(() => {
    let visitorId = localStorage.getItem("visitor_id");
    const storedName = localStorage.getItem("visitor_name");

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("visitor_id", visitorId);
    }

    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitorId,
        name: storedName,
        type: "visit",
        page: pathname,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    });

    if (storedName) setShowInput(false);
  }, [pathname]);

  // ================================
  // DOUBLE CLICK CARD TO FLIP
  // ================================
  const handleCardClick = () => {
    const now = Date.now();
    if (now - lastClick.current < 400) setFlipped(true);
    lastClick.current = now;
  };

  // ================================
  // FIRST VISIT NAME SUBMIT
  // ================================
  const handleSubmit = async () => {
    if (!name.trim()) return;
    const visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) return;

    localStorage.setItem("visitor_name", name);

    await fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitorId,
        name,
        type: "first_visit",
        page: pathname,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    });

    setShowInput(false);
  };

  if (!showInput) return null;

  // ================================
  // UI: 3D FLIP CARD + BLUR OVERLAY
  // ================================
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-md">
      <div
        onClick={handleCardClick}
        className="relative w-96 h-60 perspective"
        style={{ perspective: "1200px" }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div className="absolute w-full rotate-y-12 h-full backface-hidden bg-white flex items-center justify-center rounded-2xl shadow-xl border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Welcome to Farrukh Portfolio
            </h1>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden transform rotate-y-190 flex flex-col gap-4 p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
            <input
              type="text"
              placeholder="   :) Your Name"
              className="rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="rounded-xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors"
            >
              Kirish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
