import { forwardRef, useEffect, useState } from "react";
import ExpandableArms from "./ExpandableArms";
import {bellowsAnimationValues} from "./generateBounceAnimationValues";

interface LiftProps {
  armFatness: number;
  armLength: number;
  totalNumberRows: number;
  handleAnimationEnd: () => void;
}

const Lift = forwardRef<HTMLDivElement, LiftProps>(
  (
    { armFatness, armLength, totalNumberRows, handleAnimationEnd },
    forwardedRef
  ) => {
    const [currBounceAnimationValues, setCurrBounceAnimation] = useState(bellowsAnimationValues);

    const handleIterationEnd = () => {
      if (currBounceAnimationValues.length === 1) {
        handleAnimationEnd();
      } else {
        setCurrBounceAnimation(currBounceAnimationValues.slice(1));
      }
    };
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
          />
        </div>
      </>
    );
  }
);

export default Lift;
