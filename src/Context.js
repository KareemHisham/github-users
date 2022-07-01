import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import {
  MockUser,
  MockRepos,
  MockFollowers,
} from "./Components/ComponentContainer";

export const StateContext = createContext();
const GithubUrl = "https://api.github.com";

export const ContextProvider = ({ children }) => {
  // Variables
  const [usersData, setUsersData] = useState(MockUser),
    [reposData, setReposData] = useState(MockRepos),
    [followers, setFollowersData] = useState(MockFollowers),
    [apiLimit, setApiLimit] = useState(0),
    [requests, setRequests] = useState(0),
    [loading, setLoading] = useState(false),
    [limitError, setLimitError] = useState(false),
    [userError, setUserError] = useState(false);

  // getGithubUser Function
  const getGithubUser = async (user) => {
    setLimitError(false);
    setLoading(true);
    const response = await axios(`${GithubUrl}/users/${user}`).catch((error) =>
      console.log(error)
    );
    if (response) {
      setUsersData(response.data);
      const { login, followers_url } = response.data;
      // Get Repos
      axios(`${GithubUrl}/users/${login}/repos?per_page=100`)
        .then((repo) => setReposData(repo.data))
        .catch((err) => console.log(err));
      // Get Followers
      axios(`${followers_url}?per_page=100`)
        .then((follower) => setFollowersData(follower.data))
        .catch((err) => console.log(err));
    } else {
      setUserError(true);
    }
    checkRequests();
    setLoading(false);
  };

  // checkRequests Function
  const checkRequests = () => {
    axios(`${GithubUrl}/rate_limit`)
      .then((res) => {
        let {
          rate: { limit, remaining },
        } = res.data;
        setApiLimit(limit);
        setRequests(remaining);
        if (remaining === 0) {
          setLimitError(true);
        } else {
          setLimitError(false);
        }
      })
      .catch((error) => console.log("catch", error));
  };

  // useEffect Function
  useEffect(checkRequests, []);

  return (
    <StateContext.Provider
      value={{
        usersData,
        reposData,
        followers,
        apiLimit,
        requests,
        limitError,
        userError,
        getGithubUser,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
