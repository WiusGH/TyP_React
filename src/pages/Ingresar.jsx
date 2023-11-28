import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import Login from "../components/Login.jsx";

const Ingresar = () => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default Ingresar
