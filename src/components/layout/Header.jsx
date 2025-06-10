import React from 'react';
import { FiUser } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-search">
        {/* Input de busca pode ser adicionado aqui */}
      </div>
      <div className="header-user">
        <FiUser />
        <span>Admin</span>
      </div>
    </header>
  );
};
// Crie o CSS correspondente em 'src/components/layout/Header.css'
export default Header;