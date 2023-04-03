import { FC, useState } from "react";
import HomePage from "./HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FrameworksPage from "./FrameworksPage";
import MenuOverlay, { MenuOverlayProps } from "./MenuOverlay";
import MenuTriple from "./MenuTriple";

interface AppProps {}

interface Offset {
  dx: number,
  dy: number
}

const App: FC<AppProps> = () => {
  const [menuProps, setMenuProps] = useState<MenuOverlayProps>({dx: 0, dy: 0, visible: false});
  return (
    <>
      <Router>
        <MenuOverlay {...menuProps} />
        <Routes>
          <Route path="/" element={<HomePage setMenuProps={setMenuProps} key={document.location.href} />} />;
          <Route path="/connect" element={<FrameworksPage key={document.location.href} />} />;
          <Route path="/frameworks" element={<FrameworksPage key={document.location.href} />} />;
          <Route path="/projects" element={<FrameworksPage />} key={document.location.href} />;
        </Routes>
      </Router>
    </>
  );
};

export default App;

/*
    <Routes>
  <div style={{height: "200vh", display: "flex", flexDirection: "column"}}>
  <HomePage /> 
  <div style={{backgroundColor: "black", height: "100vh"}}></div>
  </div>
  </Routes>
*/
