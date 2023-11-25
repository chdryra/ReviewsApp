import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { firebaseAuth } from "../../firebase";

const HomePage = () => {
  const handleLogout = () => {
    signOut(firebaseAuth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("user", user);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
      <nav>
        <p>Welcome Home</p>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
  );
};

export default HomePage;
