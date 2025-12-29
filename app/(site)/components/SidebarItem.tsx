import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa";

interface Props {
  item: { id: string };
  activeSection: string;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

export default function SidebarItem({ item, activeSection, hoveredId, setHoveredId }: Props) {
  const getLabel = (id: string) => ({
    hero: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  }[id] || "");

  const getIcon = (id: string) => {
    const props = { className: "w-6 h-6 lg:w-7 lg:h-7 relative z-10" };
    switch (id) {
      case "hero": return <FaHome {...props} />;
      case "about": return <FaUser {...props} />;
      case "projects": return <FaLaptopCode {...props} />;
      case "contact": return <FaEnvelope {...props} />;
    }
  };

  return (
    <div className="relative group" onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
      {/* Tooltip */}
      <div className={`absolute bottom-16 md:bottom-auto md:right-24 lg:right-28 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 px-4 lg:px-5 py-3 rounded-2xl backdrop-blur-3xl border border-white/30 dark:border-white/20 whitespace-nowrap text-xs lg:text-sm font-semibold tracking-wide pointer-events-none transition-all duration-500 ease-out ${hoveredId === item.id ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`} style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.05) 100%)", boxShadow: hoveredId === item.id ? "0 12px 40px rgba(0, 0, 0, 0.22), inset 0 1px 2px rgba(255,255,255,0.5), inset 0 0 25px rgba(255,255,255,0.3)" : "0 6px 20px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255,255,255,0.3)", WebkitBackdropFilter: "blur(24px)", backdropFilter: "blur(24px)", borderRadius: "20px" }}>
        <span className="block text-gray-900 dark:text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">{getLabel(item.id)}</span>
        <div className={`absolute w-0 h-0 border-l-[5px] border-y-[5px] border-y-transparent -bottom-2 left-1/2 -translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-auto md:right-0 md:translate-x-3 ${hoveredId === item.id ? "block" : "hidden"}`} style={{ borderLeftColor: "rgba(255,255,255,0.35)", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }} />
      </div>

      {/* Icon + Liquid Glass */}
      <a href={`#${item.id}`} className={`relative p-3 lg:p-4 rounded-full transition-all duration-400 ease-out ${activeSection === item.id ? "scale-110" : "scale-100"} hover:-translate-y-3 group/link block will-change-transform`} style={{ transform: activeSection === item.id ? "scale(1.1) translateZ(20px)" : hoveredId === item.id ? "translateZ(20px)" : "translateZ(0px)" }}>
        {/* Base + Gradient + Glow + Shimmer */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl border border-white/50 dark:border-white/40 shadow-xl dark:shadow-2xl transition-all duration-400" />
          <div className={`absolute inset-0 transition-opacity duration-700 ${activeSection === item.id ? "opacity-80" : "opacity-0 group-hover/link:opacity-50"}`} style={{ background: "radial-gradient(135% 135% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)" }} />
        </div>
        <div className="relative z-20 flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors duration-700">{getIcon(item.id)}</div>
      </a>
    </div>
  );
}
