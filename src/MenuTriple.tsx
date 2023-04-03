import { Dispatch, FC } from "react";
import MenuItem from "./MenuItem";

interface MenuTripleProps {
}

const MenuTriple: FC<MenuTripleProps> = ({}) => {
  return (
    <div className="flex-row">
      <MenuItem name="connect" />
      <MenuItem name="projects" />
      <MenuItem name="frameworks" />
    </div>
  );
};

export default MenuTriple;
