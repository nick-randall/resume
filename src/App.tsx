import React from "react";
import "./global.css";
import Lift from "./Lift";
import TopPlatform from "./TopPlatform";

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr 1fr", height: "100vh", justifyContent: "end" }}>
      <div />
      
    <div style={{height: "100vh", position: "relative"}} >
    
      <Lift
        armFatness={7}
        armLength={60}
        foldInExtent={95}
        foldOutExtent={145}
        totalNumberRows={5}
        animationDuration={2}
        animationTimingFunction={"linear"}
      
        platform={
         <TopPlatform/>
        }
      />
      </div>
      <div />
     </div>
  );
}

export default App;
