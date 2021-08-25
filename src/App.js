import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import this below line from documention to use react-router-dom.
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <div>
      {/* <Router> */}
      {/* here title abouTest is props passed to Navbar function  */}
      {/* <Navbar title="Instagram" aboutText="About me" />*/}
      <Navbar title="Text Utility" mode={mode} toggleTheme={toggleMode} />
      {/* we are passing function as prop to the navbar to use toggle */}
      <Alert alert={alert} />

      {/* <Switch> */}
      {/* use exact path it will match only when you path is exactly matching not in the partial match */}
      {/* <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/"> */}
      <TextForm
        heading="Enter Text for anaylizing"
        mode={mode}
        showAlert={showAlert}
      />
      {/* </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
