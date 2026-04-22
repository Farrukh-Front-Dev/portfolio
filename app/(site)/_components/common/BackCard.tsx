"use client";

interface BackCardProps {
  name: string;
  setName: (value: string) => void;
  onSubmit: () => void;
}

export default function BackCard({ name, setName, onSubmit }: BackCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="
      absolute top-1/2 left-1/2
      w-80 max-w-[90vw] p-6 flex flex-col gap-5
      rounded-3xl shadow-2xl bg-white border border-gray-100
      -translate-x-1/2 -translate-y-1/2
      backface-hidden transform rotate-y-180
    ">
      <input
  type="text"
  placeholder="Your Name :)"
  className="
    rounded-2xl border border-gray-200 p-3
    bg-white text-gray-800
    focus:outline-none focus:ring-2 focus:ring-blue-400
    focus:ring-offset-1 shadow-sm placeholder-gray-400
    transition-all
  "
  value={name}
  onChange={(e) => setName(e.target.value)}
  onKeyDown={handleKeyDown}
/>

      <button
        onClick={onSubmit}
        className="
          rounded-2xl bg-blue-500 px-5 py-2 text-white font-semibold
          hover:bg-blue-600 transition-all shadow-md hover:shadow-lg
        "
      >
        Kirish
      </button>
    </div>
  );
}
