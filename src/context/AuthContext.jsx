import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Falha ao ler o usuário do localStorage", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (data) => {
    try {
      const mockUser = { name: data.username, email: `${data.username}@nexuscorp.com` };
      const userString = JSON.stringify(mockUser);
      await localStorage.setItem('user', userString);
      setUser(mockUser);
      return true;
    } catch (error) {
      console.error("Falha ao salvar no localStorage:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = { user, isAuthenticated: !!user, loading, login, logout };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};