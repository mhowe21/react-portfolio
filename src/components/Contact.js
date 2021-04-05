import React from "react";
import LinkedinIMG from "../assets/Images/ContactImages/linkedin.svg";
import GithubIMG from "../assets/Images/ContactImages/github.svg";
import MailIMG from "../assets/Images/ContactImages/mail.svg";

export default function Contact() {
  return (
    <div>
      <div>
        <a href="https://www.linkedin.com/in/mason-a-howe/">
          <img src={LinkedinIMG} className="contact-img"></img>
          <span>Linkedin Profile</span>
        </a>
      </div>
      <div>
        <a href="https://github.com/mhowe21">
          <img src={GithubIMG} className="contact-img"></img>
          <span>Github Page</span>
        </a>
      </div>
      <div>
        <a href="mailto:mason.a.howe@gmail.com">
          <img src={MailIMG} className="contact-img"></img>
          <span>Email: mason.a.howe@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
