import { forwardRef } from "react";
import ExpandableArms from "./ExpandableArms";

interface LiftProps {
  armFatness: number;
  armLength: number;
  foldInExtent: number;
  foldOutExtent: number;
  totalNumberRows: number;
  animationDuration: number;
  animationTimingFunction: string;
  handleAnimationEnd: () => void;
}

const Lift = forwardRef<HTMLDivElement, LiftProps>(
  (
    { armFatness, armLength, animationDuration, animationTimingFunction, foldInExtent, foldOutExtent, totalNumberRows, handleAnimationEnd },
    forwardedRef
  ) => {
    return (
      <>
        <div style={{ position: "absolute", left: armLength }}>
          <ExpandableArms
            ref={forwardedRef}
            armLength={armLength}
            armFatness={armFatness}
            animationDuration={animationDuration}
            animationTimingFunction={animationTimingFunction} //"cubic-bezier(0.1, 1.6, 0.4, 0.8)"
            foldInExtent={foldInExtent}
            foldOutExtent={foldOutExtent}
            totalNumberRows={totalNumberRows}
            handleAnimationEnd={handleAnimationEnd}
          />
        </div>
        <div style={{ position: "absolute", right: armLength }}>
          <ExpandableArms
            armLength={armLength}
            armFatness={armFatness}
            animationDuration={animationDuration}
            animationTimingFunction={animationTimingFunction} //"cubic-bezier(0.1, 1.6, 0.4, 0.8)"
            foldInExtent={foldInExtent}
            foldOutExtent={foldOutExtent}
            totalNumberRows={totalNumberRows}
          />
        </div>
      </>
    );
  }
);

export default Lift;
