import { FC, useEffect, useState } from "react";
import MenuTriple from "./MenuTriple";
import CurtainFade from "./CurtainFade";
import { useLocation } from "react-router";

interface FrameworksPageProps {}

const FrameworksPage: FC<FrameworksPageProps> = () => {
  return (
    <CurtainFade >
      <>
        <MenuTriple  />
        I've been a Flutter developer since early 2020. From humble beginnings I've come to 
        Having worked extensively on numerous Flutter projects, I have deep theoretical and practical knowledge of the dart language and the flutter framework, including state management approaches, architecture and UI.
        <img src="./react-logo.png" alt="React.js logo" />
        As a React enthusiast, I’ve watched React and its supporting libraries grow, and my knowledge is deep and broad. Through my own projects I’ve developed an array of both trusted and unusual solutions to logic and layout challenges of any project.
      </>
    </CurtainFade>
  );
};

export default FrameworksPage;
