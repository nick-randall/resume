import { FC } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  name: string;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ name, onClick }) => {
  return (
    <Link to={`/${name}`}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "2rem",
        color: "white",
        fontFamily: "DIN",
        justifyContent: "space-between",
        height: "3.1rem"
      }}
    >
      <img src={`./${name}.png`} className="menu-icon" alt={name} />
      <div className="menu-text">{name}</div>
    </div>
    </Link>
  );
};

export default MenuItem;
