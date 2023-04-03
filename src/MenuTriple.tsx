import { FC } from "react";
import MenuItem from "./MenuItem";

interface MenuTripleProps {
  handleMenuItemClicked?: (event: React.MouseEvent) => void
}

const MenuTriple: FC<MenuTripleProps> = ({handleMenuItemClicked}) => {

  return (
    <div className="flex-row">
      <MenuItem name="connect" handleMenuItemClicked={handleMenuItemClicked} />
      <MenuItem name="projects" handleMenuItemClicked={handleMenuItemClicked}/>
      <MenuItem name="frameworks" handleMenuItemClicked={handleMenuItemClicked}/>
    </div>
  );
};

export default MenuTriple;
