import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const loadAuthState = () => {
  const storedAuth = localStorage.getItem("auth");
  return storedAuth ? JSON.parse(storedAuth) : { isLoggedIn: false, role: null, currentUser: null };
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(loadAuthState());
  const updateAuth = (newAuth) => {
    localStorage.setItem("auth", JSON.stringify(newAuth));
    setAuth(newAuth);
  };

  const login = (email, password) => {
    if (email === "admin@reactapp.com" && password === "admin123") {
      const admin = { email, domain: "Admin" };
      updateAuth({ isLoggedIn: true, role: "admin", cuttentUser: admin });
    } else if (email === "user@reactapp.com" && password === "user123") {
      const users = localStorage.getItem("users");
      if (users) {
        const user = JSON.parse(users).find((user) => user.email === email);
        if (user) {
          updateAuth({ isLoggedIn: true, role: "user", currentUser: user });
        }
      } else {
        const user = { email, domain: "User" };
        updateAuth({ isLoggedIn: true, role: "user", currentUser: user });
      }
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
