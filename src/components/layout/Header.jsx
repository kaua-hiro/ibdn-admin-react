import React from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // 1. Importe
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate(); // 2. Inicialize

  const handleLogout = () => {
    logout();
    navigate('/login'); // 3. Redirecione
  };

  return (
    <header className="header">
      <div className="header-user">
        <FiUser />
        <span>{user?.name || 'Admin'}</span>
      </div>
      <button onClick={handleLogout} className="btn-logout">
        <FiLogOut />
        <span>Sair</span>
      </button>
    </header>
  );
};

export default Header;