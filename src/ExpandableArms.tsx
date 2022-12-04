import { FC } from "react";
import styled, { keyframes, Keyframes } from "styled-components";

interface ExpandableArmsProps {
  armLength: number;
  armFatness: number;
  foldInExtent: number;
  foldOutExtent: number;
  animationDuration: number;
  animationTimingFunction: string;
}

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
  left: ${props => props.left}px;
  animation: ${props => props.animation} ${props => props.duration}s  ${props => props.animationTimingFunction};
  position: absolute;
`;
// const ArmContainer = styled.div<{armLength: number, row: number, animation: Keyframes, duration: number}>`
// width: ${props => props.armLength}px;
// height: ${props => props.armLength}px;
// top: ${props => props.row >= 2 ? 225 : 75 }px;
// left: ${props => props.row >= 1 ? 75 : 0}px;
// ${props => props.row === 0 ? "top: 0px;" : ""};
// ${props => props.animation} duration linear;
// position: absolute;

const SkeletonArm = styled.div<{ armLength: number }>`
  position: absolute;
  left: ${props => props.armLength / 2}px;
  width: 0px;
  height: ${props => props.armLength}px;
  margin-top: 50%;
`;

const FatArm = styled.div<{ armLength: number; armFatness: number; row: number }>`
  position: absolute;
  width: ${props => props.armFatness}px;
  height: calc(${props => (props.row === 0 ? props.armLength : props.armLength * 2)}px + 2%);
  margin-top: 50%;
  background-color: red;
  transform: translateY(calc(-50%)) translateX(-50%);
  border-radius: 1ch;
  top: ${props => (props.row === 0 ? props.armLength / 2 : props.armLength)}px;
  left: ${props => (props.row >= 2 ? props.armLength : 0)};
`;
const isEven = (index: number) => index % 2 == 0;
const calculateRow = (index: number) => (isEven(index) ? index / 2 : (index - 1) / 2);

const ExpandableArms: FC<ExpandableArmsProps> = ({
  armLength,
  armFatness,
  foldInExtent,
  foldOutExtent,
  animationDuration,
  animationTimingFunction,
}) => {
  const armTopOffset = armLength / 4;
  // const armBoxTopOffset = armLength / 4;
  // const hingeLeftOffset = armLength / 4;
  const armBoxLeftOffset = (depth: number) => armLength * depth * 0.5 - armTopOffset;
  console.log();

  const armHeight = armLength;
  const armContainerHeight = armLength / 2;

  const armLeftOffset = 10;

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

  return (
    <ArmContainer
      armLength={armLength}
      top={0}
      left={0}
      duration={animationDuration}
      animation={rotateClockwise}
      animationTimingFunction={animationTimingFunction}
    >
      <SkeletonArm armLength={armLength}>
        <FatArm armFatness={armFatness} armLength={armLength} row={0} />
      </SkeletonArm>
    </ArmContainer>
  );
};

export default ExpandableArms;
