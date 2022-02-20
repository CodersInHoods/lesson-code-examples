import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Pool } from "./views/Pool";
import { Team } from "./views/Team";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Pool</Link>
          </li>
          <li>
            <Link to={"/team-one"}>Team 1</Link>
          </li>
          <li>
            <Link to={"team-two"}>Team 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Pool />} />
        <Route path="team-one" element={<Team teamType={"teamOne"} />} />
        <Route path="team-two" element={<Team teamType={"teamTwo"} />} />
      </Routes>
    </div>
  );
};

export default App;
