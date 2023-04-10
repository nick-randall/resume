import { FC } from "react";
import "./../css/global.css";
import "./../css/text.css";

import PageTitle from "../PageTitle";
import StartSpacer from "./StartSpacer";

interface FrameworksPageProps {}

const FrameworksPage: FC<FrameworksPageProps> = () => {
  return (
    <div id="frameworks" className="page">
      <PageTitle title="frameworks" />
      <div className="flex-column justify-center" style={{ height: "100%" }}>
        <div className="flex-column align-center" style={{ minHeight: "100%" }}>
                <StartSpacer />

          <img src="./flutter-logo.png" alt="" style={{ height: 60 }} />
          <h2>flutter</h2>
          <p>
            I've been developing Flutter apps since early 2020. Having worked extensively on numerous Flutter projects, I have deep theoretical and
            practical knowledge of the dart language, the flutter framework, state management approaches, architecture and layout.
          </p>
          <img src="./react_logo.svg" alt="React.js logo" style={{ height: 70 }} />
          <h2>react.js</h2>
          <p>
            As a React developer, my knowledge is deep and broad. I’ve developed an array of both trusted and unusual solutions to logic and layout
            challenges for a range of projects.
          </p>
          <div style={{ height: 20 }}></div>
          <h2>others:</h2>
          <div className="grid">
            <img src="./swift_logo.svg" alt="Swift logo" style={{ height: 60 }} />
            <img src="./spring_logo.png" alt="Spring Logo" style={{ height: 60 }} />
            <img src="./hasura_logo.svg" alt="Hasura logo" style={{ height: 60 }} />
            <h2>swift</h2>
            <h2>spring</h2>
            <h2>hasura</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameworksPage;
