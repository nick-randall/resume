import React from "react";
import ExpandableArms from "./ExpandableArms";

function App() {
  return (
    <div className="App">
      <ExpandableArms
        armLength={150}
        armFatness={15}
        animationDuration={5}
        animationTimingFunction={"linear"}
        foldInExtent={95}
        foldOutExtent={135}
      />
    </div>
  );
}

export default App;
