"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import FlipCard from "./FlipCard";
import { retryFetch } from "@lib/retry";
import { trackError } from "@lib/monitoring";

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

  // VISITOR INIT + HAR VISIT LOG with retry logic
  useEffect(() => {
    const abortController = new AbortController();

    let visitorId = localStorage.getItem("visitor_id");
    const storedName = localStorage.getItem("visitor_name");

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("visitor_id", visitorId);
    }

    // Track visit with retry logic
    retryFetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitorId,
        name: storedName,
        type: "visit",
        page: pathname,
        screen: `${window.screen.width}x${window.screen.height}`,
      }),
      signal: abortController.signal,
    }, {
      maxRetries: 2,
      initialDelay: 500,
    }).catch((err) => {
      if (err.name !== "AbortError") {
        trackError(err, { context: "visit_tracking" });
      }
    });

    return () => abortController.abort();
  }, [pathname]);

  // Separate effect for showing/hiding input based on stored name
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const storedName = localStorage.getItem("visitor_name");
    if (storedName) {
      setShowInput(false);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!name.trim()) return;
    const visitorId = localStorage.getItem("visitor_id");
    if (!visitorId) return;

    localStorage.setItem("visitor_name", name);

    try {
      await retryFetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorId,
          name,
          type: "first_visit",
          page: pathname,
          screen: `${window.screen.width}x${window.screen.height}`,
        }),
      }, {
        maxRetries: 2,
        initialDelay: 500,
      });
    } catch (err) {
      trackError(err instanceof Error ? err : new Error(String(err)), { 
        context: "first_visit_tracking" 
      });
    }

    setShowInput(false);
  }, [name, pathname]);

  if (!showInput) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white/50 backdrop-blur-md">
      <FlipCard name={name} setName={setName} onSubmit={handleSubmit} />
    </div>
  );
}
