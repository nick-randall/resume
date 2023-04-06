import { FC } from "react";
import PageTitle from "../PageTitle";
import "./../css/global.css";
import "./../css/text.css";


interface ConnectPageProps {}

const ConnectPage: FC<ConnectPageProps> = () => {
  return (
    <div id="connect" className="page">
      <PageTitle title="connect" />
      <div className="flex-column justify-center" style={{height: "100%", gap: 100}}>
        <div className="flex-column align-center" >

          <img src="./mail.svg" alt="email logo" className="logo" style={{ height: 65 }} />
          <h2>randall@posteo.de</h2>

          <img src="./phone.svg" alt="phone logo" className="logo" style={{ height: 95 }} />
          <h2>0493 660 180</h2>
          <img src="./house.svg" alt="house logo" className="logo" style={{ height: 85 }} />
          <h2>56 Valley Drive, Caboolture 4510</h2>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
