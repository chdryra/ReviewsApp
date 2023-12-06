import { AuthState } from "../types/AuthTypes";

export enum AuthActionName{
    SignIn,
    SignUp,
    SignOut,
}

export type AuthAction =
    | { type: AuthActionName.SignIn, token: string }
    | { type: AuthActionName.SignOut }
    | { type: AuthActionName.SignUp, token: string }

export function AuthReducer(prevState: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionName.SignIn:
            console.log("Auth sign in")
            return {
                ...prevState,
                isSignOut: false,
                isSignUp: false,
                userToken: action.token,
            };
        case AuthActionName.SignOut:
            console.log("Auth sign out")
            return {
                ...prevState,
                isSignOut: true,
                isSignUp: false,
                userToken: null,
            };
        case AuthActionName.SignUp:
            console.log("Auth sign up")
            return {
                ...prevState,
                isSignOut: false,
                isSignUp: true,
                userToken: action.token,
            };
        default:
            return prevState;
    }
}
