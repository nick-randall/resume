import { FC } from "react";
import styled, { keyframes, Keyframes } from "styled-components";

type ExpandableArmsProps = {
  armLength: number;
  armFatness: number;
  foldInExtent: number;
  foldOutExtent: number;
  animationDuration: number;
  animationTimingFunction: string;
  totalNumberRows: number;
  currentRowNumber?: number;
};

type ExpandableArmsRecursiveProps = ExpandableArmsProps & {
  leftSide: boolean;
};

const ArmContainer = styled.div<{
  armLength: number;
  top: number;
  left: number;
  animation: Keyframes;
  duration: number;
  animationTimingFunction: string;
}>`
  width: ${props => props.armLength}px;
  height: ${props => props.armLength}px;
  top: ${props => props.top}px;
  left: -${props => props.armLength / 2}px;
  animation: ${props => props.animation} ${props => props.duration}s ${props => props.animationTimingFunction} infinite;
  position: absolute;
  border: green solid thin; 
`;

const SkeletonArm = styled.div<{ armLength: number }>`
  position: absolute;
  left: ${props => props.armLength / 2}px;
  width: 0px;
  height: ${props => props.armLength}px;
  margin-top: 50%;
`;

const FatArm = styled.div<{ armLength: number; armFatness: number; height: number; top: number; left: number }>`
  position: absolute;
  width: ${props => props.armFatness}px;
  height: ${props => props.height}px;
  margin-top: 50%;
  background-color: red;
  transform: translateY(calc(-50%)) translateX(-50%);
  border-radius: 1ch;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

const isEven = (index: number) => index % 2 == 0;
const calculateRow = (index: number) => (isEven(index) ? index / 2 : (index - 1) / 2);

const ExpandableArmsRecursive: FC<ExpandableArmsRecursiveProps> = (props: ExpandableArmsRecursiveProps) => {
  const {
    armLength,
    armFatness,
    foldInExtent,
    foldOutExtent,
    animationDuration,
    animationTimingFunction,
    currentRowNumber = 1,
    totalNumberRows,
    leftSide,
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

  if (currentRowNumber > totalNumberRows) return null;
  const armContainerTop = currentRowNumber > 2 ? armLength * 2 - armLength * 0.5 : armLength * 0.5;
  const fatArmTop = currentRowNumber === 0 ? armLength / 2 : armLength;
  const fatArmLeft = 0; 

  const fatArmHeight = currentRowNumber === 0 ? armLength : armLength * 2.02;
  let animation = rotateDoubleClockwise;
  if (currentRowNumber % 2 === 1) {
    if(leftSide)
    animation = rotateDoubleClockwise;
    else
    animation = rotateDoubleAnticlockwise;
  }
  if (currentRowNumber % 2 === 0) {
    if(leftSide)
    animation = rotateDoubleAnticlockwise;
    else
    animation = rotateDoubleClockwise;
  }
  console.log(`currentRowNumber: ${currentRowNumber} totalNumberRows: ${totalNumberRows} animation: ${animation.getName()}`);

  return (
    <>
      <ArmContainer
        armLength={armLength}
        top={armContainerTop}
        left={armLength / 2}
        duration={animationDuration}
        animation={animation}
        animationTimingFunction={animationTimingFunction}
      >
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} height={fatArmHeight} top={fatArmTop} left={fatArmLeft} />
          <ExpandableArmsRecursive {...props} currentRowNumber={currentRowNumber + 1} />
        </SkeletonArm>
      </ArmContainer>
    </>
  );
};
const ExpandableArms: FC<ExpandableArmsProps> = (props: ExpandableArmsProps) => {
  const { armLength, armFatness, foldInExtent, foldOutExtent, animationDuration, animationTimingFunction } = props;
  const armTopOffset = armLength / 4;
  const armBoxLeftOffset = (depth: number) => armLength * depth * 0.5 - armTopOffset;

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
      >
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} top={armLength / 2} height={armLength} left={0} />

          <ExpandableArmsRecursive {...props} currentRowNumber={2} leftSide={true}/>
        </SkeletonArm>
      </ArmContainer>
      <ArmContainer
        armLength={armLength}
        top={0}
        left={0}
        duration={animationDuration}
        animation={rotateAnticlockwise}
        animationTimingFunction={animationTimingFunction}
      >
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} top={armLength / 2} height={armLength} left={0} />

          <ExpandableArmsRecursive {...props} currentRowNumber={2} leftSide={false}/>
        </SkeletonArm>
      </ArmContainer>
    </>
  );
};

export default ExpandableArms;
