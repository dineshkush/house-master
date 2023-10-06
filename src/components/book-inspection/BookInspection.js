import React from "react";
import { Helmet } from "react-helmet-async";
import ContactDetails from "../shared/contact-details/ContactDetails";
import BookInspectionForm from "./book-inspection-form/BookInspectionForm";

function BookInspection({ phone, email, facebook, twitter, instagram, dribbble }) {
  return (
    <>
      <Helmet>
        <title>Book Inspection | Housemaster</title>
        <link
          rel="canonical"
          href="https://www.housemaster.in/book-inspection"
        />

        <meta property="og:title" content="Book Inspection | Housemaster" />
      </Helmet>

      <section className="booking_form_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <BookInspectionForm/>
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

export default BookInspection;
