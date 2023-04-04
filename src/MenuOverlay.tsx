import { FC, useCallback, useEffect, useRef, useState } from "react";
import useMediaQuery from "./useMediaQuery";
import MenuRow from "./MenuRow";

export interface MenuOverlayProps {
  dx: number;
  dy: number;
  hidden: boolean;
}

const MenuOverlay: FC<MenuOverlayProps> = ({ dx, dy, hidden }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const setToSticky = useCallback(() => {
    if (headerRef.current) {
      const stickyPoint = headerRef.current.offsetTop - 20;
      if (window.pageYOffset > stickyPoint) {
        setSticky(true);
      }
      // else {
      //   setSticky(false);
      // }
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", setToSticky);
  });
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div style={{ position: sticky ? "fixed" : "absolute", top: sticky ? 20 : dy, backgroundColor: "green", width: "100%" }} ref={headerRef}>
        <MenuRow hidden={hidden} />
      </div>
    </div>
  );
};

export default MenuOverlay;
