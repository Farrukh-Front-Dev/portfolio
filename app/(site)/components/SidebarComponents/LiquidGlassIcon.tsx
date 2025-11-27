import { FC, ReactNode } from "react";

interface LiquidGlassIconProps {
  active: boolean;
  hovered: boolean;
  children: ReactNode;
}

const LiquidGlassIcon: FC<LiquidGlassIconProps> = ({ active, hovered, children }) => {
  return (
    <a
      href="#"
      className={`relative p-3 lg:p-4 rounded-full transition-all duration-400 ease-out group/link block`}
      style={{
        transform: active ? "scale(1.1) translateZ(20px)" : hovered ? "translateZ(20px)" : "translateZ(0px)",
        filter: active
          ? "drop-shadow(0 20px 30px rgba(59,130,246,0.5)) drop-shadow(0 8px 20px rgba(168,85,247,0.3))"
          : hovered
          ? "drop-shadow(0 25px 35px rgba(59,130,246,0.4)) drop-shadow(0 10px 25px rgba(168,85,247,0.3))"
          : "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl border border-white/50 dark:border-white/40 shadow-xl dark:shadow-2xl transition-all duration-400"
          style={{
            boxShadow: active
              ? "0 0 40px rgba(59,130,246,0.7), inset 0 1px 0 rgba(255,255,255,0.6), 0 12px 40px rgba(31,38,135,0.5)"
              : hovered
              ? "0 0 30px rgba(59,130,246,0.5), inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 32px rgba(31,38,135,0.37)"
              : "0 8px 32px rgba(31,38,135,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        />
      </div>
      <div className="relative z-20 flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors duration-700">
        {children}
      </div>
    </a>
  );
};

export default LiquidGlassIcon;
