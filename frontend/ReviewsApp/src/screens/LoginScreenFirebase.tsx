import LoginFirebase from "../components/LoginFirebase";
import { LoginInfo } from "../components/Login";

const LoginPage = () => {

  const loginUser = (info: LoginInfo) => {
    alert(`${info.email}: ${info.password}`)
  };

  return (
    <div>
      <LoginFirebase  />
    </div>
  );
};

export default LoginPage;
