import { AuthActionName as AuthActionType, AuthReducer } from "./src/reducers/AuthReducer";
import { useEffect, useMemo, useReducer, useState } from "react";

import { AuthContext } from "./src/store/AuthContext";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./types/NavigationTypes";
import { SignInData } from "./src/types/AuthTypes";
import { StyleSheet } from "react-native";
import { UsersApi } from "./src/config/apiConfig";
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const [authState, dispatch] = useReducer(AuthReducer,
    {
        userToken: '',
        isSignOut: false,
        isSignUp: false
    }
  );

  const authContext = useMemo(
    () => ({
      signIn: async (data: SignInData) => {
        UsersApi.signinUserUsersSigninPost({uid: data.userId}).then((response) => {
          console.log(response)
          dispatch({ type: AuthActionType.SignIn, token: data.userId });
        })
      },
      signOut: () => dispatch({ type: AuthActionType.SignOut }),
      signUp: async (data: SignInData) => {
        UsersApi.signupUserUsersSignupPost({uid: data.userId}).then((response) => {
          console.log(response)
          dispatch({ type: AuthActionType.SignUp, token: data.userId });
        })
      },
    }),
    []
  );

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user && authState.userToken && !authState.isSignUp) {
        setIsSignedIn(true)
      } else {
        setIsSignedIn(false)
      }
    });
  }, [authState]);

  const protectedScreens = <RootStack.Screen name="Home" component={HomeScreen} />
  const signInScreens = <RootStack.Screen name="Login" component={LoginScreen} />
  const screens = isSignedIn ? protectedScreens : signInScreens

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login">
          {screens}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
