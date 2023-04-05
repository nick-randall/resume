import { FC } from "react";
import PageTitle from "../PageTitle";
import "./../css/global.css";
import EndSpacer from "../EndSpacer";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => {
  return (
    <div id="projects">
      
      <PageTitle title="projects" />
      <div className="flex-column align-center center-text">
      <EndSpacer />

        <a href="https://play.google.com/store/apps/details?id=de.gastivo.orderapp">
          <img src="https://play-lh.googleusercontent.com/4TPw9sX_0JjYSj8CpDj3-wmgrFjTjre4HZqtExjbj1xEynj8efs00JaM52pryJmkaQ=w240-h480" alt="Gastivo App Logo" style={{height: 65}}/>
          <h2>gastivo: restaurant order app</h2>
        </a>
        <a href="https://play.google.com/store/apps/details?id=app.nullify.mobile.app&gl=US&pli=1">
          <img src="https://play-lh.googleusercontent.com/GdlpV6h-_EIV1h3WrSaLZxsbuMggJDjz_yQDeZSHFlSa2kcgEDE_TI2A7ysmUOIyJw=w240-h480" alt="Psi App Logo" style={{height: 65}}/>
          <h2>nullify: co2 reduction app</h2>
        </a>
        <a href="https://play.google.com/store/apps/details?id=au.com.cocreations.psiappX">
          <img src="./psi_logo.png" alt="Psi App Logo" style={{ height: 65 }} />
          <h2>psi: test of telepathic abilities app</h2>
        </a>
        <a href="https://statuesque-bonbon-5babdd.netlify.app">
          <img src="./wilde_party_logo.svg" alt=" Wilde Party Logo" />
          <h2>wilde party: browser card game (personal project)</h2>
        </a>
      </div>
      <EndSpacer />
    </div>
  );
};

export default ProjectsPage;
