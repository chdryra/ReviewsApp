import { SignInData } from "../types/AuthTypes";
import { createContext } from "react";

export const AuthContext = createContext({
    signIn: (data: SignInData) => {},
    signOut: () => {},
    signUp: (data: SignInData) => {}
  });
