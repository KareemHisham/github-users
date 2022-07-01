import "./Info.css";
import { useStateContext } from "../../Context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
const Info = () => {
  const { usersData } = useStateContext();
  const { followers, following, public_repos, public_gists } = usersData;
  const items = [
    {
      id: 1,
      icon: <GoRepo />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers />,
      label: "users",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist />,
      label: "gists",
      value: public_repos,
      color: "yellow",
    },
  ];
  return (
    <section className="info">
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col-12 col-md-3" key={item.id}>
              <div className="item-wrapper">
                <div className={`icon me-3 ${item.color}`} style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="item-content">
                  <div className="count">{item.value}</div>
                  <div className="title text-capitalize">{item.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Info;
