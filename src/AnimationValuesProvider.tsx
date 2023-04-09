import { createContext, useEffect, useState } from "react";
import initialBellowsAnimationValues from "./generateBounceAnimationValues";

export type AnimationProviderProps = {
  mockAnimationValues: MockAnimationValues[];
  bellowsAnimationValues: LiftAnimationProps[];
  updateMockAnimationValue: (value: MockAnimationValues) => void;
  handleLiftIterationEnd: () => void;
  handleBellowsIterationEnd: () => void;
  allValuesReady: () => boolean;
  nextLiftValue?: MockAnimationValues;
};

const createMockAnimationValues = (bellowsAnimationValues: LiftAnimationProps[]): MockAnimationValues[] =>
  bellowsAnimationValues.map(value => ({ id: value.id, animationDuration: value.animationDuration, dy: 0, status: "notReady" }));

export const MockLayoutContext = createContext<AnimationProviderProps>({
  mockAnimationValues: createMockAnimationValues(initialBellowsAnimationValues),
  bellowsAnimationValues: initialBellowsAnimationValues,
  updateMockAnimationValue: (v: MockAnimationValues) => {
    console.log("not initialized yet");
  },
  handleLiftIterationEnd: () => {},
  handleBellowsIterationEnd: () => {},
  allValuesReady: () => false,
});

const MockLayoutProvider = ({ children }: { children: JSX.Element }) => {
  const [mockAnimationValues, setMockAnimationValues] = useState(createMockAnimationValues(initialBellowsAnimationValues));
  const [bellowsAnimationValues, setBellowsAnimationValues] = useState(initialBellowsAnimationValues);
  const [nextLiftValue, setNextLiftValue] = useState(mockAnimationValues.find(animationValue => animationValue.status === "notReady"));

  const updateMockAnimationValue = (newValue: MockAnimationValues) => {
    const updated = mockAnimationValues.map(value => (newValue.id === value.id ? newValue : value));
    setMockAnimationValues(updated);
    setNextLiftValue(mockAnimationValues.find(animationValue => animationValue.status === "notReady"));
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleBellowsIterationEnd();
  //     handleLiftIterationEnd();
  //   }, 3000);
  // });

  const allValuesReady = () => mockAnimationValues.every(value => value.status === "ready");

  const handleLiftIterationEnd = () => {
    console.log("lift iteration end " + mockAnimationValues.length)

    if (mockAnimationValues.length === 1) {
      // handleAnimationEnd();
    } else {
      setMockAnimationValues(mockAnimationValues.slice(1));
    }
  };

  const handleBellowsIterationEnd = () => {
    console.log("bellows iteration end " + bellowsAnimationValues.length);

    if (bellowsAnimationValues.length === 1) {
      // handleAnimationEnd();
    } else {
      setBellowsAnimationValues(bellowsAnimationValues.slice(1));
    }
  };

  const providerValues: AnimationProviderProps = {
    bellowsAnimationValues,
    mockAnimationValues,
    updateMockAnimationValue,
    handleBellowsIterationEnd,
    handleLiftIterationEnd,
    allValuesReady,
    nextLiftValue,
  };
  return <MockLayoutContext.Provider value={providerValues}>{children} </MockLayoutContext.Provider>;
};

export default MockLayoutProvider;
