import React, { useState } from "react";
import Headers from "./components/Navbar";
import Heroimage from "./components/Heroimage";
import Homepage from "./components/Home";
import About from "./components/About";

function App() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return "About";
      case "Work":
        return "work";
      case "Contact":
        return "Contact";
      case "Home":
        return <Homepage />;
    }
  };
  return (
    <>
      <nav>
        <Headers
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        <div>{renderPage()}</div>
      </nav>
    </>
  );
}

export default App;
