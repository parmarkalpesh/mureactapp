import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Gallary from "./Gallary";
import Counter from "./Counter";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HookDemo from "./HookDemo";
import SumHooks from "./SumHooks";
import Todo from "./Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
