import { FC } from "react";
import { Transition } from "react-transition-group";
import { pageFadeDuration } from "./constants";

interface CurtainFadeProps {
  children: JSX.Element;
}

const CurtainFade: FC<CurtainFadeProps> = ({ children }) => {
  const curtainOpacity = {
    unmounted: 0,
    entering: 0,
    entered: 1,
    exiting: 1,
    exited: 0,
  };

  return children;
};

export default CurtainFade;
