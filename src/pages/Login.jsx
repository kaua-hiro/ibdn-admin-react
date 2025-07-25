import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // 1. Importe o useNavigate
import '../assets/styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); // 2. Inicialize o hook

  // A função handleSubmit agora também é 'async'
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      // Usamos 'await' para esperar a função login terminar.
      const loginSuccess = await login({ username, password });

      // A navegação só acontece SE o login retornar sucesso.
      if (loginSuccess) {
        navigate('/');
      } else {
        // Opcional: Mostrar um erro se o login falhar
        alert("Falha no login, verifique o console.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-logo">Nexus Dashboard</h1>
        <h2>Acesse o Painel</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;