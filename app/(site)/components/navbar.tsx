"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-lg font-semibold">
          Portfolio
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="#projects">Projects</Link>
          <Link href="#tech">Tech Stack</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
