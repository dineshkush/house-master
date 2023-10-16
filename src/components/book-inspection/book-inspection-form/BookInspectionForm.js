import React from "react";
import "./BookInspectionForm.css";

function BookInspectionForm() {
  return (
    <div className="booking_form">
      <h3 className="mb-3">Book Expert Visit</h3>
      <form>
        <div className="row">
          <div className="mb-3 col-lg-12">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3 col-lg-12">
            <label htmlFor="address" className="form-label">
              Address *
            </label>
            <textarea
              className="form-control"
              id="address"
              rows="2"
              required
            ></textarea>
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="city" className="form-label">
              City *
            </label>
            <input type="text" className="form-control" id="city" required />
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="area" className="form-label">
              Area (sq.ft) *
            </label>
            <input type="text" className="form-control" id="area" required />
          </div>
          <div className="mb-3">
            <label htmlFor="paymentType" className="form-label">
              Property Type *
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="paymentType"
            >
              <option selected disabled>
                Select Type
              </option>
              <option value="Residential / Bungalow / Apartment">
                Residential / Bungalow / Apartment
              </option>
              <option value="School / Hospital / Hotels">
                School / Hospital / Hotels
              </option>
              <option value="pre-visit-payment">Commercial</option>
              <option value="pre-visit-payment">Other</option>
            </select>
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="phone" className="form-label">
              Phone *
            </label>
            <input type="tel" className="form-control" id="phone" required />
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Let us know what you need help with...
            </label>
            <textarea className="form-control" id="address" rows="3"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Choose your Service
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="seepageCheckbox"
              />
              <label className="form-check-label" htmlFor="seepageCheckbox">
                Seepage/Leakage Detection
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="electricalCheckbox"
              />
              <label className="form-check-label" htmlFor="electricalCheckbox">
                Electrical Inspection
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="documentCheckbox"
              />
              <label className="form-check-label" htmlFor="documentCheckbox">
                Document Verification
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="pmcCheckbox"
              />
              <label className="form-check-label" htmlFor="pmcCheckbox">
                PMC Consultation
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="vastuCheckbox"
              />
              <label className="form-check-label" htmlFor="vastuCheckbox">
                Vastu
              </label>
            </div>
          </div>
          <button type="submit" className="btn site_btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookInspectionForm;
