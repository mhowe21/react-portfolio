import React, { useState } from "react";
import Hero from "../assets/Images/utahArch.jpg";

export default function Heroimage() {
  return (
    <img
      src={Hero}
      className="hero"
      style={{ width: "100%", height: "500px" }}
      alt="hero"
    ></img>
  );
}
