import { FC } from "react";
import PageTitle from "../PageTitle";

interface ConnectPageProps {}

const ConnectPage: FC<ConnectPageProps> = () => {
  return (
    <div className="page" id="connect">
      <PageTitle title="connect" />
    </div>
  );
};

export default ConnectPage;
