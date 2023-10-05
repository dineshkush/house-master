import React from "react";
import ContactDetails from "../../shared/contact-details/ContactDetails";
// import { useParams } from "react-router-dom";


function PaymentForm({phone, email, facebook, twitter, instagram, dribbble}) {
  return (
    <>
      <section className="payment_form_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="payment_form">Form 1</div>

              <div className="payment_form">Form 2</div>
            </div>
            <div className="col-lg-6">
              <ContactDetails phone={phone} email={email} facebook={facebook} twitter={twitter} instagram={instagram} dribbble={dribbble} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentForm;
