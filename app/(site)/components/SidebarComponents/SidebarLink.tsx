import { FC, JSX } from "react";
import Tooltip from "./Tooltip";
import LiquidGlassIcon from "./LiquidGlassIcon";

interface SidebarLinkProps {
  id: string;
  label: string;
  icon: JSX.Element;
  active: boolean;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

const SidebarLink: FC<SidebarLinkProps> = ({ id, label, icon, active, hoveredId, setHoveredId }) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <Tooltip id={id} label={label} visible={hoveredId === id} />
      <LiquidGlassIcon active={active} hovered={hoveredId === id}>
        {icon}
      </LiquidGlassIcon>
    </div>
  );
};

export default SidebarLink;
