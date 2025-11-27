"use client";

interface HeroBlobsProps {}

export default function HeroBlobs({}: HeroBlobsProps) {
  return (
    <>
      <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
    </>
  );
}
