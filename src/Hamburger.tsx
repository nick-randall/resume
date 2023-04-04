import { FC } from "react";
import styled from "styled-components";

interface HamburgerProps {
  onPressed: () => void;
  hidden?: boolean;
}

const Bar = styled.div`
  width: 45px;
  height: 4px;
  background-color: #fff500;
`;

const Hamburger: FC<HamburgerProps> = ({ onPressed, hidden }) => {
  return (
    //TODO: change onclick to support touchscreens
    <div style={{ display: "flex", flexDirection: "column", gap: 7, position: "relative", opacity: hidden ? 0 : 1}} onClick={onPressed}>
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
};

export default Hamburger;
