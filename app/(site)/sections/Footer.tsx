"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6 flex justify-center">
      <p
        className="text-white/80 text-sm md:text-base text-center
                   transition-all duration-300 transform hover:scale-105 hover:text-cyan-400
                   cursor-default select-none"
      >
        &copy; {year} If you know what you have then you don't have much.
      </p>
    </footer>
  );
}
