import { FC } from "react";
import "./css/menu.css";

interface LogoProps {
  hidden?: boolean;
}

const Logo: FC<LogoProps> = ({ hidden }) => {
  return (
    <a href="#top" style={{ fontSize: 30, color: "#FFF500", lineHeight: 0.8 }} className={hidden ? "hidden" : ""}>
      NR
    </a>
  );
};

export default Logo;
