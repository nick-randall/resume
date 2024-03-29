import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import BottomPlatform from "../BottomPlatform";
import "./../css/global.css";
import "./../css/text.css";
import "./../css/menu.css";
import Lift from "../Lift";
import TopPlatform from "../TopPlatform";
import useMediaQuery from "../useMediaQuery";
import MenuTriple from "../MenuTriple";
import CurtainFade from "../CurtainFade";
import { MenuOverlayProps } from "../MenuOverlay";
import MenuRow from "../MenuRow";
import CurtainFadeOnScroll from "../CurtainFadeOnScroll";
import NewLiftedContainer from "../NewLiftedContainer";
import MockExpandableArms from "../MockExpandableArms";

interface HomePageProps {
  setMenuProps: Dispatch<SetStateAction<MenuOverlayProps>>;
  menuOverlayProps: MenuOverlayProps;
}
const HomePage: FC<HomePageProps> = ({ setMenuProps, menuOverlayProps }) => {
  const { deviceType, screenHeight } = useMediaQuery();
  const [numLiftRows, setNumLiftRows] = useState(0);
  const followTopOfArmsCheckInterval = useRef<NodeJS.Timer>();
  const topOfArmsRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const followTopOfArms = useCallback(() => {
    const menuBox = menuRef.current?.getBoundingClientRect();
    if (menuBox) {
      setMenuProps(prev => ({ ...prev, dy: menuBox.top }));
    }
  }, [setMenuProps]);
  const handleScroll = useCallback(() => {
    setMenuProps(prevProps => {
      if (!prevProps.hidden) return prevProps;
      followTopOfArms();
      const box = menuRef.current?.getBoundingClientRect();
      if (box) {
        return { width: box.width, dy: box.top, hidden: false };
      }
      return prevProps;
    });
  }, [followTopOfArms, setMenuProps]);

  useEffect(() => {
    if (!followTopOfArmsCheckInterval.current)
      followTopOfArmsCheckInterval.current = setInterval(() => {
        followTopOfArms();
      }, 200);
    followTopOfArms();
    // setTimeout(followTopOfArms, 20)
    window.addEventListener("resize", followTopOfArms);
    window.addEventListener("scroll", handleScroll);
  }, [followTopOfArms, handleScroll]);

  useEffect(() => {
    setNumLiftRows(Math.floor(screenHeight / 165));
  }, [screenHeight]);

  const handleAnimationEnd = () => {
    clearInterval(followTopOfArmsCheckInterval.current);
  };

  return (
    <CurtainFade>
      <CurtainFadeOnScroll>
        <div className="page">
          <BottomPlatform className="bottom-align">
            <Lift
              armFatness={7}
              armLength={60}
              totalNumberRows={numLiftRows}
              ref={topOfArmsRef}
              handleAnimationEnd={handleAnimationEnd}
              onIterationEnd={() => {}}
            />
            <MockExpandableArms armFatness={7} armLength={60} totalNumberRows={numLiftRows} />
            <BottomPlatform
              className="flex-column justify-center align-center"
              style={deviceType === "laptop" ? { width: "200%", left: "-50%" } : {}}
            >
              {deviceType === "phone" && <MenuTriple />}
            </BottomPlatform>
          </BottomPlatform>

          <NewLiftedContainer>
            <>
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
            </>
          </NewLiftedContainer>
        </div>
      </CurtainFadeOnScroll>
    </CurtainFade>
  );
};

export default HomePage;
