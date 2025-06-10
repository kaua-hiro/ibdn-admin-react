import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiUsers, FiSettings } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-logo">IBDN Admin</h1>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link">
          <FiGrid />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/membros" className="sidebar-link">
          <FiUsers />
          <span>Membros</span>
        </NavLink>
        <NavLink to="/configuracoes" className="sidebar-link">
          <FiSettings />
          <span>Configurações</span>
        </NavLink>
      </nav>
    </aside>
  );
};

// Crie o CSS em 'src/components/layout/Sidebar.css'
/*
.sidebar { ... }
.sidebar-link.active { background-color: var(--ibdn-primary); color: var(--ibdn-white); }
*/
export default Sidebar;