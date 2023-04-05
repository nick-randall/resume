import { FC } from "react";
import PageTitle from "../PageTitle";
import "./../css/global.css";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => {
  return (
    <div className="page">
      <PageTitle title="projects" />
      <div className="flex-column align-center center-text">
        <img src="./psi_logo.svg" alt="Psi App Logo" />
        <h2>test of telepathic abilities app</h2>
        <img src="./wilde_party_logo.svg" alt=" Wilde Party Logo" />
        <h2>browser card game</h2>
      </div>
    </div>
  );
};

export default ProjectsPage;
