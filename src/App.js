import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AddUser from './components/AddUser';
// import User from './components/User';
import UserList from './components/UserList';
import Nav from './components/Nav';
import Home from "./components/Home";

function App() {
  return (
    <Router>
    <Nav/>
      <div className="container">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/userlist"} element={<UserList />} />
        <Route exact path="/adduser" element={<AddUser />} />
        {/* <Route path="/userlist" element={<User />} /> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
