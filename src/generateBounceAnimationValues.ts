const isLessThanOne = (num: number) => (num < 0.5 && num > 0) || (num > -0.5 && num < 0);

const durationConstant = 0.02;

const getDuration = (start: number, end: number) => (end - start < 0 ? (start - end) * durationConstant : (end - start) * durationConstant);

interface BounceAnimationProps {
  initialFoldInExtent: number;
  finalFoldOutExtent: number;
  overreachExtent: number;
  reduceBounceSpeed: number;
}

interface BounceAnimationPart {
  foldInExtent: number;
  foldOutExtent: number;
  animationTimingFunction: string;
  duration: number;
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
const bounceAnimationParts: BounceAnimationPart[] = [];
const generateBounceAnimationValues = (props: BounceAnimationProps) => {
  const { initialFoldInExtent, overreachExtent, reduceBounceSpeed, finalFoldOutExtent } = props;
  let currExtent = overreachExtent / reduceBounceSpeed;

  bounceAnimationParts.push({
    foldInExtent: initialFoldInExtent,
    foldOutExtent: finalFoldOutExtent + currExtent,
    duration: getDuration(initialFoldInExtent, finalFoldOutExtent + overreachExtent),
    animationTimingFunction: animationTimingFunctions.speedSlow,
  });

  extentPairs = [initialFoldInExtent, finalFoldOutExtent + overreachExtent];
  while (!isLessThanOne(currExtent)) {
    let prevExtent = currExtent;
    currExtent = (currExtent / reduceBounceSpeed) * -1;
    extentPairs.push(currExtent + finalFoldOutExtent);
    bounceAnimationParts.push({
      foldInExtent: prevExtent + finalFoldOutExtent,
      foldOutExtent: currExtent + finalFoldOutExtent,
      duration: getDuration(prevExtent, currExtent),
      animationTimingFunction: animationTimingFunctions.easeOut,
    });
  }
  console.log(bounceAnimationParts);
  return bounceAnimationParts;
};

export default generateBounceAnimationValues({
  initialFoldInExtent: 95,
  overreachExtent: 8,
  reduceBounceSpeed: 1.3,
  finalFoldOutExtent: 135,
});
