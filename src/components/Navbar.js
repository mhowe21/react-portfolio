import React, { useState } from "react";

export default function header() {
  return (
    <>
      <nav className="navebar">
        <div className="portfolio-name">Mason's Portfolio</div>
        <div className="navbar-links">
          <ul>
            <li>About Me</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
