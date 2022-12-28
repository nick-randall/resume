import React, { useEffect, useRef, useState } from "react";
import BottomPlatform from "./BottomPlatform";
import "./global.css";
import Lift from "./Lift";
import TopPlatform from "./TopPlatform";

function App() {
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
    <div style={{ display: "grid", gridTemplateColumns: "12fr 74fr 12fr", height: "100vh" }}>
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
            setMovePlatform={() => clearInterval(interval.current)}
          />
          <BottomPlatform />
        </BottomPlatform>
        <div style={{ position: "relative", top: platformTop }}>
          <TopPlatform />
        </div>
      </div>
      <div />
    </div>
  );
}

export default App;
