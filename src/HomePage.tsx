import React, { useEffect, useRef, useState } from "react";
import BottomPlatform from "./BottomPlatform";
import "./css/global.css";
import "./css/text.css";
import "./css/menu.css";
import Hamburger from "./Hamburger";
import Lift from "./Lift";
import { LiftedContainer } from "./LiftedContainer";
import Logo from "./Logo";
import TopPlatform from "./TopPlatform";
import useMediaQuery from "./useMediaQuery";
import MenuTriple from "./MenuTriple";

function HomePage() {
  const { deviceType, screenHeight } = useMediaQuery();
  const [platformTop, setPlatformTop] = useState(0);
  const [numLiftRows, setNumLiftRows] = useState(0);
  const followTopOfArmsCheckInterval = useRef<NodeJS.Timer>();
  const topOfArmsRef = useRef<HTMLDivElement>(null);

  const followTopOfArms = () => {
    const box = topOfArmsRef.current?.getBoundingClientRect();
    if (box) setPlatformTop(box.top + window.scrollY);
  };
  useEffect(() => {
    if (!followTopOfArmsCheckInterval.current)
      followTopOfArmsCheckInterval.current = setInterval(() => {
        followTopOfArms();
      }, 2);
    window.addEventListener("resize", followTopOfArms);
  }, []);

  useEffect(() => {
    setNumLiftRows(Math.floor(screenHeight / 170));
  }, [screenHeight]);

  const handleAnimationEnd = () => {
    clearInterval(followTopOfArmsCheckInterval.current);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr", height: "100vh" }}>
      <div />
      <div style={{ height: "100vh", position: "relative" }}>
        <BottomPlatform className="bottom-align">
          <Lift armFatness={7} armLength={60} totalNumberRows={numLiftRows} ref={topOfArmsRef} handleAnimationEnd={handleAnimationEnd} />
          <BottomPlatform className="flex-column justify-center align-center" style={deviceType === "laptop" ? { width: "200%", left: "-50%" } : {}}>
            {deviceType === "phone" && <MenuTriple />}
          </BottomPlatform>
        </BottomPlatform>

        <LiftedContainer top={platformTop}>
          <div style={{ marginBottom: 8 }}>
            <div className="flex-row space-between align-end">
              <Logo />
              {deviceType === "phone" && <Hamburger onPressed={() => {}} />}
              {deviceType === "laptop" && <MenuTriple />}
            </div>
          </div>
          <TopPlatform>
            <div style={{ lineHeight: 1 }}>
              NICHOLAS
              <br />
              RANDALL
              <br />
              <div className="text-subtitle">
                SOFTWARE <br /> DEVELOPER
              </div>
            </div>
          </TopPlatform>
        </LiftedContainer>
      </div>
      <div />
    </div>
  );
}

export default HomePage;
