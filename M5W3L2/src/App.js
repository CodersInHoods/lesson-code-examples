import "./App.css";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { User } from "./views/User";
import { UserList } from "./views/UserList";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/users"}>User List</Link>
        </li>
      </ul>

      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/users"} element={<UserList />} />
        <Route path={"/users/:id"} element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
