import { FC } from "react";

interface MenuItemProps {
  name: string;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ name, onClick }) => {
  return (
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
      onClick={onClick}
    >
      <img src={`./${name}.png`} className="menu-icon" alt={name} />
      <div className="menu-text">{name}</div>
    </div>
  );
};

export default MenuItem;
