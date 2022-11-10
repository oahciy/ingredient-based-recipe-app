import React from "react";
import logoDark from "../img/logo-dark-removebg-preview.png";

function Navbar() {
  const title = {
    fontFamily: "Montserrat, sans-serif",
    color: '#fff',    
  };
  return (
    <nav className="navbar" style={{backgroundColor: '#702f2c'}} >
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
