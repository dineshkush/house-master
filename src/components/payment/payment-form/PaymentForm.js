import React from "react";
import "./PaymentForm.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function PaymentForm() {
  return (
    <>
      <div className="payment_form">
        <h3 className="mb-3">Pay Now</h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            paymentType: "",
            amountPerQuotation: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            paymentType: Yup.string().required("Payment type is required"),
            amountPerQuotation: Yup.string().required("Amount is required"),
          })}
          onSubmit={(values) => {
            console.log(values); // Handle form submission here
          }}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="mb-3">
              <label htmlFor="paymentType" className="form-label">
                Payment Type *
              </label>
              <Field
                as="select"
                name="paymentType"
                id="paymentType"
                className="form-select"
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option value="advance">Advance</option>
                <option value="balance-or-complete-payment">
                  Balance or Complete Payment
                </option>
                <option value="pre-visit-payment">Pre-Visit Payment</option>
              </Field>
              <ErrorMessage
                name="paymentType"
                component="div"
                className="error"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amountPerQuotation" className="form-label">
                Enter Amount as Per Quotation *
              </label>
              <Field
                type="text"
                name="amountPerQuotation"
                id="amountPerQuotation"
                className="form-control"
              />
              <ErrorMessage
                name="amountPerQuotation"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" className="btn site_btn">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default PaymentForm;
