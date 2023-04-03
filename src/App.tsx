import { FC } from "react";
import HomePage from "./HomePage";

interface AppProps {
  
}
 
const App: FC<AppProps> = () => {
  return ( 
  <div style={{height: "200vh", display: "flex", flexDirection: "column"}}>
  <HomePage /> 
  <div style={{backgroundColor: "black", height: "100vh"}}></div>
  </div>
  );
}
 
export default App;