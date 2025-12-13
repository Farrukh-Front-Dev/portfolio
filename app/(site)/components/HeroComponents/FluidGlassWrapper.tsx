"use client";

import FluidGlass from "../components/FluidGlass";

export default function FluidGlassWrapper() {
  return (
    <div className="flex-1 flex justify-center md:justify-end items-center w-full md:w-auto">
      <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px]">
        <FluidGlass />
      </div>
    </div>
  );
}
