import { AuthContext } from "../store/AuthContext";
import { firebaseAuth } from "../../firebase";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useContext } from "react";

const HomePage = () => {
  const { signOut } = useContext(AuthContext);

  const handleLogout = () => {
    firebaseSignOut(firebaseAuth)
      .then(() => {
        signOut();
      })
      .catch((error) => {
        alert(error);
      });
  };

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
