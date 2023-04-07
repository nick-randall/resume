import { FC, useState } from "react";
import styled, { Keyframes, css, keyframes } from "styled-components";
import  bellowsAnimationValues  from "./generateBounceAnimationValues";
import { Transition } from "react-transition-group";
import { initialDelayDuration } from "./constants";

interface NewLiftedContainerProps {
  children: JSX.Element;
}

const NewLiftedContainer: FC<NewLiftedContainerProps> = ({ children }) => {
  const [currBounceAnimationValues, setCurrBounceAnimationValues] = useState<LiftAnimationProps[]>(bellowsAnimationValues);
  const [active, setActive] = useState(true);

  const handleIterationEnd = () => {
    console.log("transition end")
    if (currBounceAnimationValues.length === 2) {
      // handleAnimationEnd();
      setActive(false);
    } else {
      setCurrBounceAnimationValues(currBounceAnimationValues.slice(1));
    }
  };
  const transition = currBounceAnimationValues[1];

  return (
    <Transition in={true} appear={true} timeout={initialDelayDuration}>{
      state => 
    <div
      className="top-container"
      style={{
        transition: `${transition.animationDuration}s`,
        transform: state === "entering" ? "translateY(0px)" : `translateY(${transition.foldInExtent}px)`
      }}
      onTransitionEnd={handleIterationEnd}
    >
      {children}
    </div>}
    </Transition>
  );
};

export default NewLiftedContainer;
