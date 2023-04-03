import { FC } from "react";
import { Transition } from "react-transition-group";
import { pageFadeDuration } from "./constants";

interface CurtainFadeProps {
  children: JSX.Element;
  exitingPage: boolean;
}

const CurtainFade: FC<CurtainFadeProps> = ({ children, exitingPage }) => {
  const curtainOpacity = {
    unmounted: 0,
    entering: 0,
    entered: 1,
    exiting: 1,
    exited: 0,
  };
console.log(exitingPage)
  return (
    <Transition timeout={0} in={!exitingPage} appear={true}>
      {state => {console.log(state); return  <div style={{ opacity: curtainOpacity[state], transition: `${pageFadeDuration}ms` }}>{children}</div>}}
    </Transition>
  );
};

export default CurtainFade;
