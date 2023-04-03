const durationConstant = 0.02;

const isLessThanOne = (num: number) => (num < 0.5 && num > 0) || (num > -0.5 && num < 0);

const getDuration = (start: number, end: number) => (end - start < 0 ? (start - end) * durationConstant : (end - start) * durationConstant);

interface BounceAnimationProps {
  initialFoldInExtent: number;
  finalFoldOutExtent: number;
  overreachExtent: number;
  reduceBounceSpeed: number;
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
  const { initialFoldInExtent, overreachExtent, reduceBounceSpeed, finalFoldOutExtent } = props;
  let currExtent = overreachExtent / reduceBounceSpeed;

  iterations.push({
    foldInExtent: initialFoldInExtent,
    foldOutExtent: finalFoldOutExtent + currExtent,
    animationDuration: getDuration(initialFoldInExtent, finalFoldOutExtent + overreachExtent),
    animationTimingFunction: animationTimingFunctions.easeOut,
  });

  extentPairs = [initialFoldInExtent, finalFoldOutExtent + overreachExtent];
  while (!isLessThanOne(currExtent)) {
    let prevExtent = currExtent;
    currExtent = (currExtent / reduceBounceSpeed) * -1;
    extentPairs.push(currExtent + finalFoldOutExtent);
    iterations.push({
      foldInExtent: prevExtent + finalFoldOutExtent,
      foldOutExtent: currExtent + finalFoldOutExtent,
      animationDuration: getDuration(prevExtent, currExtent),
      animationTimingFunction: animationTimingFunctions.easeOut,
    });
  }
  const original = { foldInExtent: initialFoldInExtent, foldOutExtent: initialFoldInExtent, animationDuration: 1, animationTimingFunction: "" };

  iterations.unshift(original);
  console.log(iterations);
  return iterations;
};

export default generateBounceAnimationValues({
  initialFoldInExtent: 100,
  overreachExtent: 26,
  reduceBounceSpeed: 1.5,
  finalFoldOutExtent: 135,
});
