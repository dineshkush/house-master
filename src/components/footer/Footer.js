import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_title">
              <h3>About Company</h3>
            </div>
            <div className="footer_about">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                dolore nam atque enim, adipisci eaque ea et cupiditate, modi,
                sequi eveniet fuga commodi. In dignissimos ut dolore doloremque
                non libero commodi sed atque repudiandae!
              </p>
              <Link to="/about-us" className="site_btn">
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
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/faqs">Faq's</Link>
                </li>
                <li>
                  <Link to="/payment">Payment</Link>
                </li>
                <li>
                  <Link to="/book-inspection">Book Inspection</Link>
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
                  <Link to="/services/home-inspaction">HomeInspaction</Link>
                </li>
                <li>
                  <Link to="/services/water-leakage">WaterLeakage</Link>
                </li>
                <li>
                  <Link to="/services/electrical-safety">Electrical Safety</Link>
                </li>
                <li>
                  <Link to="/services/industry-energy">Industry Energy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
