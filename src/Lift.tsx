import { forwardRef, useContext } from "react";
import ExpandableArms from "./ExpandableArms";
import { MockLayoutContext } from "./AnimationValuesProvider";

interface LiftProps {
  armFatness: number;
  armLength: number;
  totalNumberRows: number;
  handleAnimationEnd: () => void;
  onIterationEnd: (animationDuration: number) => void;
}

const Lift = forwardRef<HTMLDivElement, LiftProps>(
  ({ armFatness, armLength, totalNumberRows, handleAnimationEnd, onIterationEnd }, forwardedRef) => {
    const { bellowsAnimationValues, handleBellowsIterationEnd, allValuesReady } = useContext(MockLayoutContext);

    if (allValuesReady()) {
    return (
      <>
        <div style={{ position: "absolute", left: armLength }}>
          <ExpandableArms
            ref={forwardedRef}
            armLength={armLength}
            armFatness={armFatness}
            foldInExtent={bellowsAnimationValues[0].foldInExtent}
            foldOutExtent={bellowsAnimationValues[0].foldOutExtent}
            animationDuration={bellowsAnimationValues[0].animationDuration}
            animationTimingFunction={bellowsAnimationValues[0].animationTimingFunction}
            totalNumberRows={totalNumberRows}
            handleAnimationEnd={handleBellowsIterationEnd}
          />
        </div>
        <div style={{ position: "absolute", right: armLength }}>
          <ExpandableArms
            armLength={armLength}
            armFatness={armFatness}
            foldInExtent={bellowsAnimationValues[0].foldInExtent}
            foldOutExtent={bellowsAnimationValues[0].foldOutExtent}
            animationDuration={bellowsAnimationValues[0].animationDuration}
            animationTimingFunction={bellowsAnimationValues[0].animationTimingFunction}
            totalNumberRows={totalNumberRows}
          />
        </div>
      </>
    );
  }
return <div/>}
);

export default Lift;
