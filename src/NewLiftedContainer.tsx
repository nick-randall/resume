import { FC, useState } from "react";
import  bellowsAnimationValues  from "./generateBounceAnimationValues";
import { Transition } from "react-transition-group";
import { initialDelayDuration } from "./constants";

interface NewLiftedContainerProps {
  children: JSX.Element;
  topContainerProps?: TopContainerProps
}

const NewLiftedContainer: FC<NewLiftedContainerProps> = ({ children, topContainerProps }) => {
  
  return (

    <div
      className="top-container"
      style={{
        transition: `${topContainerProps?.transitionDuration}s`,
        transform: `translateY(calc(-98% + ${topContainerProps?.top}px))`
      }}
    >
      {children}
    </div>
   
  );
};

export default NewLiftedContainer;
