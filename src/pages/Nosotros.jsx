import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"

const Nosotros = () => {
  return (
    <div>
      <Header />
      <div className="page-content">
        <h4>En nuestra presentación, nos complace darles la bienvenida a T&P. Somos un equipos compuesto por cinco programadores. Nuestro origen se encuentra en el firme propósito de crear una plataforma destinada a impulsar alianzas mutuamente beneficiosas entre jóvenes talentos y pequeñas y medianas empresas (pymes).</h4>
        <br />
        <br />
        <h4>Nuestro enfoque primordial radica en facilitar la adquisición de experiencia laboral, especialmente para aquellos que, hasta ahora, no han tenido la oportunidad de acceder a ella. Esto lo logramos mediante colaboración en equipo con Pymes que requieren asesoría técnica y no cuentan con recursos financieros para contratar a profesionales de amplia trayectoría.</h4>
        <br />
        <br />
        <h4>En T&P creemos firmemente que la formación de alianzas constituye un pilar esencial para el progreso, la innovación y el bienestar de todos los involucrados. Por lo tanto extendemos una cordial invitación a jóvenes talentos y a las pequeñas y medianas empresas para que se unan a nosotros en esta cooperación con el fin de alcanzar metas que quizás hasta ahora les parecían inalcanzables.</h4>
      </div>
      <Footer />
    </div>
  )
}

export default Nosotros
