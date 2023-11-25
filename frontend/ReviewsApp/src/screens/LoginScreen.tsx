import { Login, LoginInfo } from "../components/Login";
import React, { useState } from "react";

import LoginFirebase from "../components/LoginFirebase";

const LoginPage = () => {

  const loginUser = (info: LoginInfo) => {
    alert(`${info.email}: ${info.password}`)
  };

  return (
    <div>
      <LoginFirebase  />
    </div>
  );
};

export default LoginPage;
