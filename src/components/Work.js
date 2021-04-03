import React from "react";

export default function Work() {
  return (
    <div>
      <h1>Example of work</h1>
      <br></br>
      <div className="What-To-Watch">
        <p>What to Watch front end</p>
        <iframe
          src="https://kolbylaw.github.io/What-to-Watch/"
          className="What-To-Watch-Iframe"
        ></iframe>
      </div>
      <div className="Portfolio-Creator">
        <iframe
          src="https://blooming-peak-48470.herokuapp.com/"
          className="Portfolio-Creator-Iframe"
        ></iframe>
      </div>
    </div>
  );
}
