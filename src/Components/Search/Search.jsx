import "./Search.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useStateContext } from "../../Context";

const Search = () => {
  const [User, setUser] = useState("");
  const { apiLimit, requests, limitError, userError, getGithubUser, loading } =
    useStateContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      getGithubUser(User);
    }
  };
  return (
    <section className="search-bar">
      {limitError && (
        <div
          className="alert alert-danger d-flex align-items-center text-capitalize"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>Sorry, you have reach your limit</div>
        </div>
      )}
      
      {userError && (
        <div
          className="alert alert-danger d-flex align-items-center text-capitalize"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>Sorry, this user is not found</div>
        </div>
      )}

      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="input-group input-group-sm">
              <BsSearch className="search-icon" />
              <input
                type="text"
                className="form-control"
                placeholder="Search Github User..."
                value={User}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-sm btn-primary text-capitalize"
              disabled={requests === 0 || loading ? true : false}
            >
              search
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <div className="request-count text-muted fw-bold">
            <span className="text-capitalize">requests: </span>
            <span>
              {requests} / {apiLimit}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
