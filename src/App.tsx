import React from "react";
import ExpandableArms from "./ExpandableArms";

function App() {
  return (
    <div style={{position:"absolute", top: 300, left: 500}}>
      <ExpandableArms
        armLength={150}
        armFatness={15}
        animationDuration={5}
        animationTimingFunction={"linear"}
        foldInExtent={95}
        foldOutExtent={135}
        totalNumberRows={4}
      />
    </div>
  );
}

export default App;
