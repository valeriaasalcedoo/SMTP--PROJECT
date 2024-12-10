import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { solicitud } from '../../../utils/fetchWrapper.js';
import '../css/Login.css';

const Login = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await solicitud.post({
        endpoint: 'login',
        body: { email, password }
      });
      
      const data = await response.json();
      if(!response.ok){
        setError(data.error);
        return;
      }
      navigate('/panel');
    } catch (error) {
      console.error(error);
    };
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="form">
            <>
              <h1>Inicio de Sesión</h1>
              <div className="input-block">
                <input
                  className="input"
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Correo Electrónico</label>
              </div>
              <div className="input-block">
                <input
                  className="input"
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="actions">
                <button onClick={handleLogin}>Iniciar Sesión</button>
                <span className="register">
                  <p>
                    ¿No tienes una cuenta?{' '}
                    <a onClick={()=>{navigate('/register')}}>
                      Haz clic aquí
                    </a>
                  </p>
                  {error && <p className="error">{error}</p>} 
                </span>
              </div>
            </>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
