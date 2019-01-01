import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
