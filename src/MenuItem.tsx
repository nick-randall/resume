import { Dispatch, FC } from "react";
import { useNavigate } from "react-router-dom";
import { pageFadeDuration } from "./constants";

interface MenuItemProps {
  name: string;
  setExitingPage: Dispatch<React.SetStateAction<boolean>>;
}

const MenuItem: FC<MenuItemProps> = ({ name, setExitingPage }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setExitingPage(true);
    setTimeout(() => navigate(`/${name}`), pageFadeDuration);
  };
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
        height: "3.1rem",
      }}
      onClick={handleClick}
    >
      <img src={`./${name}.png`} className="menu-icon" alt={name} />
      <div className="menu-text">{name}</div>
    </div>
  );
};

export default MenuItem;
