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

  const protectedScreens = <RootStack.Screen name="Home" component={HomeScreen} />
  const signInScreens = <RootStack.Screen name="Login" component={LoginScreen} />
  const screens = isSignedIn ?
    protectedScreens
    :
    signInScreens

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        {screens}
      </RootStack.Navigator>
    </NavigationContainer>
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
