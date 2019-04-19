import React from "react";
import { Link } from "react-router-dom";

const User = ({ match }) => {
  return (
    <div>
      <Link to={`/`}>Main</Link><br/>
      <Link to="/userslist"> Usesrs List</Link>

      <h1> User Page {match.params.username} </h1> 
      
    </div> 
  );
}

export default User;