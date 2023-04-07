import { forwardRef, useEffect, useState } from "react";
import ExpandableArms from "./ExpandableArms";
import bellowsAnimationValues from "./generateBounceAnimationValues";

interface LiftProps {
  armFatness: number;
  armLength: number;
  totalNumberRows: number;
  mock?: boolean;
  handleAnimationEnd: () => void;
  onIterationEnd: (animationDuration: number) => void;
}

const Lift = forwardRef<HTMLDivElement, LiftProps>(({ armFatness, armLength, totalNumberRows, handleAnimationEnd, onIterationEnd, mock }, forwardedRef) => {
  const [currBounceAnimationValues, setCurrBounceAnimation] = useState(bellowsAnimationValues);

  const handleIterationEnd = () => {
    onIterationEnd(currBounceAnimationValues[0].animationDuration);
    if (currBounceAnimationValues.length === 1) {
      handleAnimationEnd();
    } else {
      setCurrBounceAnimation(currBounceAnimationValues.slice(1));
    }
  };
  useEffect(() => onIterationEnd(0), []);
  return (
    <>
      <div style={{ position: "absolute", left: armLength }}>
        <ExpandableArms
          ref={forwardedRef}
          armLength={armLength}
          armFatness={armFatness}
          foldInExtent={currBounceAnimationValues[0].foldInExtent}
          foldOutExtent={currBounceAnimationValues[0].foldOutExtent}
          animationDuration={currBounceAnimationValues[0].animationDuration}
          animationTimingFunction={currBounceAnimationValues[0].animationTimingFunction}
          totalNumberRows={totalNumberRows}
          color={mock ? "transparent" : "white"}
          handleAnimationEnd={handleIterationEnd}
        />
      </div>
      <div style={{ position: "absolute", right: armLength }}>
        <ExpandableArms
          armLength={armLength}
          armFatness={armFatness}
          foldInExtent={currBounceAnimationValues[0].foldInExtent}
          foldOutExtent={currBounceAnimationValues[0].foldOutExtent}
          animationDuration={currBounceAnimationValues[0].animationDuration}
          animationTimingFunction={currBounceAnimationValues[0].animationTimingFunction}
          totalNumberRows={totalNumberRows}
          color={mock ? "transparent" : "white"}
        />
      </div>
    </>
  );
});

export default Lift;
