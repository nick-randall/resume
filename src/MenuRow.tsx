import { FC, forwardRef } from "react";
import useMediaQuery from "./useMediaQuery";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import MenuTriple from "./MenuTriple";

interface MenuRowProps {
  hidden?: boolean
}

const MenuRow = forwardRef<HTMLDivElement, MenuRowProps>(({hidden}, forwardedRef )=> {
  const { deviceType } = useMediaQuery();

  return (
      <div className="flex-row space-between align-end" ref={forwardedRef}>
        <Logo hidden={hidden}/>
        {deviceType === "phone" && <Hamburger hidden={hidden} onPressed={() => {}} />}
        {deviceType === "laptop" && <MenuTriple hidden={hidden} />}
      </div>
  );
});

export default MenuRow;
