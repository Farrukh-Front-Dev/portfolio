"use client";

import { useState, useRef } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

interface FlipCardProps {
  name: string;
  setName: (v: string) => void;
  onSubmit: () => void;
}

export default function FlipCard({ name, setName, onSubmit }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const lastClick = useRef<number>(0);

  const handleCardClick = () => {
    const now = Date.now();
    if (now - lastClick.current < 400) setFlipped(true);
    lastClick.current = now;
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative w-screen h-screen perspective"
      style={{ perspective: "1200px" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <FrontCard />
        <BackCard name={name} setName={setName} onSubmit={onSubmit} />
      </div>
    </div>
  );
}
