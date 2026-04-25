import { memo, useCallback, useMemo } from "react";
import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa";

interface Props {
  item: { id: string };
  activeSection: string;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

const LABELS: Record<string, string> = {
  hero: "Home",
  about: "About",
  projects: "Projects",
  contact: "Contact",
};

const ICON_PROPS = { className: "w-6 h-6 lg:w-7 lg:h-7 relative z-10" };

const SidebarItem = memo(function SidebarItem({
  item,
  activeSection,
  hoveredId,
  setHoveredId,
}: Props) {
  const getLabel = useCallback((id: string) => LABELS[id] || "", []);

  const getIcon = useCallback((id: string) => {
    switch (id) {
      case "hero":
        return <FaHome {...ICON_PROPS} />;
      case "about":
        return <FaUser {...ICON_PROPS} />;
      case "projects":
        return <FaLaptopCode {...ICON_PROPS} />;
      case "contact":
        return <FaEnvelope {...ICON_PROPS} />;
      default:
        return null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHoveredId(item.id);
  }, [item.id, setHoveredId]);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, [setHoveredId]);

  const isHovered = useMemo(() => hoveredId === item.id, [hoveredId, item.id]);
  const isActive = useMemo(() => activeSection === item.id, [activeSection, item.id]);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >


      {/* Tooltip - Mobile */}
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 md:hidden px-3 py-3 rounded-2xl whitespace-nowrap text-xs font-semibold tracking-wide pointer-events-none transition-all duration-500 ease-out z-9999 mb-2 ${
          isHovered
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        {/* Light Mode Background */}
        <div className="absolute inset-0 rounded-2xl bg-white dark:hidden" style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }} />
        
        {/* Dark Mode Glass Background */}
        <div className="absolute inset-0 rounded-2xl hidden dark:block" style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255,255,255,0.3)",
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }} />
        
        <span className="relative block text-gray-900 dark:text-gray-100 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          {getLabel(item.id)}
        </span>
      </div>

      {/* Tooltip - Desktop */}
      <div
        className={`hidden md:block absolute top-1/2 right-full -translate-y-1/2 md:rounded-full px-4 py-3 whitespace-nowrap text-sm font-semibold tracking-wide pointer-events-none transition-all duration-500 ease-out z-9999 mr-4 ${
          isHovered
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
        style={{
          transform: isHovered ? "translateY(calc(-50% + 12px))" : "translateY(-50%)",
        }}
      >
        {/* Light Mode Background */}
        <div className="absolute inset-0 rounded-full bg-white dark:hidden" style={{
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)",
        }} />
        
        {/* Dark Mode Glass Background */}
        <div className="absolute inset-0 rounded-full hidden dark:block" style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.05) 100%)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255,255,255,0.3)",
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.3)",
        }} />
        
        <span className="relative block text-gray-900 dark:text-gray-100 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          {getLabel(item.id)}
        </span>
      </div>

      {/* Icon + Liquid Glass */}
      <a
        href={`#${item.id}`}
        className={`relative p-3 lg:p-4 rounded-full transition-all duration-400 ease-out ${
          isActive ? "scale-110" : "scale-100"
        } hover:-translate-y-3 group/link block will-change-transform`}
        style={{
          transform:
            isActive
              ? "scale(1.1) translateZ(20px)"
              : isHovered
              ? "translateZ(20px)"
              : "translateZ(0px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Base + Gradient + Glow + Shimmer - only dark mode */}
        <div className="absolute inset-0 rounded-full overflow-hidden hidden dark:block">
          <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl border border-white/50 dark:border-white/40 shadow-xl dark:shadow-2xl transition-all duration-400" />
          <div
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive
                ? "opacity-80"
                : "opacity-0 group-hover/link:opacity-50"
            }`}
            style={{
              background:
                "radial-gradient(135% 135% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Light mode - simple background, no blur */}
        <div className="absolute inset-0 rounded-full overflow-hidden dark:hidden">
          <div className="absolute inset-0 bg-white transition-all duration-400" />
        </div>

        <div className="relative flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors duration-700">
          {getIcon(item.id)}
        </div>
      </a>
    </div>
  );
});

export default SidebarItem;
