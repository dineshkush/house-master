import React, { useState } from "react";
import "./BookInspectionForm.css";
import emailjs from "emailjs-com";

function BookInspectionForm() {

  const [messageSend, setMessageSend] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [emailData, setEmailData] = useState({
    name: "",
    address: "",
    city: "",
    area: "",
    paymentType: "",
    phone: "",
    email: "",
    message: "",
  });

  const [selectedItems, setSelectedItems] = useState([])

  const selectChangeHandler = (e) => {
    const itemName = e.target.name;
    if (e.target.checked) {
      setSelectedItems((prevItems) => [...prevItems, itemName]);
    } else {
      setSelectedItems((prevItems) => prevItems.filter((item) => item !== itemName));
    }
  };

  // useEffect(() => {
  //   setSelectedItems(selectedItems)
  // }, [selectedItems])
  // console.log(selectedItems.join(', '))


  // const bookingFormSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateEmail(emailData.email)) {
  //     setMessageError("Invalid email format");
  //     return;
  //   }
  //   emailData.selectedItems = selectedItems.join(', ');
  //   setIsSending(true);

  //   emailjs
  //     .send(
  //       "service_jf6shcl",
  //       "template_k2o4xw9",
  //       emailData,
  //       "template_5wisxmm"
  //     )
  //     .then(
  //       (response) => {
  //         setMessageSend("Email sent successfully");
  //         window.location.href = "/payment-methods";
  //       },
  //       (error) => {
  //         setMessageError("Email sending failed");
  //       }
  //     )

  //     .finally(() => {
  //       setIsSending(false);
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateEmail(emailData.email)) {
  //     console.error("Invalid email format");
  //     return;
  //   }

  //   setIsSending(true);

  //   emailjs
  //     .send(
  //       "service_jf6shcl",
  //       "template_4lsqsm9",
  //       emailData,
  //       "mEkdQ2vp13ZtJ5Iib"
  //     )
  //     .then(
  //       (response) => {
  //         setMessageSend("Email sent successfully");
  //         // console.log("Email sent successfully", response);
  //         window.location.href = "/payment-methods";
  //       },
  //       (error) => {
  //         setMessageError("Email sending failed");
  //         // console.error("Email sending failed", error);
  //       }
  //     )

  //     .finally(() => {
  //       setIsSending(false); // Email sending completed, change button text back
  //     });
  // };

  const bookingFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(emailData.email)) {
      setMessageError("Invalid email format");
      return;
    }

    if (!emailData.name || !emailData.phone || !emailData.address) {
      setMessageError("Please fill in all required fields.");
      return;
    }

    const updatedEmailData = {
      ...emailData,
      selectedItems: selectedItems.join(", "),
    };

    setIsSending(true);
    setMessageError("");
    setMessageSend("");

    emailjs.init("mEkdQ2vp13ZtJ5Iib");

    emailjs
      .send("service_jf6shcl", "template_4lsqsm9", updatedEmailData)
      .then(
        (response) => {
          setMessageSend("Email sent successfully");
          window.location.href = "/payment-methods";
        },
        (error) => {
          setMessageError("Email sending failed. Please try again.");
          console.error("Email sending failed", error);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };


  const validateEmail = (email) => {
    // Define a simple regex pattern for email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const bookingFormChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div className="booking_form">
      <h3 className="mb-3">Book Expert Visit</h3>
      <form onSubmit={bookingFormSubmit}>
        <div className="row">
          <div className="mb-3 col-lg-12">
            <label htmlFor="name" className="form-label">
              Name *
            </label>
            <input type="text" className="form-control" name="name" id="name"

              value={emailData.name}
              onChange={bookingFormChange}
              required />
          </div>
          <div className="mb-3 col-lg-12">
            <label htmlFor="address" className="form-label">
              Address *
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              rows="2"
              value={emailData.address}
              onChange={bookingFormChange}
              required
            ></textarea>
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="city" className="form-label">
              City *
            </label>
            <input type="text" className="form-control"
              id="city"
              name="city"
              value={emailData.city}
              onChange={bookingFormChange}
              required />
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="area" className="form-label">
              Area (sq.ft) *
            </label>
            <input type="text" className="form-control" id="area"
              value={emailData.area}
              onChange={bookingFormChange}
              name="area"
              required />
          </div>
          <div className="mb-3">
            <label htmlFor="paymentType" className="form-label">
              Property Type *
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="paymentType"
              name="paymentType"
              value={emailData.paymentType}
              onChange={bookingFormChange}
            >
              <option value="" disabled>
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
            <input type="tel" className="form-control" id="phone"
              name="phone"
              value={emailData.phone}
              onChange={bookingFormChange}
              required />
          </div>
          <div className="mb-3 col-lg-6">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input type="email" className="form-control" id="email"
              name="email"
              value={emailData.email}
              onChange={bookingFormChange}
              required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Let us know what you need help with...
            </label>
            <textarea className="form-control" id="message"
              name="message"
              value={emailData.message}
              onChange={bookingFormChange} rows="3"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="service" className="form-label">
              Choose your Service
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="seepageCheckbox"
                name="Seepage Leakage Detection"
                onChange={selectChangeHandler}
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
                name="Electrical Inspection"
                onChange={selectChangeHandler}
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
                name="Document Verification"
                onChange={selectChangeHandler}
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
                name="PMC Consultation"
                onChange={selectChangeHandler}
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
                name="Vastu"
                onChange={selectChangeHandler}
              />
              <label className="form-check-label" htmlFor="vastuCheckbox">
                Vastu
              </label>
            </div>
          </div>
          <button type="submit" className="btn site_btn" disabled={isSending}>
            {isSending ? "Sending..." : "Submit"}
          </button>
          <p className="formmessage">{messageSend} {messageError}</p>
        </div>
      </form>
    </div>
  );
}

export default BookInspectionForm;
