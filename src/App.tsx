import React, { useEffect, useRef, useState } from "react";
import BottomPlatform from "./BottomPlatform";
import "./global.css";
import Hamburger from "./Hamburger";
import Lift from "./Lift";
import { LiftedContainer } from "./LiftedContainer";
import Logo from "./Logo";
import TopPlatform from "./TopPlatform";
import useMediaQuery from "./useMediaQuery";
import bounceAnimationValues from "./generateBounceAnimationValues";


function App() {
  const { deviceType } = useMediaQuery();
  const [platformTop, setPlatformTop] = useState(0);
  const followTopOfArmsCheckInterval = useRef<NodeJS.Timer>();
  const topOfArmsRef = useRef<HTMLDivElement>(null);
  const platformContainerRef = useRef<HTMLDivElement>(null);

  const [currBounceAnimationValues, setCurrBounceAnimation] = useState(bounceAnimationValues);

  const followTopOfArms = () => {
    const box = topOfArmsRef.current?.getBoundingClientRect();
    if (box) setPlatformTop(box.top + window.scrollY);
  };
  useEffect(() => {
    if (!followTopOfArmsCheckInterval.current)
      followTopOfArmsCheckInterval.current = setInterval(() => {
        followTopOfArms();
      }, 1);
    window.addEventListener("resize", followTopOfArms);
  }, []);

  const handleAnimationEnd = () => {
    clearInterval(followTopOfArmsCheckInterval.current);

  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr", height: "100vh" }}>
      <div />
      <div style={{ height: "100vh", position: "relative" }}>
        <BottomPlatform>
          <Lift
            armFatness={7}
            armLength={60}
            totalNumberRows={4}
            ref={topOfArmsRef}
            handleAnimationEnd={handleAnimationEnd}
          />
          <BottomPlatform />
        </BottomPlatform>
        <LiftedContainer top={platformTop}>
          <div ref={platformContainerRef} style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Logo />
              <Hamburger onPressed={() => {}} />
            </div>
          </div>
          <TopPlatform />
        </LiftedContainer>
      </div>
      <div />
    </div>
  );
}

export default App;
