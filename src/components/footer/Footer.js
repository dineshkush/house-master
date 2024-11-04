import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer_sec">
      <div className="top_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer_title">
                <h3>About Company</h3>
              </div>
              <div className="footer_about">
                <p>
                  Housemaster is a home inspection company founded by alumni of
                  IIT Roorkee. It provides wide range of house related services
                  like home inspection, property documents verification,
                  commercial inspection etc.
                </p>
                <Link to="/about" className="site_btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer_title">
                <h3>Quick Links</h3>
              </div>

              <div className="footer_menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/faqs">Faq's</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer_title">
                <h3>Our Services</h3>
              </div>

              <div className="footer_menu">
                <ul>
                  <li>
                    <Link to="/services/home-inspaction">Home Inspaction</Link>
                  </li>
                  <li>
                    <Link to="/services/damp-seepage-inspection">Damp / Seepage Detection</Link>
                  </li>
                  <li>
                    <Link to="/services/electrical-safety">
                      Electrical Safety
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/industry-energy">Industry Energy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer_title">
                <h3>Contact Info</h3>
              </div>

              <div className="footer_contact">
                <ul className="foot_contact">
                  <li>
                    <i className="fa-solid fa-location-arrow"></i> 1st Floor,
                    Landmark cyber Park, sec-67, Gurgaon, Haryana
                  </li>
                  <li>
                    <i className="fa-solid fa-location-arrow"></i> 172-b/5755, ground floor, vande pushpa, LokMilan co-op Housing Society, Kannamwar Nagar I, Vikhroli, Mumbai, Maharashtra 400083
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>{" "}
                    <a href={`tel:${props.phone}`}>{props.phone}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>{" "}
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                  </li>
                </ul>

                <div className="footer_sm">
                  <ul>
                    <li>
                      <a href={props.linkedin} title="Linkedin">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.facebook} title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.twitter} title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.instagram} title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright_footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="copyright_text">
                <p>© Copyright 2019 - House Master | All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-6 col-12 align-self-center">
              <div className="copyright_menu text-end">
                <ul className="go-top">
                  <li>
                    <Link to="/about-us">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/about-us">Privacy & Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
