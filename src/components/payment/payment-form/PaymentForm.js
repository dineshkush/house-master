import React from "react";
import "./PaymentForm.css";

function PaymentForm() {
  return (
    <>
      <div className="payment_form">
        <h3 className="mb-3">Pay Now</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input type="email" className="form-control" id="email" required />
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
              <option selected disabled>
                Select Type
              </option>
              <option value="advance">Advance</option>
              <option value="balance-or-complete-payment">
                Balance or Complete Payment
              </option>
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
    </>
  );
}

export default PaymentForm;
