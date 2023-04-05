import { FC } from "react";
import MenuItem from "./MenuItem";

interface MenuTripleProps {
  handleMenuItemClicked?: (event: React.MouseEvent) => void;
  hidden?: boolean;
}

const MenuTriple: FC<MenuTripleProps> = ({ handleMenuItemClicked, hidden }) => {
  return (
    <div className="flex-row">
      <MenuItem name="frameworks" handleMenuItemClicked={handleMenuItemClicked} hidden={hidden} />
      <MenuItem name="projects" handleMenuItemClicked={handleMenuItemClicked} hidden={hidden} />
      <MenuItem name="connect" handleMenuItemClicked={handleMenuItemClicked} hidden={hidden} />
    </div>
  );
};

export default MenuTriple;
