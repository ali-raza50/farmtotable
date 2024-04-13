import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Load user data from local storage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    if (storedIsLoggedIn) {
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
    }
  }, []);

  // Update local storage when user data or login status changes
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userData, setIsLoggedIn, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
