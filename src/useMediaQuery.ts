import { useCallback, useEffect, useState } from "react";


const useMediaQuery = () => {
  const [deviceType, setDeviceType] = useState<Device>("phone");
  const [screenHeight, setScreenHeight] = useState(0);

  const detectDeviceType = useCallback(() => {
    const screenWidth = window.outerWidth;
    setScreenHeight(window.outerHeight);
    if (screenWidth > 480) {
      setDeviceType("laptop");
    } else setDeviceType("phone");
  }, []);

  useEffect(() => {
    detectDeviceType();
    window.addEventListener("resize", detectDeviceType);
  });
  return { deviceType, screenHeight };
};

export default useMediaQuery;
