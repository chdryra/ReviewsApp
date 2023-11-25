import HomePage from "./src/screens/HomeScreen";
import LoginPage from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import ReviewsPage from "./src/screens/ReviewsScreen";
import { RootStack } from "./types/NavigationTypes";
import SignupPage from "./src/screens/SignupScreen";
import { StyleSheet } from "react-native";

export function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomePage} />
        <RootStack.Screen name="Login" component={LoginPage} />
        <RootStack.Screen name="Signup" component={SignupPage} />
        <RootStack.Screen name="Reviews" component={ReviewsPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
