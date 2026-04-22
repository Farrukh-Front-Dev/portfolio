"use client";

export default function FrontCard() {
  return (
    <div className="
      absolute w-full h-full backface-hidden
      flex flex-col items-center justify-center
      rounded-2xl shadow-xl border border-gray-200 bg-white
      select-none
    ">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Welcome to Farrukh Portfolio
      </h1>
      <p className="mt-4 text-sm text-gray-500 animate-pulse">
        Double-click to enter
      </p>
    </div>
  );
}
