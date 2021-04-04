import React from "react";
import AboutMe from "../assets/Images/AboutImages/0.jpg";

export default function About() {
  return (
    <div>
      <div className="about-me-header" id="about-me">
        <div className="about-me-flex">
          <h1>About Me!</h1>
          <img src={AboutMe} className="about-me-img"></img>
        </div>
      </div>
      <div className="about-me-text">
        <p>
          My Name is Mason Howe I was born on Salt Lake City Utah.<br></br> I
          currently live in West Valley City Utah. I graduated From Salt Lake
          Community College in 2015 I am currently a student at the University
          of Utah.
        </p>
      </div>
    </div>
  );
}
