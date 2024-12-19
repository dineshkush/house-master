import React, { useState } from "react";
import "./HomeInspection.css";
import getHealthReport from "../../../images/get-health-report.png";
import buildingBack from "../../../images/building-back.png";
import MainLogo from "../../../images/main-logo.jpg";
import Counter from "../../shared/counter/Counter";
import { Link } from "react-router-dom";

const HomeInspection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = JSON.stringify([
      [formData.name, formData.phone, formData.city],
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
        "https://v1.nocodeapi.com/pankaj3434/google_sheets/epIjAmVlSxdjuxjI?tabId=HomeInspectionForm",
        requestOptions
      );
      const result = await response.text();
      console.log(result);

      alert("Form submitted successfully!");
      // Reset the form after submission
      setFormData({ name: "", phone: "", city: "" });
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
      console.log("Error:", error);
    }
  };
  return (
    <>
      <header className="main_header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="logo">
                <img src={MainLogo} alt="House Master" />
              </div>
            </div>
            <div className="col-6">
              <div className="text-end">
                <a className="site_btn m-0" href="tel:+919896442289">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="banner_area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <img src={getHealthReport} alt="" className="img-fluid" />
            </div>
            <div className="col-md-4 col-12">
              <div className="banner_form">
                <h3>Book your inspection</h3>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      class="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    >
                      <option selected>Select City</option>
                      <option value="Gurugram">Gurugram</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="site_btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter_area">
        <div className="container">
          <div className="row">
            <div className="col-4 col-lg-4">
              <div className="counter_item text-center">
                <Counter number={16243} title="Happy customers" countSign="+" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="counter_item text-center">
                <Counter number={17123} title="Inspections" countSign="+" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="counter_item text-center">
                <Counter number={99} title="Success Rate (%)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 text-center mb-4">
              <h3>Why Choose Our Home Inspection Services?</h3>
            </div>
            <div className="col-md-3 col-12 choose_item">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Detailed Assessments</h5>
                <p>From top to bottom , we inspect every critical area.</p>
              </div>
            </div>
            <div className="col-md-3 col-12 choose_item">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Early Problem Detection</h5>
                <p>Save on costly repairs by identifying issues early.</p>
              </div>
            </div>
            <div className="col-md-3 col-12 choose_item">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Expert Guidance</h5>
                <p>
                  Receive actionable recommendations for repairs and
                  improvements.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Certified Professionals</h5>
                <p>
                  Inspections conducted by experienced and certified experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h3>Service package</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12 plan_space">
              <div className="plan_item rounded">
                <div className="plan_head">
                  <h5>Basic</h5>
                </div>
                <div className="plan_body">
                  <ul>
                    <li>
                      Comprehensive inspection of structural elements (walls,
                      ceilings, floors).
                    </li>
                    <li>wooden & UPVC units (doors, windows, etc)</li>
                    <li>
                      Evaluation of plumbing systems (pipes, fixtures, water
                      heaters).
                    </li>
                    <li>
                      Inspection of HVAC systems (heating, ventilation, air
                      conditioning).
                    </li>
                    <li>
                      Examination of roofing and exterior components (roof,
                      gutters, siding).
                    </li>
                    <li>
                      Detailed inspection report with findings and
                      recommendations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 plan_space">
              <div className="plan_item rounded">
                <div className="plan_head">
                  <h5>Advance</h5>
                </div>
                <div className="plan_body">
                  <ul>
                    <li>Including basic package</li>
                    <li>
                      Assessment of interior finishes (paint, flooring,
                      cabinetry).
                    </li>
                    <li>IR thermal scanning for hidden seepage issues</li>
                    <li>Mold and mildew inspection</li>
                    <li>Active pest inspection</li>
                    <li>Inspection of appliances (kitchen, laund)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="plan_item rounded">
                <div className="plan_head">
                  <h5>Premium</h5>
                </div>
                <div className="plan_body">
                  <ul>
                    <li>Including basic package and advance package</li>
                    <li>carpet area verification</li>
                    <li>
                      inventory brand check ( W/C, plumbing fittings, fans,
                      lights) pipe line leakage testing and location
                      identification
                    </li>
                    <li>post inspection visit for repair verification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 col-12">
              <div className="inspection_video">
                <iframe
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/QneoOvLc2kE"
                  title="Home Inspection checklist : Ensure a Safe &amp; Secure Home"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <h3>Who Benefits from Our Services?</h3>
                <ul>
                  <li>
                    <strong>Homebuyers:</strong> Avoid unexpected costs and buy
                    with confidence.
                  </li>
                  <li>
                    <strong>Sellers:</strong> Maximize your property's value by
                    resolving issues upfront.
                  </li>
                  <li>
                    <strong>Homeowners:</strong> Maintain your home’s safety,
                    comfort, and value.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${buildingBack})` }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>
                IIT Roorkee Alumni Initiative: Delivering Unmatched Home
                Inspection Expertise for Safer Living
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="btn-box text-end">
                <Link to="/book-inspection" className="btn site_btn">
                  Book Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>When Should You Schedule Property Inspections?</h3>
              <ol>
                <li>
                  <strong>Before Buying a New Property</strong>
                  <p>
                    Pre-Purchase Inspection: Ensure your prospective property is
                    in good condition before finalizing the deal. A thorough
                    inspection uncovers hidden issues, helping you make a
                    well-informed decision.
                  </p>
                </li>
                <li>
                  <strong>When Purchasing a Resale Property</strong>
                  <p>
                    Resale Property Inspection: Older properties often conceal
                    issues like structural wear, plumbing problems, or outdated
                    electrical systems. A professional inspection safeguards
                    your investment by identifying these concerns early.
                  </p>
                </li>
                <li>
                  <strong>Before Renovating Your Property</strong>
                  <p>
                    Pre-Renovation Inspection: Prioritize your renovation
                    efforts by identifying potential problem areas. This helps
                    you focus on safety, compliance, and long-term value during
                    the renovation process.
                  </p>
                </li>
                <li>
                  <strong>When Renting Out a Property</strong>
                  <p>
                    Landlord Inspection: Protect your asset and ensure tenant
                    satisfaction by addressing maintenance and repair needs
                    before leasing the property.
                  </p>
                </li>
                <li>
                  <strong>Before Moving Into a Rental Property</strong>
                  <p>
                    Tenant Inspection: Verify that your new rental property
                    meets safety and quality standards. An inspection also
                    provides documentation of the property’s condition, avoiding
                    disputes over security deposits.
                  </p>
                </li>
                <li>
                  <strong>During Construction at Critical Stages</strong>
                  <p>
                    Construction Phase Inspection: Regular inspections during
                    key stages of construction ensure compliance with building
                    codes and quality standards. This prevents costly rework and
                    guarantees your vision is achieved.
                  </p>
                </li>
                <li>
                  <strong>To Address Dampness Issues</strong>
                  <p>
                    Moisture and Dampness Assessment: Persistent dampness can
                    lead to mold growth and structural damage. An inspection
                    identifies the source of moisture and recommends solutions
                    to protect your property.
                  </p>
                </li>
                <li>
                  <strong>To Verify Post-Repair Work</strong>
                  <p>
                    Follow-Up Inspection: After completing repairs or corrective
                    work, a reinspection confirms that all issues have been
                    properly resolved, giving you peace of mind and confidence
                    in the property’s condition.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <p>
                Contact Us : <a href="tel:+919896442289">+91 989 644 2289</a>
              </p>
            </div>
            <div className="col-md-6 col-12 text-end footer_email">
              <p>
                Mail Us :{" "}
                <a href="mailto:info@housemaster.in">info@housemaster.in</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeInspection;
