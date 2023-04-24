import "../Styles/Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="task-wrapper">
      <div className="links">
        <NavLink to="/">All my task</NavLink>
        <NavLink to="/inprogress">Inprogress</NavLink>
        <NavLink to="/completed">Completed</NavLink>
      </div>
      <div className="task-content">
        <p>Home</p>
      </div>
    </div>
  );
};

export default Home;
