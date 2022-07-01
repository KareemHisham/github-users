import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;
  const Navigate = useNavigate();
  const handleLogout = () => {
    // logout({ returnTo: window.location.origin });
    Navigate("/login");
  };
  return (
    <nav>
      <div className="container">
        <div className="nav-bar">
          {isUser && user.picture && (
            <img src={user.picture} alt={user.name} className="me-3" />
          )}
          {isUser && user.name && (
            <div className="head me-3">
              Welcome, <span className="name">{user.name.toUpperCase()}</span>
            </div>
          )}
          {isUser ? (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleLogout}
            >
              logout
            </button>
          ) : (
            <button
              className="btn btn-outline-success btn-sm"
              onClick={loginWithRedirect}
            >
              login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
