

type LiftAnimationProps = {
  id: string;
  foldInExtent: number;
  foldOutExtent: number;
  animationTimingFunction: string;
  animationDuration: number;
}

type MockAnimationValues = {
  id: string;
  status: "ready" | "notReady";
  dy: number;
  animationDuration: number;
}

type Device = "phone" | "laptop";


type TopContainerProps = {
  top: number,
  transitionDuration: number;
}
