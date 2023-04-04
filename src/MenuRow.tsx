import { FC } from "react";
import useMediaQuery from "./useMediaQuery";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import MenuTriple from "./MenuTriple";

interface MenuRowProps {
}

const MenuRow: FC<MenuRowProps> = () => {
  const { deviceType } = useMediaQuery();

  return (
      <div className="flex-row space-between align-end">
        <Logo />
        {deviceType === "phone" && <Hamburger onPressed={() => {}} />}
        {deviceType === "laptop" && <MenuTriple />}
      </div>
  );
};

export default MenuRow;
