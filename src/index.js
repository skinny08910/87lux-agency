import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import HomePage from "./App.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
