import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import MainLogo from "../../images/main-logo.jpg";

function Header(props) {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavbarClose = () => {
    setIsNavbarOpen(false);
  };

  return (
    <header className="header_area">
      <div className="top_header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
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
            <div className="col-lg-6 mobilehide">
              <div className="header_social_media">
                <ul>
                  <li>
                    <a
                      href={props.linkedin}
                      title="Linkedin"
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.facebook}
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.twitter}
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.instagram}
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
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
                  <img src={MainLogo} alt="House Master" className="img-fluid" />
                </Link>
                <button
                  className={`navbar-toggler ${isNavbarOpen ? '' : 'collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded={isNavbarOpen}
                  aria-label="Toggle navigation"
                  onClick={handleNavbarToggle}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse justify-content-end ${isNavbarOpen ? 'show' : ''}`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/" onClick={handleNavbarClose}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about" onClick={handleNavbarClose}>
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
                          <NavLink className="dropdown-item" to="/services/home-inspection" onClick={handleNavbarClose}>
                            Home Inspaction
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/services/damp-seepage-inspection" onClick={handleNavbarClose}>
                            Damp / Seepage Detection
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/services/electrical-safety" onClick={handleNavbarClose}>
                            Electrical Safety
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/services/industry-energy" onClick={handleNavbarClose}>
                            Industry Energy
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/projects" onClick={handleNavbarClose}>
                        Projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/faqs" onClick={handleNavbarClose}>
                        Faq's
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/book-inspection" onClick={handleNavbarClose}>
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item header_btn">
                      <NavLink className="nav-link site_btn" to="/payment" onClick={handleNavbarClose}>
                        Payment
                      </NavLink>
                    </li>
                    <li className="nav-item header_btn">
                      <NavLink className="nav-link site_btn" to="/book-inspection" onClick={handleNavbarClose}>
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
