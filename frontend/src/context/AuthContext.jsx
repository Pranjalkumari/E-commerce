import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  // Sync authUser and token with localStorage
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [authUser]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (user, token) => {
    setAuthUser(user);
    setToken(token);
  };

  const logout = () => {
    setAuthUser(null);
    setToken(null);
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ authUser,setAuthUser, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
