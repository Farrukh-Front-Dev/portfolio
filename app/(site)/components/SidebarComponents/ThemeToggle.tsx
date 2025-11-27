import { FC } from "react";
import ToggleButton from "../../components/ToggleButton";

const ThemeToggle: FC = () => (
  <>
    {/* Mobile: bottom-right */}
    <div className="md:hidden fixed bottom-5 right-4 z-50">
      <ToggleButton />
    </div>
    {/* Desktop: top-right */}
    <div className="hidden md:block fixed top-4 right-4 z-50">
      <ToggleButton />
    </div>
  </>
);

export default ThemeToggle;
