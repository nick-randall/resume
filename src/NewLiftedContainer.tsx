import { FC, useContext } from "react";
import { MockLayoutContext } from "./topContainerAnimationProvider";

interface NewLiftedContainerProps {
  children: JSX.Element;
}

const NewLiftedContainer: FC<NewLiftedContainerProps> = ({ children }) => {
  const { mockAnimationValues, allValuesReady, handleIterationEnd } = useContext(MockLayoutContext);

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
        onTransitionEnd={handleIterationEnd}
      >
        {children}
      </div>
    );
  }
  return <div>{children}</div>;
};

export default NewLiftedContainer;
