import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { solicitud } from '../../../utils/fetchWrapper.js';
import '../css/Login.css';

const Register = () => {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await solicitud.post({
                endpoint: 'register',
                body: { username, email, password }
            });
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                setError(data.error);
                return;
            }
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        
        <>
        <div className="wrapper">
        <div className="container">
        <div className="form">
        <h1>Registro</h1>
        <div className="input-block">
          <input
            className="input"
            type="text"
            id="name"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="name">Nombre Completo</label>
        </div>
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
          <button onClick={handleRegister}>Registrar</button>
          <span className="login">
            <p>
              ¿Ya tienes una cuenta?{' '}
              <a onClick={()=>{navigate('/')}}>
                Haz clic aquí
              </a>
            </p>
            {error && <p className="error">{error}</p>}
          </span>
        </div>
        </div>
      </div>
    </div>
      </>
    )
}

export default Register;