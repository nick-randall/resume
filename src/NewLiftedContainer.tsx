import { FC, useContext, useEffect, useState } from "react";
import { MockLayoutContext } from "./AnimationValuesProvider";
import { Transition } from "react-transition-group";

interface NewLiftedContainerProps {
  children: JSX.Element;
}

const NewLiftedContainer: FC<NewLiftedContainerProps> = ({ children }) => {
  const { initialised, mockAnimationValues, allValuesReady, handleLiftIterationEnd } = useContext(MockLayoutContext);


  if (allValuesReady()) {
    const currAnimationValues = mockAnimationValues[0];
    const ex = initialised ? 0 : 1
    return (
      <div
        className="top-container"
        style={{
          transition: initialised ? `${currAnimationValues.animationDuration}s ease-out` : "",
          transform: `translateY(calc(-98% + ${currAnimationValues.dy + ex}px))`,
          position: "relative",
        }}
        onTransitionEnd={handleLiftIterationEnd}
      >
        {children}
      </div>
    );
  }
  return <div>{children}</div>;
};

export default NewLiftedContainer;
