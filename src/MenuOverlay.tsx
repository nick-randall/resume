import { FC } from "react";
import MenuTriple from "./MenuTriple";
import Logo from "./Logo";
import useMediaQuery from "./useMediaQuery";
import Hamburger from "./Hamburger";
import MenuRow from "./MenuRow";
import { Transition } from "react-transition-group";

export interface MenuOverlayProps {
  dx: number;
  dy: number;
  visible: boolean;
}

const MenuOverlay: FC<MenuOverlayProps> = ({ dx, dy, visible }) => {
  const { deviceType } = useMediaQuery();
  if (!visible) return null;
  return (
    <Transition timeout={0} appear={true} in={true}>
      {state => {console.log("menu overlay state" + state)
       return  <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr", position: "sticky", top: 20}}>
          <div />
          <div style={{ position: "sticky", transition: "800ms", transform: `translateY(${state === "entering" ? dy : 10}px` }}>
            <MenuRow />
          </div>
          <div />
        </div>}
      }
    </Transition>
  );
};

export default MenuOverlay;
