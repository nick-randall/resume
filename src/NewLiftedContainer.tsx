import { FC, useContext, useState } from "react";
import { MockLayoutContext } from "./AnimationValuesProvider";

interface NewLiftedContainerProps {
  children: JSX.Element;
}

const NewLiftedContainer: FC<NewLiftedContainerProps> = ({ children }) => {
  const { mockAnimationValues, allValuesReady, handleLiftIterationEnd } = useContext(MockLayoutContext);
  const [initialised, setInitialised] = useState(false);

  if (allValuesReady()) {
    setTimeout(() => setInitialised(true), 1);

    const currAnimationValues = mockAnimationValues[0];
    const ex = initialised ? 0 : 1;
    return (
      <div
        className="top-container"
        style={{
          transition:  initialised ? `${currAnimationValues.animationDuration}s ease-out` : "",
          transform: `translateY(calc(-98% + ${currAnimationValues.dy + ex}px))`,
          position: "relative",
        }}
        onTransitionEnd={handleLiftIterationEnd}
      >
        {children}
      </div>
    );
  }
  return <div></div>;
};

export default NewLiftedContainer;
