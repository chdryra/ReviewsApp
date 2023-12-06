import { firebaseAuth } from "../../firebase";
import { signOut } from "firebase/auth";

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
