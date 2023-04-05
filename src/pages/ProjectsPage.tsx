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
        <img src="./psi_logo.svg" alt="Psi App Logo" />
        <h2>test of telepathic abilities app</h2>
        <img src="./wilde_party_logo.svg" alt=" Wilde Party Logo" />
        <h2>browser card game</h2>
      </div>
      <EndSpacer/>
    </div>
  );
};

export default ProjectsPage;
