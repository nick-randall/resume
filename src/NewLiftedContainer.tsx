import { FC, useContext } from "react";
import { MockLayoutContext } from "./AnimationValuesProvider";

interface NewLiftedContainerProps {
  children: JSX.Element;
}

const NewLiftedContainer: FC<NewLiftedContainerProps> = ({ children }) => {
  const { mockAnimationValues, allValuesReady, handleLiftIterationEnd } = useContext(MockLayoutContext);

  if (allValuesReady()) {
    const currAnimationValues = mockAnimationValues[0];

    return (
      <div
        className="top-container"
        style={{
          transition: `${currAnimationValues.animationDuration}s`,
          transform: `translateY(calc(-98% + ${currAnimationValues.dy}px))`,
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
