import React from "react";
import '../stylesheets/UserCard.css'
import logoUsuario from '../images/user.png'

const UserCard = ({ user, title, description, reputation }) => {
  return (
    <div className="user-card">
      <div className="user-thumbnail">
        <img className="user-logo" src={logoUsuario}/>
        <p>{user} - {title}</p>
      </div>
      <div>
        <p>
          {description}
        </p>
      </div>
      <div>
        {reputation}
      </div>
    </div>
  )
}

export default UserCard
