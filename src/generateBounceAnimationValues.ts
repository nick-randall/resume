import { initialDelayDuration } from "./constants";
import { v4 } from "uuid";

const durationConstant = 0.015;

const currExtentisLessThanOne = (num: number) => (num < 0.5 && num > 0) || (num > -0.5 && num < 0);

const getDuration = (start: number, end: number) => (end - start < 0 ? (start - end) * durationConstant : (end - start) * durationConstant);

interface BounceAnimationProps {
  initialFoldInExtent: number;
  finalFoldOutExtent: number;
  overreachExtent: number;
  reduceBounceSpeed: number;
  initialDelay: number;
}

const animationTimingFunctions = {
  pop: "cubic-bezier(0.8, 1.6, 1, 0.8)",
  extremePop: "cubic-bezier(0.1, 1.6, 0.4, 0.8)",
  speedSlow: "cubic-bezier(0.64, 0.45, 0.44, 1)",
  speedSlow2: "cubic-bezier(0.64, 0.45, 0.44, 0.44)",
  easeOut: "ease-out",
  ease: "ease",
  linear: "linear",
};

let extentPairs = [];
const iterations: LiftAnimationProps[] = [];
const generateBounceAnimationValues = (props: BounceAnimationProps) => {
  const { initialFoldInExtent, overreachExtent, reduceBounceSpeed, finalFoldOutExtent, initialDelay } = props;
  let currExtent = overreachExtent / reduceBounceSpeed;

  iterations.push({
    id: v4(),
    foldInExtent: initialFoldInExtent,
    foldOutExtent: finalFoldOutExtent + currExtent,
    animationDuration: getDuration(initialFoldInExtent, finalFoldOutExtent + overreachExtent),
    animationTimingFunction: animationTimingFunctions.easeOut,
  });

  extentPairs = [initialFoldInExtent, finalFoldOutExtent + overreachExtent];
  while (!currExtentisLessThanOne(currExtent)) {
    let prevExtent = currExtent;
    currExtent = (currExtent / reduceBounceSpeed) * -1;
    extentPairs.push(currExtent + finalFoldOutExtent);
    iterations.push({
      id: v4(),
      foldInExtent: prevExtent + finalFoldOutExtent,
      foldOutExtent: currExtent + finalFoldOutExtent,
      animationDuration: getDuration(prevExtent, currExtent) * iterations.length,
      animationTimingFunction: animationTimingFunctions.easeOut,
    });
  }
  // iterations[0].animationDuration = 0.7;
  const original = {
    id: v4(),
    foldInExtent: initialFoldInExtent,
    foldOutExtent: initialFoldInExtent,
    animationDuration: initialDelay,
    animationTimingFunction: "",
  };

  iterations.unshift(original);
  return iterations;
};

export default generateBounceAnimationValues({
  initialFoldInExtent: 100,
  overreachExtent: 26,
  reduceBounceSpeed: 1.5,
  finalFoldOutExtent: 135,
  initialDelay: initialDelayDuration / 1000,
});

// export const platformAnimationValues =  generateBounceAnimationValues({
//   initialFoldInExtent: 0,
//   overreachExtent: 26,
//   reduceBounceSpeed: 1.5,
//   finalFoldOutExtent: 435,
//   initialDelay: 1.5,
// });
