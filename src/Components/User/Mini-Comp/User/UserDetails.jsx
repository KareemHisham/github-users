import "./UserDetails.css";
import { Link } from "react-router-dom";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const UserDetails = ({ usersData }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="user-content">
        <div className="header">
          <div className="left-side">
            <img src={usersData.avatar_url} alt="user-img" className="me-3" />
            <div className="details">
              <div className="name fw-bold">{usersData.name}</div>
              <div className="userName">@{usersData.twitter_username}</div>
            </div>
          </div>
          <button>follow</button>
        </div>
        <p className="mt-3">{usersData.bio}</p>
        <div className="address-info">
          <ul className="list-unstyled">
            <li>
              <span className="icon me-2">
                <MdBusiness />
              </span>
              <span>{usersData.company}</span>
            </li>
            <li>
              <span className="icon me-2">
                <MdLocationOn />
              </span>
              <span>{usersData.location}</span>
            </li>
            <li>
              <span className="icon me-2">
                <MdLink />
              </span>
              <Link
                to={`https://${usersData.blog}`}
                className="text-decoration-none"
              >
                <span>{usersData.blog}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
