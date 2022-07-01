import "./Login.css";
import githubUser from "../../assets/images/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const myLogin = () => {
    loginWithRedirect();
    navigate(redirectPath, { replace: true });
  };
  return (
    <section className="login-page">
      <img src={githubUser} alt="login-avatar" className="mb-3" />
      <h1 className="text-capitalize">github user</h1>
      <button onClick={myLogin} className="btn btn-info text-white">
        Login/Signup
      </button>
    </section>
  );
};

export default Login;
