import React, { useEffect, useState } from "react";

export default function header(props) {
  const tabs = ["Home", "About", "Work", "Contact"];

  return (
    <>
      <nav className="navebar">
        <div className="portfolio-name">Mason's Portfolio</div>
        <div className="navbar-links">
          <ul className="nav nav-tabs">
            {tabs.map((tab) => (
              <li className="nav-item" key={tab}>
                <a
                  href={"#" + tab.toLowerCase()}
                  onClick={() => props.handlePageChange(tab)}
                  className={
                    props.currentPage === tab ? "nav-link active" : "nav-link"
                  }
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
