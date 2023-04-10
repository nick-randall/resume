import { FC } from "react";
import "./css/menu.css";

interface MenuItemProps {
  name: string;
  handleMenuItemClicked?: (event: React.MouseEvent) => void;
  hidden?: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ name, handleMenuItemClicked, hidden }) => {
  return (
    <a href={`#${name}`}>
      <div className="menu-item">
        <img src={`./${name}.png`} className={`menu-icon ${hidden ? "hidden" : ""}`} alt={name} />
        <div className={`menu-text ${hidden ? "hidden" : ""}`}>{name}</div>
      </div>
    </a>
  );
};

export default MenuItem;
