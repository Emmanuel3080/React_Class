import React, { createContext, useState } from "react";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Emmanuel",
    email: "emma@gmail.com",
    age: 50,
    address: "US Jhor",
  });
  const signUp = () => {
    alert("Greetings From Auth Provider✅");
  };
  const authValue = {
    user,
    signUp,
  };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
