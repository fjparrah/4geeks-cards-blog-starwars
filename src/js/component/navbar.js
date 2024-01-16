import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Starwars Api</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">Favoritos</button>
        </Link>
      </div>
    </nav>
  );
};
