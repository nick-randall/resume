import styled from "styled-components";

interface LiftedContainerProps {
  top: number;
}

export const LiftedContainer = styled.div.attrs<LiftedContainerProps>(props => ({
  style: { transform: `translateY(calc(-98% + ${props.top}px)` },
}))<LiftedContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  transform: translateY(-98%);
`;
