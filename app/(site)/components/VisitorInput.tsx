"use client";
import { useState, useEffect } from "react";

export default function VisitorInput() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("visitor_name");
    if (storedName) setSaved(true);
  }, []);

  const handleSubmit = async () => {
    if (!name) return;

    const visitorId =
      localStorage.getItem("visitor_id") || crypto.randomUUID();
    localStorage.setItem("visitor_name", name);
    localStorage.setItem("visitor_id", visitorId);

    await fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        visitorId,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screen: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    });

    setSaved(true);
  };

  if (saved) return null; // input endi ko‘rinmaydi

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col gap-4">
        <input
          type="text"
          placeholder="Ismingizni yozing..."
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Kirish
        </button>
      </div>
    </div>
  );
}
