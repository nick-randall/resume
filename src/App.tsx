import React, { useEffect, useRef, useState } from "react";
import BottomPlatform from "./BottomPlatform";
import "./global.css";
import Hamburger from "./Hamburger";
import Lift from "./Lift";
import { LiftedContainer } from "./LiftedContainer";
import Logo from "./Logo";
import TopPlatform from "./TopPlatform";
import useMediaQuery from "./useMediaQuery";
import RowSpaceBetween from "./RowSpaceBetween";
import MenuItem from "./MenuItem";

function App() {
  const { deviceType } = useMediaQuery();
  const [platformTop, setPlatformTop] = useState(0);
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

  const handleAnimationEnd = () => {
    clearInterval(followTopOfArmsCheckInterval.current);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr", height: "100vh" }}>
      <div />
      <div style={{ height: "100vh", position: "relative" }}>
        <BottomPlatform deviceType={deviceType}>
          <Lift armFatness={7} armLength={60} totalNumberRows={4} ref={topOfArmsRef} handleAnimationEnd={handleAnimationEnd} />

          <BottomPlatform deviceType={deviceType} style={{display: "flex", justifyContent: "center"}}>
           <> <MenuItem name="connect" /> <MenuItem name="projects" /> <MenuItem name="frameworks" /></>
               
          </BottomPlatform>
        </BottomPlatform>

        <LiftedContainer top={platformTop}>
          <div style={{ marginBottom: 8 }}>
            <RowSpaceBetween>
              <Logo />
              {deviceType === "phone" && <Hamburger onPressed={() => {}} />}
              {deviceType === "laptop" && (
                <div style={{ display: "flex" }}>
                  <MenuItem name="connect" /> <MenuItem name="projects" /> <MenuItem name="frameworks" />
                </div>
              )}
            </RowSpaceBetween>
          </div>
          <TopPlatform>
            <div style={{lineHeight:1}}>
              NICHOLAS
              <br />
              RANDALL
              <br />
              <div style={{ fontFamily: "DIN", fontSize: 15, color: "white", padding: 5 }}>
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

export default App;
