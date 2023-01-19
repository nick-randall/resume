import React, { FC } from "react";

interface SpaceBetweenProps {}

const SpaceBetween: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>{children}</div>;
};

export default SpaceBetween;
