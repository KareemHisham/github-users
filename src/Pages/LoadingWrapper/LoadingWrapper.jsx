import "./Loading-Wrapper.css";
import loadingImg from "../../assets/images/preloader.gif";
import { useAuth0 } from "@auth0/auth0-react";
const LoadingWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <section className="loading-wrapper">
        <img src={loadingImg} alt="loading" />
      </section>
    );
  }
  if (error) {
    return <div className="alert alert-danger">{error.message}</div>;
  }
  return <>{children}</>;
};

export default LoadingWrapper;
