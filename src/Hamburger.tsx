import { FC } from "react";
import styled from "styled-components";

interface HamburgerProps {
  onPressed: () => void;
}

const Bar = styled.div`
  width: 45px;
  height: 4px;
  background-color: #fff500;
`;

const Hamburger: FC<HamburgerProps> = ({ onPressed }) => {
  return (
    //TODO: change onclick to support touchscreens
    <div style={{ display: "flex", flexDirection: "column", gap: 7, position: "relative" }} onClick={onPressed}>
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
};

export default Hamburger;
