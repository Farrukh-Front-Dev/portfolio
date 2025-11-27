import { FC } from "react";

interface TooltipProps {
  id: string;
  label: string;
  visible: boolean;
}

const Tooltip: FC<TooltipProps> = ({ id, label, visible }) => (
  <div
    className={`
      absolute bottom-16 md:bottom-auto md:right-24 lg:right-28 left-1/2 
      md:left-auto -translate-x-1/2 md:translate-x-0
      px-4 lg:px-5 py-3 rounded-2xl
      backdrop-blur-2xl 
      border border-white/30 dark:border-white/20
      whitespace-nowrap
      text-xs lg:text-sm font-semibold tracking-wide
      pointer-events-none
      transition-all duration-500 ease-out
      ${visible ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
    `}
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.05) 100%)",
      boxShadow: visible
        ? "0 12px 40px rgba(0, 0, 0, 0.22), inset 0 1px 2px rgba(255,255,255,0.5), inset 0 0 25px rgba(255,255,255,0.3)"
        : "0 6px 20px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255,255,255,0.3)",
      WebkitBackdropFilter: "blur(24px)",
      backdropFilter: "blur(24px)",
    }}
  >
    {label}
  </div>
);

export default Tooltip;
