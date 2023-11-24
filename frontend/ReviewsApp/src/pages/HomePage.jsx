import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { firebaseAuth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(firebaseAuth)
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("user", user);
      } else {
        console.log("user is logged out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <nav>
        <p>Welcome Home</p>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default HomePage;
