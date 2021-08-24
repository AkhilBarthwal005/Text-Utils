// import Greet from './Components/GreetUsingFunction' // this is using export default
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import {greetByarrowFunction} from './Components/GreetUsingFunction'; // this using nameExport.
import React, { useState } from "react";
import Alert from "./Components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#11103c";
      document.body.style.color = "white";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className="App">
      {/* here title abouTest is props passed to Navbar function  */}
      {/* <Navbar title="Instagram" aboutText="About me" />*/}
      <Navbar title="Text Utility" mode={mode} toggleTheme={toggleMode} />
      {/* we are passing function as prop to the navbar to use toggle */}
      <Alert alert={alert} />
      <TextForm
        heading="Enter Text for anaylizing"
        mode={mode}
        showAlert={showAlert}
      />
      {/* <About /> */}
    </div>
  );
}

export default App;
