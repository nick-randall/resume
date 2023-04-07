import { FC } from "react";

interface NewLiftedContainerProps {
  children: JSX.Element;
  topContainerProps?: TopContainerProps
}

const NewLiftedContainer: FC<NewLiftedContainerProps> = ({ children, topContainerProps }) => {
  
  return (

    <div
      className="top-container"
      style={{
        transition: `${topContainerProps?.transitionDuration}s`,
        transform: `translateY(calc(-98% + ${topContainerProps?.top}px))`,
        position: "relative"
      }}
    >
      {children}
    </div>
   
  );
};

export default NewLiftedContainer;
