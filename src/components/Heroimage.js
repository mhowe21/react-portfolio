import React, { useState } from "react";
import Hero from "../assets/Hero/utahArch.jpg";

export default function Heroimage() {
  return (
    <img src={Hero} className="hero" style={{ width: "100%" }} alt="hero"></img>
  );
}
