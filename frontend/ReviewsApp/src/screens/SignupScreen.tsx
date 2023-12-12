import { AxiosResponse } from "axios";
import React from "react";
import { SignUpInfo } from "../client";
import { Signup } from "../components/Signup";
import { UsersApi } from "../config/apiConfig";

export default function SignupPage() {
  const signupUser = (info: SignUpInfo) => {
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
