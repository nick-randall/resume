import { FC, forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { MockLayoutContext } from "./AnimationValuesProvider";

type MockExpandableArmsProps = {
  armLength: number;
  armFatness: number;
  totalNumberRows: number;
  currentRowNumber?: number;
  handleAnimationEnd?: () => void;
};

type MockExpandableArmsRecursiveProps = MockExpandableArmsProps & {
  foldAngle: number;
  isLeftArm: boolean;
};

const ArmContainer = styled.div<{
  armLength: number;
  top: number;
  left: number;
  rotate: number;
}>`
  width: ${props => props.armLength}px;
  height: ${props => props.armLength}px;
  top: ${props => props.top}px;
  left: -${props => props.armLength / 2}px;
  rotate: ${props => props.rotate}deg;
  position: absolute;
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
  transform: translateY(calc(-50%)) translateX(-50%);
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`;

const MockExpandableArmsRecursive = forwardRef<HTMLDivElement, MockExpandableArmsRecursiveProps>(
  (props: MockExpandableArmsRecursiveProps, forwardedRef) => {
    const { armLength, armFatness, currentRowNumber = 1, totalNumberRows, isLeftArm, foldAngle, handleAnimationEnd } = props;
    const { nextLiftValue, updateMockAnimationValue } = useContext(MockLayoutContext);

    const armContainerTop = currentRowNumber > 2 ? armLength * 2 - armLength * 0.5 : armLength * 0.5;
    const fatArmTop = currentRowNumber === 0 ? armLength / 2 : armLength;
    const isFinalArm = isLeftArm && currentRowNumber === totalNumberRows;

    const fatArmHeight = currentRowNumber === 0 ? armLength : armLength * 2;
    const rowNumberIsEven = currentRowNumber % 2 === 1;

    const armRef = useRef<HTMLDivElement | null>(null);

    const getNewMockAnimationData = useCallback(() => {
      const box = armRef?.current?.getBoundingClientRect();
      if (box && nextLiftValue) {
        updateMockAnimationValue({
          id: nextLiftValue.id,
          dy: box.top + window.scrollY,
          status: "ready",
          animationDuration: nextLiftValue.animationDuration,
        });
      }
    }, [nextLiftValue, updateMockAnimationValue]);

    useEffect(() => {
      setTimeout(() => {
        getNewMockAnimationData();
      }, 1);
    }, [getNewMockAnimationData, nextLiftValue]);

    let rotation = 0;
    if (isLeftArm) {
      rotation = !rowNumberIsEven ? -foldAngle * 2 : foldAngle * 2;
    } else {
      rotation = !rowNumberIsEven ? foldAngle * 2 : -foldAngle * 2;
    }
    const ref = isFinalArm ? { ref: forwardedRef } : {};
    return (
      <>
        <ArmContainer
          armLength={armLength}
          top={armContainerTop}
          left={armLength / 2}
          rotate={rotation}
          onAnimationEnd={isFinalArm && handleAnimationEnd ? () => handleAnimationEnd() : undefined}
        >
          <SkeletonArm armLength={armLength}>
            <FatArm armFatness={armFatness} armLength={armLength} height={fatArmHeight} top={fatArmTop} left={0} {...ref} />
            {currentRowNumber < totalNumberRows && (
              <MockExpandableArmsRecursive
                {...props}
                currentRowNumber={currentRowNumber + 1}
                ref={node => {
                  // https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref
                  armRef.current = node;
                  if (typeof forwardedRef === "function") {
                    forwardedRef(node);
                  } else if (forwardedRef) {
                    forwardedRef.current = node;
                  }
                }}
              />
            )}
          </SkeletonArm>
        </ArmContainer>
      </>
    );
  }
);
const MockExpandableArms: FC<MockExpandableArmsProps> = props => {
  const { armLength, armFatness } = props;
  const { bellowsAnimationValues, nextLiftValue } = useContext(MockLayoutContext);
  const topArmRef = useRef<HTMLDivElement>(null);
  // const armTopOffset = armLength / 4;
  // const armBoxLeftOffset = (depth: number) => armLength * depth * 0.5 - armTopOffset;
  const currBounceAnimationValue = bellowsAnimationValues.find(value => nextLiftValue?.id === value.id);
  const foldAngle = currBounceAnimationValue?.foldOutExtent ?? 0;

  return (
    <>
      <ArmContainer armLength={armLength} top={0} left={0} rotate={foldAngle}>
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} top={armLength / 2} height={armLength} left={0} />

          <MockExpandableArmsRecursive {...props} currentRowNumber={2} isLeftArm={true} ref={topArmRef} foldAngle={foldAngle} />
        </SkeletonArm>
      </ArmContainer>
      <ArmContainer armLength={armLength} top={0} left={0} rotate={-foldAngle}>
        <SkeletonArm armLength={armLength}>
          <FatArm armFatness={armFatness} armLength={armLength} top={armLength / 2} height={armLength} left={0} />

          <MockExpandableArmsRecursive {...props} currentRowNumber={2} isLeftArm={false} foldAngle={foldAngle} />
        </SkeletonArm>
      </ArmContainer>
    </>
  );
};

export default MockExpandableArms;
