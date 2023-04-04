import { FC, useState } from "react";
import HomePage from "./HomePage";
import MenuOverlay, { MenuOverlayProps } from "./MenuOverlay";
import useMediaQuery from "./useMediaQuery";

interface AppProps {}

const App: FC<AppProps> = () => {
  const [menuProps, setMenuProps] = useState<MenuOverlayProps>({ dx: 0, dy: 0, hidden: true });
  const { deviceType } = useMediaQuery();
  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr", height: "100vh" }}>
        <div />
       
        <div style={{ height: "100%", position: "relative" }}>
        <MenuOverlay {...menuProps} />
          <HomePage setMenuProps={setMenuProps} menuOverlayProps={menuProps} />
          {/* <Routes>
          <Route path="/" element={<HomePage setMenuProps={setMenuProps} menuOverlayProps={menuProps} key={document.location.href} />} />;
          <Route path="/connect" element={<FrameworksPage key={document.location.href} />} />;
          <Route path="/frameworks" element={<FrameworksPage key={document.location.href} />} />;
          <Route path="/projects" element={<FrameworksPage />} key={document.location.href} />;
        </Routes>
      </Router> */}
        </div>
        <div />
      </div>
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
