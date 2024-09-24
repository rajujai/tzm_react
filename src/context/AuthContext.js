import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const loadAuthState = () => {
  const storedAuth = localStorage.getItem("auth");
  return storedAuth ? JSON.parse(storedAuth) : { isLoggedIn: false, role: null, loading: false };
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(loadAuthState());
  const updateAuth = (newAuth) => {
    localStorage.setItem("auth", JSON.stringify(newAuth));
    setAuth(newAuth);
  };

  const login = (email, password) => {
    if (email === "admin@reactapp.com" && password === "admin123") {
      updateAuth({ isLoggedIn: true, role: "admin", loading: false });
    } else if (email === "user@reactapp.com" && password === "user123") {
      updateAuth({ isLoggedIn: true, role: "user", loading: false });
    }
  };

  const logout = () => {
    updateAuth({ isLoggedIn: false, role: null, loading: false });
  };

  const value = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!auth.loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
