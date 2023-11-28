import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import UserTemplate from "../components/UserTemplate.jsx";

const Pymes = () => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <UserTemplate />
      </div>
      <Footer />
    </div>
  )
}

export default Pymes
