import { Dispatch, FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface MenuItemProps {
  name: string;
  handleMenuItemClicked?: (event: React.MouseEvent) => void

}

const MenuItem: FC<MenuItemProps> = ({ name, handleMenuItemClicked }) => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent) => {
    console.log("clicked " + name)
    handleMenuItemClicked?.(event);
    setTimeout(() => 
    navigate(`/${name}`)
    , 0);
  };
  return (
    <div onClick={handleClick}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "2rem",
        color: "white",
        fontFamily: "DIN",
        justifyContent: "space-between",
        height: "3.1rem",
      }}
    >
      <img src={`./${name}.png`} className="menu-icon" alt={name} />
      <div className="menu-text">{name}</div>
    </div>
    </div>
  );
};

export default MenuItem;
