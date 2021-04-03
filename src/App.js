import React, { useState } from "react";
import Headers from "./components/Navbar";
import Heroimage from "./components/Heroimage";

function App() {
  return (
    <>
      <nav>
        <Headers />
      </nav>
      <div>
        <Heroimage />
      </div>
    </>
  );
}

export default App;
