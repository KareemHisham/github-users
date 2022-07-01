import "./Followers.css";
import { Link } from "react-router-dom";

const Followers = ({ followers }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="followers-content">
        <ul className="list-unstyled">
          {followers.map((follower) => {
            return (
              <li key={follower.id} className="mb-3">
                <img
                  src={follower.avatar_url}
                  alt="followers-img"
                  className="me-3"
                />
                <div className="followers-info">
                  <div className="name">{follower.login}</div>
                  <Link
                    to={follower.html_url}
                    className="followers-link text-decoration-none"
                    target="_blank"
                  >
                    {follower.html_url}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Followers;
