import { FC } from "react";
import useMediaQuery from "./useMediaQuery";
import "./css/global.css"

interface FrameworksPageProps {}

const FrameworksPage: FC<FrameworksPageProps> = () => {
  return (

    <div className="page">

      
        {/* <MenuTriple  handleMenuItemClicked={() =>{}} /><div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr" }}> */}
          <div/>
          <div>
        I've been a Flutter developer since early 2020. From humble beginnings I've come to know Flutter like the back of my hand.
        I've gotten down and dirty and implemented...
        Having worked extensively on numerous Flutter projects, I have deep theoretical and practical knowledge of the dart language and the flutter framework, including state management approaches, architecture and UI.
        <img src="./react-logo.png" alt="React.js logo" />
        As a React enthusiast, I’ve watched React and its supporting libraries grow, and my knowledge is deep and broad. Through my own projects I’ve developed an array of both trusted and unusual solutions to logic and layout challenges of any project.
        </div>
      </div>
    
  );
};

export default FrameworksPage;
