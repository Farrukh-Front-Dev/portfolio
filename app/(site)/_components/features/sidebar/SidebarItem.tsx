import { memo, useCallback, useMemo } from "react";
import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import GlassSurface from "../../components/GlassSurface";

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
      {/* Tooltip with Real Glass */}
      <div
        className={`absolute md:bottom-auto md:right-24 lg:right-28 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 whitespace-nowrap pointer-events-none transition-all duration-500 ease-out ${
          isHovered
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
        style={{
          bottom: "calc(100% + 12px)",
        }}
      >
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={20}
          borderWidth={0.07}
          brightness={55}
          opacity={0.95}
          blur={14}
          displace={0.8}
          backgroundOpacity={0.12}
          saturation={1.2}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          xChannel="R"
          yChannel="G"
          mixBlendMode="difference"
          className="shadow-2xl"
        >
          <span className="block px-4 lg:px-5 py-3 text-xs lg:text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            {getLabel(item.id)}
          </span>
        </GlassSurface>

        {/* Triangle arrow: faqat desktopda ko'rinadi */}
        <div
          className={`hidden md:absolute w-0 h-0 border-l-[5px] border-y-[5px] border-y-transparent md:bottom-auto md:top-1/2 md:left-auto md:right-0 md:translate-x-3 ${
            isHovered ? "md:block" : ""
          }`}
          style={{
            borderLeftColor: "rgba(255,255,255,0.35)",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
          }}
        />
      </div>


      {/* Icon + Real Glass Surface */}
      <a
        href={`#${item.id}`}
        className={`relative block transition-all duration-400 ease-out ${
          isActive ? "scale-110" : "scale-100"
        } hover:-translate-y-3 group/link will-change-transform`}
        style={{
          transform:
            isActive
              ? "scale(1.1) translateZ(20px)"
              : isHovered
              ? "translateZ(20px)"
              : "translateZ(0px)",
        }}
      >
        <GlassSurface
          width={56}
          height={56}
          borderRadius={28}
          borderWidth={0.08}
          brightness={isActive ? 60 : 50}
          opacity={isActive ? 0.95 : 0.93}
          blur={12}
          displace={isActive ? 1.5 : 0}
          backgroundOpacity={isActive ? 0.15 : 0.08}
          saturation={isActive ? 1.3 : 1.1}
          distortionScale={-200}
          redOffset={0}
          greenOffset={12}
          blueOffset={24}
          xChannel="R"
          yChannel="G"
          mixBlendMode="difference"
          className={`transition-all duration-700 ${
            isActive ? "shadow-2xl" : "shadow-lg hover:shadow-xl"
          }`}
        >
          <div className="relative z-20 flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors duration-700">
            {getIcon(item.id)}
          </div>
        </GlassSurface>
      </a>
    </div>
  );
});

export default SidebarItem;