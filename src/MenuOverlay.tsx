import { FC } from "react";
import MenuTriple from "./MenuTriple";
import Logo from "./Logo";
import { Transition } from "react-transition-group";

export interface MenuOverlayProps {
  dx: number;
  dy: number;
  visible: boolean;
}

const MenuOverlay: FC<MenuOverlayProps> = ({ dx, dy, visible }) => {
  if (!visible) return null;
  return (
    // <Transition timeout={0} in = {visible} appear={true}>
    //   {state => (
    <div style={{ position: "absolute", top: dy, left: dx }}>
      <div className="flex-row space-between align-end" style={{ backgroundColor: "red" }}>
        <Logo />
        <MenuTriple />
      </div>
    </div>
    //   )}
    // </Transition>
  );
};

export default MenuOverlay;
