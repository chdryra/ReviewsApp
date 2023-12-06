import { useEffect, useState } from "react";

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./types/NavigationTypes";
import { StyleSheet } from "react-native";
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsSignedIn(true)
      } else {
        setIsSignedIn(false)
      }
    });
  }, []);

  const protectedRoutes = (<NavigationContainer>
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
  )

  const signInRoutes = (<NavigationContainer>
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen name="Login" component={LoginScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
  )

  return isSignedIn ? protectedRoutes : signInRoutes
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
