import { FC, useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";

interface CurtainFadeOnScrollProps {
  children: JSX.Element;
}

const CurtainFadeOnScroll: FC<CurtainFadeOnScrollProps> = ({ children }) => {
  const { screenHeight } = useMediaQuery();
  const [scrollOpacity, setScrollOpacity] = useState<number>();

  const fadeOnScroll = () => {
    const scrollTopOffset = window.pageYOffset;
    const scrollPercent = screenHeight / (scrollTopOffset + 20) * 0.1;
    setScrollOpacity(scrollPercent);
  };

  useEffect(() => window.addEventListener("scroll", fadeOnScroll));

  return <div style={{opacity: scrollOpacity}}>{children}</div>;
};

export default CurtainFadeOnScroll;
