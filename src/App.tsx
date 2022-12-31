import React, { useEffect, useRef, useState } from "react";
import BottomPlatform from "./BottomPlatform";
import "./global.css";
import Hamburger from "./Hamburger";
import Lift from "./Lift";
import { LiftedContainer } from "./LiftedContainer";
import TopPlatform from "./TopPlatform";
import useMediaQuery from "./useMediaQuery";

function App() {
  const { deviceType } = useMediaQuery();
  const [platformTop, setPlatformTop] = useState(0);
  const interval = useRef<NodeJS.Timer>();
  const ref = useRef<HTMLDivElement>(null);

  const followTopOfArms = () => {
    const box = ref.current?.getBoundingClientRect();
    if (box) setPlatformTop(box.top + window.scrollY);
  };
  useEffect(() => {
    if (!interval.current)
      interval.current = setInterval(() => {
        followTopOfArms();
      }, 1);
    window.addEventListener("resize", followTopOfArms);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr", height: "100vh" }}>
      <div />
      <div style={{ height: "100vh", position: "relative" }}>
        <BottomPlatform>
          <Lift
            armFatness={7}
            armLength={60}
            foldInExtent={95}
            foldOutExtent={135}
            totalNumberRows={5}
            animationDuration={2}
            animationTimingFunction={"linear"}
            ref={ref}
            handleAnimationEnd={() => clearInterval(interval.current)}
          />
          <BottomPlatform />
        </BottomPlatform>
        <LiftedContainer top={platformTop}>
          <Hamburger />

          <TopPlatform />
        </LiftedContainer>
      </div>
      <div />
    </div>
  );
}

export default App;
