import "./App.css";
// import About from "./components/About";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const dynamicTitle = "TextUtils";
  const dynamicAbout = "";

  // show Alert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // flashing title
  setInterval(() => {
    document.title = "TextUtils is Amazing";
  }, 2000);

  setInterval(() => {
    document.title = "Manipulate Text";
  }, 1500);

  // change theme
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title={dynamicTitle || "Your Title Here"}
        about={dynamicAbout || "Your About Here"}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Add Text to Analyze Below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
