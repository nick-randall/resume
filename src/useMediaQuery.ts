import { useCallback, useEffect, useState } from "react";

type Device = "phone" | "laptop";

const useMediaQuery = () => {
  const [deviceType, setDeviceType] = useState<Device>("phone");

  const detectDeviceType = useCallback(() => {
    const screenWidth = window.outerWidth;
    if (screenWidth > 480) {
      setDeviceType("laptop");
    } else setDeviceType("phone");
  }, []);

  useEffect(() => {
    detectDeviceType();
    window.addEventListener("resize", detectDeviceType);
  });
  return { deviceType };
};

export default useMediaQuery;
