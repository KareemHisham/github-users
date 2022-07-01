import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Sorry, The page is not found</p>
      <Link to="/" className="btn btn-sm btn-info text-capitalize">
        back home
      </Link>
    </section>
  );
};

export default NotFound;
