import React from "react";

import { AxiosResponse } from "axios";
import { Signup } from "../components/Signup";
import { SignupInfo } from "../client";
import { UsersApi } from "../config/apiConfig";

const SignupPage = () => {
  const signupUser = (info: SignupInfo) => {
    UsersApi.signupUserUsersSignupPost(info)
    .then((response: AxiosResponse<void, any>) => {
      console.log(response.data)
    })  
  };

  return (
    <div>
      <Signup onSignup={signupUser} />
    </div>
  );
};

export default SignupPage;
