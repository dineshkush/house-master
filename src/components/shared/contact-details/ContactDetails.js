import React from "react";
import "./ContactDetails.css";

function ContactDetails({
  phone,
  email,
  facebook,
  twitter,
  instagram,
  linkedin
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
            <i className="fa-solid fa-location-arrow"></i> 172-b/5755, ground floor, vande pushpa, LokMilan co-op Housing Society, Kannamwar Nagar I, Vikhroli, Mumbai, Maharashtra 400083
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
              <a
                href={linkedin}
                title="Linkedin"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href={facebook} title="Facebook" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href={twitter} title="Twitter" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={instagram} title="Instagram" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
