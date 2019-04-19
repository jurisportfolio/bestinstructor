import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "./pages/UserPage";
import UsersList from "./pages/UsersListPage";
import uuidv4 from "uuid/v4";

const listOfInstructors = [
  {id: uuidv4(), name: "Red", place: "Zieleniec"},
  
  {id: uuidv4(), name: "Red", place: "Zieleniec"},
  {id: uuidv4(), name: "Red", place: "Zieleniec"},
  {id: uuidv4(), name: "Red", place: "Zieleniec"}
];

function printInstructors (listOfInstructors) {
  return(
    listOfInstructors.map(({id, name, place}) =>
    console.log(`id: ${id} name: ${name} place: ${place}`)
    )
  )
}
printInstructors(listOfInstructors);

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
