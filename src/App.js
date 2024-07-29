import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform1 from "./components/Textform1";
// import About1 from "./components/About1.js";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,

    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showalert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        abouttext="AboutTextUtils"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
{/* 
      <Routes>
      <Route exact path="/about" element={<About1/>} />
      <Route exact path="/" element={ <div className="container my-4">
        <Textform1
          heading="Enter The Text To Analyze"
          mode={mode}
          showalert={showalert}
        />
        </div>
        } />

      </Routes> */}
      <div className="container my-4">
        <Textform1
          heading="Enter The Text To Analyze"
          mode={mode}
          showalert={showalert}
        /> 
      {/* <About1/> */}
      </div>
      {/* </BrowserRouter> */}

    </>
  );
}
export default App;
