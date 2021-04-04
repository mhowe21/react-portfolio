import React from "react";
import LinkedinIMG from "../assets/Images/ContactImages/linkedin.svg";
import GithubIMG from "../assets/Images/ContactImages/github.svg";

export default function Contact() {
  return (
    <div>
      <div>
        <img src={LinkedinIMG}></img>
      </div>
      <div>
        <img src={GithubIMG}></img>
      </div>
    </div>
  );
}
