import { FC } from "react";
import MenuTriple from "./MenuTriple";
import Logo from "./Logo";
import useMediaQuery from "./useMediaQuery";
import Hamburger from "./Hamburger";

export interface MenuOverlayProps {
  dx: number;
  dy: number;
  visible: boolean;
}

const MenuOverlay: FC<MenuOverlayProps> = ({ dx, dy, visible }) => {
  const { deviceType } = useMediaQuery();
  if (!visible) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr" }}>
      <div />
      <div style={{ position: "sticky", transform: `translateY(${dy}px)` }}>
        <div className="flex-row space-between align-end">
          <Logo />
          {deviceType === "phone" && <Hamburger onPressed={() => {}} />}
          {deviceType === "laptop" && <MenuTriple />}
        </div>
      </div>
      <div />
    </div>
    //   )}
    // </Transition>
  );
};

export default MenuOverlay;
