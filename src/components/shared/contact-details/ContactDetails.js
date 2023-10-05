import React from "react";

function ContactDetails({phone, email, facebook, twitter, instagram, dribbble}) {
  return (
    <div className="payment_content">
      <h2>Contact Us</h2>
      <h4>HOUSEMASTER HOME INSPECTIONS</h4>
      <div className="footer_contact">
        <ul className="foot_contact">
          <li>
            <i className="fa-solid fa-phone"></i>{" "}
            <a href={`tel:${phone}`}>{phone}</a>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        </ul>

        <div className="footer_sm">
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
