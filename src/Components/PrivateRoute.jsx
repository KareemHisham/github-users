import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const location = useLocation();
  const isUser = isAuthenticated && user;
  if (!isUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
export default PrivateRoute;
