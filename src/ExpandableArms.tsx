import { forwardRef, useContext } from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { MockLayoutContext } from "./AnimationValuesProvider";

type ExpandableArmsProps = {
  armLength: number;
  armFatness: number;
  foldInExtent: number;
  foldOutExtent: number;
  animationDuration: number;
  animationTimingFunction: string;
  totalNumberRows: number;
  currentRowNumber?: number;
  handleAnimationEnd?: () => void;
};

type ExpandableArmsRecursiveProps = ExpandableArmsProps & {
  isLeftArm: boolean;
};

const ArmContainer = styled.div<{
  armLength: number;
  top: number;
  left: number;
  animation: Keyframes;
  duration: number;
  animationTimingFunction: string;
  rotate: number;
}>`
  width: ${props => props.armLength}px;
  height: ${props => props.armLength}px;
  top: ${props => props.top}px;
  left: -${props => props.armLength / 2}px;
  rotate: ${props => props.rotate}deg;
  animation: ${props => props.animation} ${props => props.duration}s ${props => props.animationTimingFunction};
  position: absolute;
`;

const SkeletonArm = styled.div<{ armLength: number }>`
  position: absolute;
  left: ${props => props.armLength / 2}px;
  width: 0px;
  height: ${props => props.armLength}px;
  margin-top: 50%;
`;

const FatArm = styled.div<{ armLength: number; armFatness: number; height: number; top: number; left: number; }>`
  position: absolute;
  width: ${props => props.armFatness}px;
  height: ${props => props.height}px;
  margin-top: 50%;
  background-color: white;
  transform: translateY(calc(-50%)) translateX(-50%);
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

const ExpandableArmsRecursive = forwardRef<HTMLDivElement, ExpandableArmsRecursiveProps>((props: ExpandableArmsRecursiveProps, forwardedRef) => {
  const {
    armLength,
    armFatness,
    foldInExtent,
    foldOutExtent,
    animationDuration,
    animationTimingFunction,
    currentRowNumber = 1,
    totalNumberRows,
    isLeftArm,
    handleAnimationEnd,
  } = props;

  const rotateDoubleClockwise = keyframes`
    0% {
      rotate: ${foldInExtent * 2}deg;
    }
    100% {
      rotate: ${foldOutExtent * 2}deg;
    }
  `;

  const rotateDoubleAnticlockwise = keyframes`
    0% {
      rotate: -${foldInExtent * 2}deg;
    }
    100% {
      rotate: -${foldOutExtent * 2}deg;
    }
  `;

  const armContainerTop = currentRowNumber > 2 ? armLength * 2 - armLength * 0.5 : armLength * 0.5;
  const fatArmTop = currentRowNumber === 0 ? armLength / 2 : armLength;
  const isFinalArm = isLeftArm && currentRowNumber === totalNumberRows;

  const fatArmHeight = currentRowNumber === 0 ? armLength : armLength * 2;
  let animation = rotateDoubleClockwise;
  let rotation = 0;
  const rowNumberIsEven = currentRowNumber % 2 === 1;

  if (isLeftArm) {
    animation = rowNumberIsEven ? rotateDoubleClockwise : rotateDoubleAnticlockwise;
    rotation = !rowNumberIsEven ? -foldOutExtent * 2 : foldOutExtent * 2;
  } else {
    animation = rowNumberIsEven ? rotateDoubleAnticlockwise : rotateDoubleClockwise;
    rotation = !rowNumberIsEven ? foldOutExtent * 2 : -foldOutExtent * 2;
  }
  const ref = isFinalArm ? { ref: forwardedRef } : {};
  return (
    <>
      <ArmContainer
        armLength={armLength}
        top={armContainerTop}
        left={armLength / 2}
        duration={animationDuration}
        animation={animation}
        animationTimingFunction={animationTimingFunction}
        rotate={rotation}
        onAnimationEnd={isFinalArm ?  handleAnimationEnd : undefined}
      >
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} height={fatArmHeight} top={fatArmTop} left={0} {...ref} />
          {currentRowNumber < totalNumberRows && <ExpandableArmsRecursive {...props} currentRowNumber={currentRowNumber + 1} ref={forwardedRef} />}
        </SkeletonArm>
      </ArmContainer>
    </>
  );
});
const ExpandableArms = forwardRef<HTMLDivElement, ExpandableArmsProps>((props: ExpandableArmsProps, forwardedRef) => {
  const { armLength, armFatness, foldInExtent, foldOutExtent, animationDuration, animationTimingFunction, handleAnimationEnd } = props;
  const { handleBellowsIterationEnd } = useContext(MockLayoutContext);



  const rotateClockwise = keyframes`
      0% {
        rotate: ${foldInExtent}deg;
      }
      100% {
        rotate: ${foldOutExtent}deg;
      }
    `;
  const rotateAnticlockwise = keyframes`
      0% {
        rotate: -${foldInExtent}deg;
      }
      100% {
        rotate: -${foldOutExtent}deg;
      }
    `;

  return (
    <>
      <ArmContainer
        armLength={armLength}
        top={0}
        left={0}
        duration={animationDuration}
        animation={rotateClockwise}
        animationTimingFunction={animationTimingFunction}
        rotate={foldOutExtent}
      >
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} top={armLength / 2} height={armLength} left={0}  />

          <ExpandableArmsRecursive {...props} currentRowNumber={2} isLeftArm={true} ref={forwardedRef} handleAnimationEnd={handleBellowsIterationEnd} />
        </SkeletonArm>
      </ArmContainer>
      <ArmContainer
        armLength={armLength}
        top={0}
        left={0}
        duration={animationDuration}
        animation={rotateAnticlockwise}
        animationTimingFunction={animationTimingFunction}
        rotate={-foldOutExtent}
      >
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} top={armLength / 2} height={armLength} left={0} />

          <ExpandableArmsRecursive {...props} currentRowNumber={2} isLeftArm={false} />
        </SkeletonArm>
      </ArmContainer>
    </>
  );
});

export default ExpandableArms;
