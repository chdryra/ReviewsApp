import { StyleSheet, Text, View } from "react-native";

import ReviewsPage from "./src/pages/ReviewsPage";

export default function App() {
  return (
    <div className="App">
      <ReviewsPage />
    </div>
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
