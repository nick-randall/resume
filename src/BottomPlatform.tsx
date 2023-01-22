import styled from "styled-components";

interface BottomPlatformProps {
  deviceType: Device
}

const BottomPlatform = styled.div<BottomPlatformProps>`
      width: 100%;
      height: 67px;
      background-color: #898989;
      border-radius: 4px;
      position: absolute;
      bottom: 16.666666%;
    `
 
export default BottomPlatform;