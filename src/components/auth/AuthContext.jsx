import React, { createContext, useState, useContext, useEffect } from 'react';

// Criamos um contexto para guardar não só o usuário, mas também o estado de carregamento inicial.
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  loading: true, // Começa como 'true' por padrão.
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controlar a verificação inicial.

  // Este useEffect é a parte mais importante.
  // Ele roda APENAS UMA VEZ quando o aplicativo é carregado.
  useEffect(() => {
    // Tenta encontrar o usuário no localStorage.
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      // Se encontrou, define o usuário no estado.
      setUser(JSON.parse(storedUser));
    }

    // Independentemente de ter encontrado ou não, a verificação inicial terminou.
    // Agora podemos definir o carregamento como 'false'.
    setLoading(false);
  }, []); // O array vazio [] garante que isso rode apenas na montagem inicial.


  // As funções de login e logout agora são simples.
  const login = (data) => {
    const mockUser = { name: data.username, email: `${data.username}@nexus.org.br` };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    // O redirecionamento será feito na página de Login, não mais aqui.
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    // O redirecionamento será feito no Header, não mais aqui.
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading, // Passamos o estado de carregamento para os componentes filhos.
    login,
    logout,
  };

  // Enquanto estiver carregando, não renderizamos nada do aplicativo.
  // Isso impede que o ProtectedRoute tome uma decisão precipitada.
  if (loading) {
    return null; // Ou você pode retornar um <LoadingSpinner /> aqui se preferir.
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook customizado não muda.
export const useAuth = () => {
  return useContext(AuthContext);
};