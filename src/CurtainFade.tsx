import { FC } from "react";
import { Transition } from "react-transition-group";

interface CurtainFadeProps {
children: JSX.Element
}

const CurtainFade: FC<CurtainFadeProps> = ({children}) => {
  return (
    <Transition timeout={0} in={true} appear={true}>
      {state => {
      console.log(state);
      return <div className={`curtain ${state === "entering" ? "fade-out-begin" : "fade-out-end"}`} >
        {children}
        </div>}}
    </Transition>
  );
};

export default CurtainFade;
