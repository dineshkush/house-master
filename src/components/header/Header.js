import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Navbar
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
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <p className="nav-link" href="/">
                    Services
                  </p>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faqs">
                    Faq's
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item header_btn">
                  <NavLink className="nav-link" to="/payment">
                    Payment
                  </NavLink>
                </li>
                <li className="nav-item header_btn">
                  <NavLink className="nav-link" to="/book-inspection">
                    Book Inspection
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
