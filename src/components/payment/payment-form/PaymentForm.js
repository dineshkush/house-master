import React from "react";
import ContactDetails from "../../shared/contact-details/ContactDetails";
import "./PaymentForm.css";

function PaymentForm({ phone, email, facebook, twitter, instagram, dribbble }) {
  return (
    <>
      <section className="form_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="payment_form">
                <h3 className="mb-3">Pay Now</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="paymentType" className="form-label">
                      Payment Type *
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      id="paymentType"
                    >
                      <option selected disabled>Select Type</option>
                      <option value="advance">Advance</option>
                      <option value="balance-or-complete-payment">Balance or Complete Payment</option>
                      <option value="pre-visit-payment">Pre-Visit Payment</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amountPerQuotation" className="form-label">
                      Enter Amount as Per Quotation *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="amountPerQuotation"
                      required
                    />
                  </div>
                  <button type="submit" className="btn site_btn">
                    Submit
                  </button>
                </form>
              </div>
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

export default PaymentForm;
