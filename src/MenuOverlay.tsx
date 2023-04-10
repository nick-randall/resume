import { FC, useCallback, useEffect, useRef, useState } from "react";
import useMediaQuery from "./useMediaQuery";
import MenuRow from "./MenuRow";

export interface MenuOverlayProps {
  width: number;
  dy: number;
  hidden: boolean;
}

const MenuOverlay: FC<MenuOverlayProps> = ({ width, dy, hidden }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);
  const setToSticky = useCallback(() => {
    if (headerRef.current) {
      const stickyPoint = headerRef.current.offsetTop - 10;
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
      <div style={{ position: sticky ? "fixed" : "absolute", top: sticky ? 20 : dy, width: width }} ref={headerRef}>
        <MenuRow hidden={hidden} />
      </div>
  );
};

export default MenuOverlay;
