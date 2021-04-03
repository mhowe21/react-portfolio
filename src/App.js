import React, { useState } from "react";
import Headers from "./components/Navbar";
import Homepage from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Work":
        return <Work />;
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
