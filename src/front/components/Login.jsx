import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate(); 

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleLogin = () => {
    navigate('/panel'); 
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="form">
          {isRegister ? (
            <>
              <h1>Registro</h1>
              <div className="input-block">
                <input className="input" type="text" id="name" required />
                <label htmlFor="name">Nombre Completo</label>
              </div>
              <div className="input-block">
                <input className="input" type="email" id="email" required />
                <label htmlFor="email">Correo Electrónico</label>
              </div>
              <div className="input-block">
                <input className="input" type="password" id="password" required />
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="actions">
                <button>Registrar</button>
                <span className="login">
                  <p>
                    ¿Ya tienes una cuenta?{' '}
                    <a href="#login" onClick={toggleForm}>
                      Haz clic aquí
                    </a>
                  </p>
                </span>
              </div>
            </>
          ) : (
            <>
              <h1>Inicio de Sesión</h1>
              <div className="input-block">
                <input className="input" type="email" id="email" required />
                <label htmlFor="email">Correo Electrónico</label>
              </div>
              <div className="input-block">
                <input className="input" type="password" id="password" required />
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="actions">
                <span className="forgot">
                  <a href="#">¿Olvidaste tu contraseña?</a>
                </span>
                <button onClick={handleLogin}>Iniciar Sesión</button>
                <span className="register">
                  <p>
                    ¿No tienes una cuenta?{' '}
                    <a href="#register" onClick={toggleForm}>
                      Haz clic aquí
                    </a>
                  </p>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
