import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h2> ABHISHEK UGALE</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <a className="nav-link" href="#hero">
                <h5>Home</h5>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#fff" }} href="#work">
                <h5>Work</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#fff" }} href="#about">
                <h5>About</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#fff" }} href="#contact">
                <h5>Contact</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
