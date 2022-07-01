import "./Dashboard.css";
import {
  Navbar,
  Search,
  Info,
  User,
  Repos,
} from "../../Components/ComponentContainer";
import { useStateContext } from "../../Context";
import loadingImg from "../../assets/images/preloader.gif";
const Dashboard = () => {
  const { loading } = useStateContext();
  if (loading) {
    return (
      <section className="dashboard">
        <Navbar />
        <div className="container">
          <Search />
          <img src={loadingImg} alt="loading" className="loading-img" />
        </div>
      </section>
    );
  }
  return (
    <section className="dashboard">
      <Navbar />
      <div className="container">
        <Search />
        <Info />
        <User />
        <Repos />
      </div>
    </section>
  );
};

export default Dashboard;
