import React from "react";
import UserCard from "./UserCard";
import Reviews from "./Reviews";
import '../stylesheets/UserTemplate.css'

const UserTemplate = () => {
  return (
    <div className="template-container">
      <div className="user-type">
        <p>Talento</p>
      </div>
      <div className="user-info-container">
        <div>
          <UserCard
            user="Valentina"
            title="Desorrolladora Full stack"
            description="TSU en informática, diseñadora gráfica y product owner. Puedo realizar logos personalizados y aplicaciones web/móviles para tu negocio."
            reputation="⭐⭐⭐⭐"
          />
        </div>
        <div className="reviews-list">
          <Reviews
            commenter="Alice P."
            review="⭐⭐⭐"
            comment="Me entregó un excelente trabajo pero demoró más de lo acordado."
          />
          <Reviews
            commenter="Gabriel L."
            review="⭐⭐⭐⭐⭐"
            comment="El trabajo fué mejor de lo que esperaba. Agradecido!."
          />
        </div>
      </div>
    </div>
  )
}

export default UserTemplate
