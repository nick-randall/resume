import { forwardRef, useContext, useEffect, useState } from "react";
import ExpandableArms from "./ExpandableArms";
import bellowsAnimationValues from "./generateBounceAnimationValues";
import { MockLayoutContext } from "./AnimationValuesProvider";

interface LiftProps {
  armFatness: number;
  armLength: number;
  totalNumberRows: number;
  mock?: boolean;
  handleAnimationEnd: () => void;
  onIterationEnd: (animationDuration: number) => void;
}

const Lift = forwardRef<HTMLDivElement, LiftProps>(
  ({ armFatness, armLength, totalNumberRows, handleAnimationEnd, onIterationEnd, mock }, forwardedRef) => {
    // const [bellowsAnimationValues, setCurrBounceAnimation] = useState(bellowsAnimationValues);
    const { bellowsAnimationValues, handleBellowsIterationEnd } = useContext(MockLayoutContext);
    // const handleIterationEnd = () => {
    //   onIterationEnd(bellowsAnimationValues[0].animationDuration);
    //   if (bellowsAnimationValues.length === 1) {
    //     handleAnimationEnd();
    //   } else {
    //     setCurrBounceAnimation(bellowsAnimationValues.slice(1));
    //   }
    // };
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
);

export default Lift;
