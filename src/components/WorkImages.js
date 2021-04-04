import React from "react";
import PortfolioIMG from "../assets/Images/ProjectImages/PortfolioGenerator.png";
import WhatToWatchIMG from "../assets/Images/ProjectImages/WhatToWatch.png";

export default function WorkImages() {
  return (
    <div>
      <img src={PortfolioIMG} className="work-IMG" />
      <img src={WhatToWatchIMG} className="work-IMG" />
    </div>
  );
}
