export type SignInData = {
    userId: string;
};

export type AuthContextMemo = {
    signIn: (data: SignInData) => {},
    signOut: () => {},
    signUp: (data: SignInData) => {}
  }

export type AuthState = {
    userToken: string | null,
    isSignUp: boolean,
    isSignOut: boolean
}