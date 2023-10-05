import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PaymentForm from "./payment-form/PaymentForm";

function Payment({phone, email, facebook, twitter, instagram, dribbble}) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>PAYMENT | Housemaster</title>
          <link rel="canonical" href="https://www.housemaster.in/payment" />

          <meta property="og:title" content="PAYMENT | Housemaster" />
        </Helmet>
      </HelmetProvider>

      <section className="inner_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_content text-center">
                <h1>Payment</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentForm phone={phone} email={email} facebook={facebook} twitter={twitter} instagram={instagram} dribbble={dribbble} />
    </>
  );
}

export default Payment;
