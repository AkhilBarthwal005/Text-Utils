// import Greet from './Components/GreetUsingFunction' // this is using export default
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import {greetByarrowFunction} from './Components/GreetUsingFunction'; // this using nameExport.
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#11103c";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div className="App">
      {/* here title abouTest is props passed to Navbar function  */}
      {/* <Navbar title="Instagram" aboutText="About me" />*/}
      <Navbar title="Text Utility" mode={mode} toggleTheme={toggleMode} />
      {/* we are passing function as prop to the navbar to use toggle */}
      <TextForm heading="Enter Text for anaylizing" mode={mode} />
      {/* <About /> */}
    </div>
  );
}

export default App;
