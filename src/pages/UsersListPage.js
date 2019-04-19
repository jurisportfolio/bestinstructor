import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ match }) => {
  return ( 
    <div>
      <Link to={`/`}>Main</Link><br/>
      <Link to={`/user/peter`}>User</Link>

      <h1> Users List </h1>
      
    </div>
   );
}

export default UsersList;