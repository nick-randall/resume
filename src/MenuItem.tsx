import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./css/menu.css"

interface MenuItemProps {
  name: string;
  handleMenuItemClicked?: (event: React.MouseEvent) => void
  hidden?: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ name, handleMenuItemClicked, hidden }) => {
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
      <img src={`./${name}.png`} className={`menu-icon ${hidden ? "hidden" : ""}`} alt={name}/>
      <div className={`menu-text ${hidden ? "hidden" : ""}`}>{name}</div>
    </div>
    </div>
  );
};

export default MenuItem;
