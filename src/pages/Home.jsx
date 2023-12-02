import React, { useEffect, useState } from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx"
import '../stylesheets/Page-content.css'
import logo from '../images/logo2.png'
import '../stylesheets/Home.css'
import axios from 'axios';

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
        console.log(users)
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="page-content">
        <h3>La formación de alianzas esencial para el progreso, la innovación y el bienestar. Es por eso que en T&P invitamos a jóvenes talentos y pequeñas y medianas empresas a trabajar en conjunto y así alcanzar metas inimaginables.</h3>
        <img className="home-logo" src={logo} alt="logo"/>
      </div>
      <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
      <Footer /> 
    </div>
  )
}

export default Home