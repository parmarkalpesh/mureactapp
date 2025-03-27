import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Event from "./Event";
import Gallary from "./Gallary";
import Counter from "./Counter";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Link to="home">Home</Link> |<Link to="gallary">Gallary</Link> |<Link to="event">Event</Link> |
      <Link to="counter">Counter</Link> |<Link to="about">About</Link>
      <Routes>
        <Route element={""} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<Gallary />} path="/gallary" />
        <Route element={<Event />} path="/event" />
        <Route element={<Counter />} path="/counter" />
        <Route element={<h1>404 Page Not Found</h1>} path="*" />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
