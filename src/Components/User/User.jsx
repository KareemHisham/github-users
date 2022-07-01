import "./User.css";
import { useStateContext } from "../../Context";
import { UserDetails, Followers } from "../ComponentContainer";

const User = () => {
  const { followers, usersData } = useStateContext();
  return (
    <section className="users">
      <div className="row">
        <UserDetails usersData={usersData} />
        <Followers followers={followers} />
      </div>
    </section>
  );
};

export default User;
