import React from "react";
import { Helmet } from "react-helmet-async";
import PaymentForm from "./payment-form/PaymentForm";

function Payment({ phone, email, facebook, twitter, instagram, dribbble }) {
  return (
    <>
      <Helmet>
        <title>PAYMENT | Housemaster</title>
        <link rel="canonical" href="https://www.housemaster.in/payment" />

        <meta property="og:title" content="PAYMENT | Housemaster" />
      </Helmet>

      <PaymentForm
        phone={phone}
        email={email}
        facebook={facebook}
        twitter={twitter}
        instagram={instagram}
        dribbble={dribbble}
      />
    </>
  );
}

export default Payment;
