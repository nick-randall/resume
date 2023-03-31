import styled from "styled-components";

interface BottomPlatformProps {
  // deviceType: Device
}

const BottomPlatform = styled.div<BottomPlatformProps>`
      width: 100%;
      height: 80px;
      background-color: #898989;
      border-radius: 4px;
      position: absolute;
    `
 
export default BottomPlatform;