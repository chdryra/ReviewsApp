import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { AxiosResponse } from "axios";
import { Signup } from "../components/Signup";
import { SignupInfo } from "../client";
import { UsersApi } from "../config/apiConfig";

const SignupPage = () => {
  const navigate = useNavigate();

  const signupUser = (info: SignupInfo) => {
    UsersApi.signupUserUsersSignupPost(info)
    .then((response: AxiosResponse<void, any>) => {
      console.log(response.data)
    })  
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
