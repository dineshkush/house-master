import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header className="header_area">
      <div className="top_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="top_bar_contact">
                <ul>
                  <li>
                    <a href={`mailto:${props.email}`}>
                      <i className="fa-solid fa-envelope"></i> {props.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${props.phone}`}>
                      <i className="fa-solid fa-phone"></i> {props.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header_social_media">
                <ul>
                  <li>
                    <a
                      href={props.facebook}
                      title="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.twitter}
                      title="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.instagram}
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.dribbble}
                      title="Dribbble"
                    >
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav_header">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  Logo
                </Link>
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
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav"
                >
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
                    <li className="nav-item dropdown">
                      <p
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </p>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="/services/home-inspaction">
                          Home Inspaction
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/services/water-leakage">
                          Water Leakage
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/services/electrical-safety">
                          Electrical Safety
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/services/industry-energy">
                          Industry Energy
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/projects">
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/faqs">
                        Faq's
                      </NavLink>
                    </li>
                    <li className="nav-item header_btn">
                      <NavLink className="nav-link site_btn" to="/payment">
                        Payment
                      </NavLink>
                    </li>
                    <li className="nav-item header_btn">
                      <NavLink className="nav-link site_btn" to="/book-inspection">
                        Book Inspection
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
