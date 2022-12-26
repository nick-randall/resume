import React, { useEffect, useRef, useState } from "react";
import ExpandableArms from "./ExpandableArms";
import "./global.css";

function App() {
  const [platformTop, setPlatformTop] = useState(0);
  const interval = useRef<NodeJS.Timer>();

  const followTopOfArms = () => {
    const box = ref.current?.getBoundingClientRect();
    if (box) setPlatformTop(box.top);
  };
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!interval.current)
      interval.current = setInterval(() => {
        followTopOfArms();
      }, 1);
  }, []);
  return (
    <>
      <div style={{ position: "absolute", bottom: 0, left: 300 }}>
        <ExpandableArms
          ref={ref}
          armLength={60}
          armFatness={7}
          animationDuration={5}
          animationTimingFunction="ease" //"cubic-bezier(0.1, 1.6, 0.4, 0.8)"
          foldInExtent={95}
          foldOutExtent={135}
          totalNumberRows={5}
          setMovePlatform={() => {
            clearInterval(interval.current);
          }}
        />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 737 }}>
        <ExpandableArms
          armLength={60}
          armFatness={7}
          animationDuration={5}
          animationTimingFunction="ease"//"cubic-bezier(0.1, 1.6, 0.4, 0.8)"
          foldInExtent={95}
          foldOutExtent={135}
          totalNumberRows={5}
        />
      </div>
      <div
        style={{
          left: 200,
          width: 627,
          height: 137,
          backgroundColor: "#898989",
          borderRadius: 4,
          position: "absolute",
          top: platformTop,
          transform: "translateY(-98%)",
        }}
      />
    </>
  );
}

export default App;
