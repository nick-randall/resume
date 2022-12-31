import { FC } from "react";
import styled from "styled-components";

interface HamburgerProps {}

const Bar = styled.div`
  width: 60px;
  height: 4px;
  background-color: #fff500;
  z-index: 2;
`;

const Hamburger: FC<HamburgerProps> = () => {
  return (
    <div style={{position:"relative", display: "flex", flexDirection: "column", gap: 7}} >
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
};

export default Hamburger;
