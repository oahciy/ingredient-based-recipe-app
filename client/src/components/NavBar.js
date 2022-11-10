import React from "react";
import logoDark from "../img/logo-dark-removebg.png";

function Navbar() {
  const title = {
    fontFamily: "Montserrat, sans-serif",
    color: "white",
    textShadow:
      "-1px 0 #EA8507ff, 0 1px #EA8507ff, 1px 0 #EA8507ff, 0 -1px #EA8507ff",
  };
  return (
    <nav className="navbar">
      <ul className="nav">
        <li className="nav-item">
          <a href="/">
            <img
              src={logoDark}
              width="65"
              height="65"
              alt="Cocktail Logo"
            ></img>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/">
            <div className="" style={title}>
              <h2>Less Waste More Taste</h2>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
