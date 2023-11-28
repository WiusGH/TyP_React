import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import '../stylesheets/Page-content.css'
import logo from '../images/logo2.png'
import '../stylesheets/Home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <h3>La formación de alianzas esencial para el progreso, la innovación y el bienestar. Es por eso que en T&P invitamos a jóvenes talentos y pequeñas y medianas empresas a trabajar en conjunto y así alcanzar metas inimaginables.</h3>
        <img className="home-logo" src={logo} />
      </div>
      <Footer /> 
    </div>
  )
}

export default Home