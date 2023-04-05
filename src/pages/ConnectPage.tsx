import { FC } from "react";
import PageTitle from "../PageTitle";

interface ConnectPageProps {}

const ConnectPage: FC<ConnectPageProps> = () => {
  return (
    <div className="page">
      <PageTitle title="connect" />
    </div>
  );
};

export default ConnectPage;
