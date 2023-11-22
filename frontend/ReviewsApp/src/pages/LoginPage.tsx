import { Login, LoginInfo } from "../components/Login";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  const loginUser = (info: LoginInfo) => {
    alert(`${info.email}: ${info.password}`)
  };

  return (
    <div>
      <Login onLogin={loginUser} />
      <p className="text-sm text-white text-center">
        No account yet? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
