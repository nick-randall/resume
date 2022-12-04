import React from "react";
import ExpandableArms from "./ExpandableArms";
import  './global.css';


function App() {
  return (
    <>
    <div style={{position:"absolute", top: 300, left: 500}}>
      <ExpandableArms
        armLength={30}
        armFatness={5}
        animationDuration={5}
        animationTimingFunction={"cubic-bezier( 0.23, 0.36, 0.15, 1 )"}
        foldInExtent={95}
        foldOutExtent={135}
        totalNumberRows={5}
      />
    </div>
    <div style={{position:"absolute", top: 300, left: 600}}>
      <ExpandableArms
        armLength={30}
        armFatness={5}
        animationDuration={5}
        animationTimingFunction={"cubic-bezier( 0.23, 0.36, 0.15, 1 )"}
        foldInExtent={95}
        foldOutExtent={135}
        totalNumberRows={5}
      />
    </div>
    </>
  );
}

export default App;
