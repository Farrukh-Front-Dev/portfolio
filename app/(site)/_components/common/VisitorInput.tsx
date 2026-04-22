"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FlipCard from "./FlipCard";

export default function VisitorInput() {
  const [name, setName] = useState("");
  const [showInput, setShowInput] = useState(true);
  const pathname = usePathname();

  // BODY + SITE SCROLL BLOCK
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

  // VISITOR INIT + HAR VISIT LOG
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
        screen: `${window.screen.width}x${window.screen.height}`,
      }),
    });

    if (storedName) setShowInput(false);
  }, [pathname]);

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
        screen: `${window.screen.width}x${window.screen.height}`,
      }),
    });

    setShowInput(false);
  };

  if (!showInput) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-md">
      <FlipCard name={name} setName={setName} onSubmit={handleSubmit} />
    </div>
  );
}
