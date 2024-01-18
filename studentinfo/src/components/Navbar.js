import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Student Info System</Link>
            <div className="d-flex">
            <Link className="btn btn-outline-light" type="submit" to="/add">Add Student</Link>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;
