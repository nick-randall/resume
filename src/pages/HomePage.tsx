import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import BottomPlatform from "../BottomPlatform";
import "./../css/global.css";
import "./../css/text.css";
import "./../css/menu.css";
import Lift from "../Lift";
import { LiftedContainer } from "../LiftedContainer";
import TopPlatform from "../TopPlatform";
import useMediaQuery from "../useMediaQuery";
import MenuTriple from "../MenuTriple";
import CurtainFade from "../CurtainFade";
import { MenuOverlayProps } from "../MenuOverlay";
import MenuRow from "../MenuRow";
import CurtainFadeOnScroll from "../CurtainFadeOnScroll";

interface HomePageProps {
  setMenuProps: Dispatch<SetStateAction<MenuOverlayProps>>;
  menuOverlayProps: MenuOverlayProps;
}
const HomePage: FC<HomePageProps> = ({ setMenuProps, menuOverlayProps }) => {
  const { deviceType, screenHeight } = useMediaQuery();
  const [platformTop, setPlatformTop] = useState(0);
  const [numLiftRows, setNumLiftRows] = useState(0);
  const followTopOfArmsCheckInterval = useRef<NodeJS.Timer>();
  const topOfArmsRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const followTopOfArms = useCallback(() => {
    const box = topOfArmsRef.current?.getBoundingClientRect();
    if (box) {
      setPlatformTop(box.top + window.scrollY);
    }
    const menuBox = menuRef.current?.getBoundingClientRect();
    if (menuBox) {
      setMenuProps(prev => ({ ...prev, dy: menuBox.top }));
    }
  }, [setMenuProps]);
  const handleScroll = useCallback(() => {
    setMenuProps(prevProps => {
      if (!prevProps.hidden) return prevProps;

      const box = menuRef.current?.getBoundingClientRect();
      if (box) {
        console.log(`boxtop: ${box.top}, boxleft: ${box.left}`);
        return { width: box.width, dy: box.top, hidden: false };
      }
      return prevProps;
    });
  }, [setMenuProps]);

  useEffect(() => {
    if (!followTopOfArmsCheckInterval.current)
      followTopOfArmsCheckInterval.current = setInterval(() => {
        followTopOfArms();
      }, 2);
    window.addEventListener("resize", followTopOfArms);
    window.addEventListener("scroll", handleScroll);
  }, [followTopOfArms, handleScroll]);

  useEffect(() => {
    setNumLiftRows(Math.floor(screenHeight / 170));
  }, [screenHeight]);

  const handleAnimationEnd = () => {
    clearInterval(followTopOfArmsCheckInterval.current);
  };

  return (
    <CurtainFade>
      <CurtainFadeOnScroll>
        <div className="page">
          <BottomPlatform className="bottom-align">
            <Lift armFatness={7} armLength={60} totalNumberRows={numLiftRows} ref={topOfArmsRef} handleAnimationEnd={handleAnimationEnd} />
            <BottomPlatform
              className="flex-column justify-center align-center"
              style={deviceType === "laptop" ? { width: "200%", left: "-50%" } : {}}
            >
              {deviceType === "phone" && <MenuTriple />}
            </BottomPlatform>
          </BottomPlatform>

          <LiftedContainer top={platformTop}>
            <div style={{ marginBottom: 8 }}>{menuOverlayProps.hidden && <MenuRow ref={menuRef} />}</div>
            <TopPlatform>
              <div className="text-title">
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
      </CurtainFadeOnScroll>
    </CurtainFade>
  );
};

export default HomePage;