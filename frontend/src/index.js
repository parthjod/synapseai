import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div className="stars-container"></div>
    <App />
  </Router>
);

function createStars() {
  const starsContainer = document.querySelector(".stars-container");
  for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * -50 + "vh";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
  }
}

window.onload = createStars;
