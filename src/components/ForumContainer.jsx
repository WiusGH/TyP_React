import React from "react";
import ForumTopic from "./ForumTopic";
import '../stylesheets/ForumContainer.css'

const ForumContainer = () => {
  return (
    <div className="forum-container">
      <ForumTopic
        topicTitle="Busco diseñador gráfico"
        topicContent="Hola! Necesito un disñador gráfico que me haga un logo y un diseño de timbre para una venta de repuestos para autos."
        topicDate="18/11/23"
      />
      <ForumTopic
        topicTitle="Soy diseñador web"
        topicContent="Hola. Soy diseñador web y puedo hacer una sitio web para tu negocio donde el cliente pueda ver todos tus productos, agregarlos a un carrito y comprar a través de un pago seguro con WEB pay."
        topicDate="15/11/23"
      />
      <ForumTopic
        topicTitle="Qué necesito para comenzar una pyme?"
        topicContent="Tengo dinero ahorrado y quiero invertirlo para comenzar una tienda de zapatos pero no tengo idea de cómo iniciar ni qupe necesito legalmente. Me pueden ayudar?"
        topicDate=" 14/11/23"
      />
      <ForumTopic
        topicTitle="Me encanta ese sitio!"
        topicContent="Solo quería decir que he utilizado los servicios de este sitio web para conseguir 3 talentos jóvenes para que me ayudaran a mejorar mi pyme mientras los ayudo yo a ellos económicamente :D"
        topicDate="09/11/23"
      />
      <ForumTopic
        topicTitle="Administradora de redes sociales"
        topicContent="Tengo experiencia manteniendo activos diferentes sitios web como Instagram y sé como generar más visitas creando publicaciones llamativas para que más personas se interesen en tu producto."
        topicDate="05/11/23"
      />
    </div>
  )
}

export default ForumContainer
