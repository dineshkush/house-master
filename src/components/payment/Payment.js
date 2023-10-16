import React from "react";
import { Helmet } from "react-helmet-async";
import PaymentForm from "./payment-form/PaymentForm";
import ContactDetails from "../shared/contact-details/ContactDetails";

function Payment({ phone, email, facebook, twitter, instagram, dribbble }) {
  return (
    <>
      <Helmet>
        <title>PAYMENT | Housemaster</title>
        <link rel="canonical" href="https://www.housemaster.in/payment" />

        <meta property="og:title" content="PAYMENT | Housemaster" />
      </Helmet>

      <section className="payment_form_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <PaymentForm />
            </div>
            <div className="col-lg-6">
              <ContactDetails
                phone={phone}
                email={email}
                facebook={facebook}
                twitter={twitter}
                instagram={instagram}
                dribbble={dribbble}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
