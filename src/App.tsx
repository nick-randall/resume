import React from "react";
import "./global.css";
import Lift from "./Lift";

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", height: "100vh", justifyContent: "end" }}>
      <div />
    <div style={{height: "100vh", position: "relative"}} >
      <Lift
        armFatness={7}
        armLength={60}
        foldInExtent={95}
        foldOutExtent={135}
        totalNumberRows={5}
        animationDuration={5}
        animationTimingFunction={"linear"}
        platform={
          <div
            style={{
              width: "100%",
              height: 137,
              backgroundColor: "#898989",
              borderRadius: 4,
              transform: "translateY(-98%)",
            }}
          />
        }
      />
      </div>
      <div />
     </div>
  );
}

export default App;
