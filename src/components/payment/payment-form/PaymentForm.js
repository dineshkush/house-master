import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./PaymentForm.css";

function PaymentForm() {
  const [messageSend, setMessageSend] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    paymentType: "",
    amountPerQuotation: "",
  });

  const handleSubmitSheet = async () => {
    const requestBody = JSON.stringify([
      [
        emailData.name,
        emailData.email,
        emailData.paymentType,
        emailData.amountPerQuotation,
      ],
    ]);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: requestBody,
    };

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/pankaj3434/google_sheets/epIjAmVlSxdjuxjI?tabId=PaymentForm",
        requestOptions
      );
      const result = await response.text();
      console.log(result);

      alert("Form submitted successfully!");
      setEmailData({
        name: "",
        email: "",
        paymentType: "",
        amountPerQuotation: "",
      });
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
      console.log("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(emailData.email)) {
      console.error("Invalid email format");
      return;
    }

    setIsSending(true);
    handleSubmitSheet();
    emailjs
      .send(
        "service_jf6shcl",
        "template_265g9fi",
        emailData,
        "mEkdQ2vp13ZtJ5Iib"
      )
      .then(
        (response) => {
          setMessageSend("Email sent successfully");
          window.location.href = "/payment-methods";
        },
        (error) => {
          setMessageError("Email sending failed");
        }
      )

      .finally(() => {
        setIsSending(false);
      });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="payment_form">
        <h3 className="mb-3">Pay Now</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={emailData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={emailData.email}
              onChange={handleChange}
              id="email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="paymentType" className="form-label">
              Payment Type *
            </label>
            <select
              as="select"
              name="paymentType"
              id="paymentType"
              className="form-select"
              value={emailData.paymentType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
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
              name="amountPerQuotation"
              id="amountPerQuotation"
              className="form-control"
              value={emailData.amountPerQuotation}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn site_btn" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>
          <p className="formmessage">
            {messageSend} {messageError}
          </p>
        </form>
      </div>
    </>
  );
}

export default PaymentForm;
