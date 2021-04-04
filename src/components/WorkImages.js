import React from "react";
import PortfolioIMG from "../assets/Images/ProjectImages/PortfolioGenerator.png";
import WhatToWatchIMG from "../assets/Images/ProjectImages/WhatToWatch.png";

export default function WorkImages() {
  return (
    <div>
      <div>
        <h2>Portfolio Generator</h2>
        <a href="https://blooming-peak-48470.herokuapp.com/" target="_blank">
          <img src={PortfolioIMG} className="work-IMG" />
        </a>
      </div>
      <div>
        <h2>What To Watch</h2>
        <a href="https://kolbylaw.github.io/What-to-Watch/" target="_blank">
          <img src={WhatToWatchIMG} className="work-IMG" />
        </a>
      </div>
    </div>
  );
}
