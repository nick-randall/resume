import { FC } from "react";
import useMediaQuery from "./useMediaQuery";
import MenuRow from "./MenuRow";

export interface MenuOverlayProps {
  dx: number;
  dy: number;
  visible: boolean;
}

const MenuOverlay: FC<MenuOverlayProps> = ({ dx, dy, visible }) => {
  const { deviceType } = useMediaQuery();
  return (
    <div style={{position: "sticky", top: dy }}>
      <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr"}}>
        <div />
        <MenuRow hidden={!visible}/>
        <div />
      </div>
    </div>
  );
};

export default MenuOverlay;
