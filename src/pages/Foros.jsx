import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ForumContainer from "../components/ForumContainer.jsx";

const Foro = () => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <ForumContainer />
      </div>
      <Footer />
    </div>
  )
}

export default Foro
