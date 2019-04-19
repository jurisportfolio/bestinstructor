import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./pages/UserPage";
import UsersList from "./pages/UsersListPage";

const Main = () => {
  return (
    <div>
      <Link to={`/user/peter`}>User</Link><br/>
      <Link to={"/userslist"}> Users List</Link>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact render={() => <Main />} />
        <Route path="/userslist" component={UsersList} />
        <Route path="/user/:username" component={User} />
      </div>
    </Router>
  );
}

export default App;
