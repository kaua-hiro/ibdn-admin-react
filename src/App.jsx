import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Membros from './pages/Membros';
import Configuracoes from './pages/Configuracoes';

// Verifique se os caminhos destes arquivos CSS estão corretos
// de acordo com a sua estrutura de pastas.
import './assets/styles/variables.css';
import './assets/styles/App.css';

function App() {
  return (
    <Router>
      {/* A CORREÇÃO ESTÁ AQUI: 
        className é um atributo que recebe uma string de texto.
        As duas classes "app-container" e "dark" ficam dentro das mesmas aspas.
      */}
      <div className="app-container dark">
        <Sidebar />
        <div className="main-content">
          <Header />
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/membros" element={<Membros />} />
              <Route path="/configuracoes" element={<Configuracoes />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;