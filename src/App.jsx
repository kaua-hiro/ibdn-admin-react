import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Contexto de Autenticação
import { AuthProvider } from './context/AuthContext';

// Componentes
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';

// Páginas
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Membros from './pages/Membros';
import Configuracoes from './pages/Configuracoes';

// Estilos
import './assets/styles/variables.css';
import './assets/styles/App.css';

function App() {
  return (
    // A MUDANÇA ESTÁ AQUI: O <Router> agora envolve o <AuthProvider>
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rota pública para o Login */}
          <Route path="/login" element={<Login />} />

          {/* Rota "pai" que é protegida e renderiza o Layout principal */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            {/* Rotas "filhas" que aparecem dentro do Outlet do Layout */}
            <Route index element={<Dashboard />} />
            <Route path="membros" element={<Membros />} />
            <Route path="configuracoes" element={<Configuracoes />} />
          </Route>

          {/* Rota para qualquer outro caminho não encontrado, redireciona para a home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;