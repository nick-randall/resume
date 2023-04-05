import { FC } from "react";
import PageTitle from "./PageTitle";

interface ProjectsPageProps {}

const ProjectsPage: FC<ProjectsPageProps> = () => {
  return (
    <div className="page">
      <PageTitle title="projects" />{" "}
    </div>
  );
};

export default ProjectsPage;
