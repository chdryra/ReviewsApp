import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyleSheet, Text, View } from "react-native";

import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import ReviewsPage from "./src/pages/ReviewsPage";
import SignupPage from "./src/pages/SignupPage";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
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
