import { FC } from "react";
import TitleContainer from "./TitleContainer";
import "./css/global.css";
import useMediaQuery from "./useMediaQuery";

interface PageTitleProps {
  title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  const {deviceType} = useMediaQuery()
  return (
    <TitleContainer deviceType={deviceType}>
      <img src={`./${title}.png`} style={{ height: deviceType === "laptop" ? 34 : 24 }} alt={title} />
      <div style={{ width: 10 }}/> 
      {title.toUpperCase()}
    </TitleContainer>
  );
};

export default PageTitle;
