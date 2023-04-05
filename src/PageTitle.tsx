import { FC } from "react";
import TitleContainer from "./TitleContainer";
import "./css/global.css";

interface PageTitleProps {
  title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <TitleContainer>
      <img src={`./${title}.png`} style={{ height: 34 }} alt={title} />
      <div style={{width: 10}}/> 
      {title.toUpperCase()}
    </TitleContainer>
  );
};

export default PageTitle;
