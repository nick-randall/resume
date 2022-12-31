import styled from "styled-components";

interface LiftedContainerProps  {
  top: number;
}

export const LiftedContainer = styled.div<LiftedContainerProps>`
  position: relative; 
  top: ${props => props.top}px; 
  display: flex;
  flex-direction: column; 
  transform: translateY(-98%);
`;
