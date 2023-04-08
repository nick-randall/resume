import { createContext, useState } from "react";
import bellowsAnimationValues from "./generateBounceAnimationValues";

export type AnimationProviderProps = {
  mockAnimationValues: MockAnimationValues[];
  liftAnimationValues: LiftAnimationProps[];
  updateMockAnimationValue: (value: MockAnimationValues) => void;
  handleIterationEnd: () => void;
  allValuesReady: () => boolean;
};

const createMockAnimationValues = (liftAnimationValues: LiftAnimationProps[]): MockAnimationValues[] =>
  liftAnimationValues.map(value => ({ id: value.id, animationDuration: value.animationDuration, dy: 0, status: "notReady" }));

export const MockLayoutContext = createContext<AnimationProviderProps>({
  mockAnimationValues: createMockAnimationValues(bellowsAnimationValues),
  liftAnimationValues: bellowsAnimationValues,
  updateMockAnimationValue: (v: MockAnimationValues) => {
    console.log("not initialized yet");
  },
  handleIterationEnd: () => {},
  allValuesReady: () => false,
});

const MockLayoutProvider = ({ children }: { children: JSX.Element }) => {
  const [mockAnimationValues, setMockAnimationValues] = useState(createMockAnimationValues(bellowsAnimationValues));

  const updateMockAnimationValue = (newValue: MockAnimationValues) =>
    setMockAnimationValues(mockAnimationValues.map(value => (newValue.id === value.id ? { ...newValue, status: "ready" } : value)));

  const allValuesReady = () => mockAnimationValues.every(value => value.status === "ready")

  const handleIterationEnd = () => {
    if (mockAnimationValues.length === 1) {
      // handleAnimationEnd();
    } else {
      setMockAnimationValues(mockAnimationValues.slice(1));
    }
  };

  const providerValues = {
    liftAnimationValues: bellowsAnimationValues,
    mockAnimationValues: mockAnimationValues,
    updateMockAnimationValue: updateMockAnimationValue,
    handleIterationEnd: handleIterationEnd,
    allValuesReady: allValuesReady,
  };
  return <MockLayoutContext.Provider value={providerValues}>{children} </MockLayoutContext.Provider>;
};

export default MockLayoutProvider;
