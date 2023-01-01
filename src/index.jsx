import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import Test from "./Components/Test";
import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Test />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
