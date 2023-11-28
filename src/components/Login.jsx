import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/Login.css'

const Login = () => {

    const handleClick = (/* username, password */) => {
        console.log("it works")
    }

    return (
        <div className="login-container">
            <h3>Iniciar sesión</h3>
            <form className="login-form">
                <input className="input-field" type="text" name="usuario" placeholder="Usuario" />
                <input className="input-field" type="password" name="contraseña" placeholder="Contraseña" />
                <button onClick={handleClick} className="submit-button" type="submit">Ingresar</button>
            </form>
            <p>¿No estás registrado? <Link to="/ingresar">Crea una cuenta</Link></p>
        </div>
    )
}

export default Login
