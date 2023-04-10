import styled from "styled-components";

interface TitleContainerProps {
  deviceType: Device
}

const TitleContainer = styled.div<TitleContainerProps>`
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 46px;
      background-color: #898989;
      border-radius: 4px;
      display: flex;
      color: #FFF500;
      font-size: ${props => props.deviceType === "laptop" ?  "30px" : "15px"};
    `
 
export default TitleContainer;