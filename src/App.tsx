import { FC } from "react";
import HomePage from "./HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FrameworksPage from "./FrameworksPage";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage className="" key={document.location.href} />} />;
        <Route path="/connect" element={<FrameworksPage key={document.location.href} />} />;
        <Route path="/frameworks" element={<FrameworksPage key={document.location.href} />} />;
        <Route path="/projects" element={<FrameworksPage />} key={document.location.href} />;
      </Routes>
    </Router>
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
