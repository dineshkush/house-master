import React from "react";
import "./ContactDetails.css";

function ContactDetails({
  phone,
  email,
  facebook,
  twitter,
  instagram,
  dribbble,
}) {
  return (
    <div className="payment_content">
      <h3>Contact Us</h3>
      <div className="contact_details">
        <ul className="contact_list">
          <li>
            <i className="fa-solid fa-location-arrow"></i> 1st Floor, Landmark cyber
            Park, sec-67, Gurgaon, Haryana
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>{" "}
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        </ul>

        <div className="contact_sm">
          <ul>
            <li>
              <a href={facebook} title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href={twitter} title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={instagram} title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href={dribbble} title="Dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
