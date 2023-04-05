import { FC } from "react";
import "./css/global.css";
import PageTitle from "./PageTitle";

interface FrameworksPageProps {}

const FrameworksPage: FC<FrameworksPageProps> = () => {
  return (
    <div className="page">
      <PageTitle title="frameworks" />

      <div className="flex-column align-center">
        <img src="./flutter-logo.png" alt="" style={{ height: 60, paddingTop: 25 }} />
        <h2>flutter</h2>
        <p>
          I've been a Flutter developer since early 2020. From humble beginnings I've come to know Flutter like the back of my hand. I've gotten down
          and dirty and implemented... Having worked extensively on numerous Flutter projects, I have deep theoretical and practical knowledge of the
          dart language and the flutter framework, including state management approaches, architecture and UI.
        </p>
        <img src="./react-logo.png" alt="React.js logo" style={{ height: 70 }} />
      <h2>react.js</h2>
        <p>
          As a React enthusiast, I’ve watched React and its supporting libraries grow, and my knowledge is deep and broad. Through my own projects
          I’ve developed an array of both trusted and unusual solutions to logic and layout challenges of any project.
        </p>
      </div>
    </div>
  );
};

export default FrameworksPage;
