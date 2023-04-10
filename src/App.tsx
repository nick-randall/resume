import { FC, useState } from "react";
import HomePage from "./pages/HomePage";
import MenuOverlay, { MenuOverlayProps } from "./MenuOverlay";
import useMediaQuery from "./useMediaQuery";
import FrameworksPage from "./pages/FrameworksPage";
import ProjectsPage from "./pages/ProjectsPage";
import ConnectPage from "./pages/ConnectPage";
import MockLayoutProvider from "./AnimationValuesProvider";

interface AppProps {}

const App: FC<AppProps> = () => {
  const [menuProps, setMenuProps] = useState<MenuOverlayProps>({ width: 0, dy: 0, hidden: true });
  const { deviceType } = useMediaQuery();
  // useEffect(()=> {
  //   window.scrollTo(0,40)
  // },[])

  return (
    <MockLayoutProvider>
    <>
      <div style={{ display: "grid", gridTemplateColumns: deviceType === "phone" ? "1fr 6fr 1fr" : "1fr 3fr 1fr" }}>
        <div />
        <div style={{ height: "100%", position: "relative", width: "100%", display: "flex", flexDirection: "column" }}>
          <HomePage setMenuProps={setMenuProps} menuOverlayProps={menuProps} />
          <MenuOverlay {...menuProps} />
        </div>
        <div />
        <div />
        <FrameworksPage />
        <div />
        <div />
        <ProjectsPage />
        <div />
        <div />
        <ConnectPage />
        <div />
      </div>
    </>
    </MockLayoutProvider>
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

/**<Route path="/" element={<HomePage setMenuProps={setMenuProps} menuOverlayProps={menuProps} key={document.location.href} />} />;
<Route path="/connect" element={ />} />;
<Route path="/frameworks" element={<FrameworksPage key={document.location.href} />} />;
<Route path="/projects" element={<FrameworksPage />} key={document.location.href} />;*/
