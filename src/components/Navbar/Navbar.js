import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="n">
        <a href="#intro">
          <li>Home</li>
        </a>

        <a href="#about">
          <li>About</li>
        </a>
        <a href="#projectList">
          <li>Projects</li>
        </a>
        <a href="#skillsList">
          <li>Skills</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
