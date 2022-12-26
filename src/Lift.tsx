import { FC, forwardRef, useEffect, useRef, useState } from "react";
import ExpandableArms from "./ExpandableArms";

interface LiftProps {
  armFatness: number;
  armLength: number;
  foldInExtent: number;
  foldOutExtent: number;
  totalNumberRows: number;
  animationDuration: number;
  animationTimingFunction: string;
  platform: JSX.Element;
  setMovePlatform: () => void
}

const Lift = forwardRef<HTMLDivElement, LiftProps>(({
  armFatness,
  armLength,
  animationDuration,
  animationTimingFunction,
  foldInExtent,
  foldOutExtent,
  totalNumberRows,
  platform,
  setMovePlatform
}, forwardedRef) => {
  // const [platformTop, setPlatformTop] = useState(0);
  // const interval = useRef<NodeJS.Timer>();
  // const ref = useRef<HTMLDivElement>(null);

  // const followTopOfArms = () => {
  //   const box = ref.current?.getBoundingClientRect();
  //   if (box) setPlatformTop(box.top + window.scrollY);
  // };
  // useEffect(() => {
  //   if (!interval.current)
  //     interval.current = setInterval(() => {
  //       followTopOfArms();
  //     }, 1);
  // }, []);
  return (
    <>
        <div style={{ position: "absolute", left: "10%"}}>
          <ExpandableArms
            ref={forwardedRef}
            armLength={armLength}
            armFatness={armFatness}
            animationDuration={animationDuration}
            animationTimingFunction={animationTimingFunction} //"cubic-bezier(0.1, 1.6, 0.4, 0.8)"
            foldInExtent={foldInExtent}
            foldOutExtent={foldOutExtent}
            totalNumberRows={totalNumberRows}
            setMovePlatform={setMovePlatform}
          />
        </div>
        <div style={{ position: "absolute", right: "10%"}}>
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
      {/* <div style={{ position: "relative", top: platformTop }}>{platform}</div> */}

    </>
  );
});

export default Lift;
