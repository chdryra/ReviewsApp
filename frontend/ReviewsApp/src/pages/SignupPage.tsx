import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Signup, SignupInfo } from "../components/Signup";

const SignupPage = () => {
  const navigate = useNavigate();

  const signupUser = (info: SignupInfo) => {
    alert(`${info.email}: ${info.password}: ${info.displayName}`)
  };

  return (
    <div>
      <Signup onSignup={signupUser} />
      <p>
        Already have an account?{' '}
        <NavLink to="/login" >
          Sign in
        </NavLink>
      </p>
    </div>
  );
};

export default SignupPage;
