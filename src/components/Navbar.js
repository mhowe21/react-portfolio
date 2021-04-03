import React, { useEffect } from "react";

export default function header(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
  } = props;

  return (
    <>
      <nav className="navebar">
        <div className="portfolio-name">Mason's Portfolio</div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">Work example</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
