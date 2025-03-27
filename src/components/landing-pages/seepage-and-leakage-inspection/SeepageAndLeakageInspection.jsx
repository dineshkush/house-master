import React, { useState } from "react";
import "./SeepageAndLeakageInspection.css";
import MainLogo from "../../../images/main-logo.jpg";
import seepageAndLeakage from "../../../images/Leakages-and-Seepage.png";
import buildingBack from "../../../images/building-back.png";
import Counter from "../../shared/counter/Counter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SeepageAndLeakageInspection = () => {
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
    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = now.toLocaleTimeString();

    const requestBody = JSON.stringify([
      [
        formattedDate,
        formattedTime,
        formData.name,
        formData.phone,
        formData.city,
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
        "https://v1.nocodeapi.com/pankaj3434/google_sheets/epIjAmVlSxdjuxjI?tabId=SeepageAndLeakageForm",
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
      <Helmet>
        <title>Water Leakage Detection: Non-Destructive & Thermal Imaging Methods</title>
        <meta
          name="description"
          content="Advance water leakage detection service for ceiling, roof & pipeline issues. Reliable solutions to prevent water damage and seepage. Contact us today"
        />
        <meta name="keywords" content="Leakage location detection, Ceiling leakage detection, Roof leakage detection, Pipeline leakage detection, Water leakage detection, Seepage source detection, Accurate leakage detection, Reliable leakage solutions, Seepage experts, Water leakage solutions, Prevent water damage, Comprehensive leakage detection, Advanced water detection, Affordable water solutions, Ceiling leakage solutions, Roof leakage solutions, Pipeline leakage solutions, Seepage detection services, Trusted leakage experts" />
        <link rel="canonical" href="https://housemaster.in/seepage-and-leakage-inspection" />

        <meta
          property="og:title"
          content="Water Leakage Detection: Non-Destructive & Thermal Imaging Methods"
        />
        <meta
          property="og:description"
          content="Advance water leakage detection service for ceiling, roof & pipeline issues. Reliable solutions to prevent water damage and seepage. Contact us today"
        />
      </Helmet>
      <header className="main_header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="logo">
                <img src={MainLogo} alt="House Master" />
              </div>
            </div>
            <div className="col-6">
              <div className="text-end">
                <a className="site_btn" href="tel:+919896442289">
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
              <img src={seepageAndLeakage} alt="" className="img-fluid" />
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
                      required
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
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      class="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
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
              <h3>Why Choose Us for Leakage & Seepage Inspection?</h3>
            </div>
            <div className="col-md-3 col-12 choose_item">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Advanced Detection Technology</h5>
                <p>
                  We use modern tools to identify hidden leaks and seepage
                  sources.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 choose_item">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Comprehensive Analysis</h5>
                <p>
                  From walls to underground piping, we inspect every potential
                  problem area.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 choose_item">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Expert Recommendations</h5>
                <p>
                  Get actionable solutions tailored to your property’s needs.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="text-center border rounded pt-2 px-2">
                <h5>Prevent Long-Term Damage</h5>
                <p>Save on costly repairs by addressing issues early.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5" style={{ backgroundColor: "#f7f8f9" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>What We Offer in Leakage and Seepage Detection Services</h3>
              {/* <p>
                Our Leakage & Seepage Inspection Services cover every aspect of
                water-related damage to provide a comprehensive analysis of your
                property. Here's what we meticulously inspect:
              </p> */}
              <ul>
                <li><strong>Pipeline Leakage Location Detection:</strong> Detects hidden leaks in underground and internal pipelines to prevent water loss and property damage.</li>
                <li><strong>Seepage Source Detection:</strong> Experts locate the exact source of seepage in walls, ceilings, or floors, addressing the root cause with accurate leakage detection.</li>
                <li><strong>Leakage Location Detection:</strong> Identify and diagnose leakage points in plumbing, fittings, or structural elements with reliable leakage solutions.</li>
                <li><strong>Wall Dampness Source Detection:</strong> Analyze damp patches and determine whether the cause is seepage, poor waterproofing, or external water penetration.</li>
                <li><strong>Ceiling or Roof Leakage Detection:</strong> Examine ceilings and roofs for cracks, improper drainage, or sealing issues causing leaks. Provide ceiling and roof leakage solutions.</li>
                <li><strong>Floor Leakage Location Detection:</strong> Identify water accumulation or seepage under tiles or flooring materials that can weaken structural stability.</li>
                <li><strong>Water Leak Location Detection:</strong> Trace the origin of water leaks from pipes, tanks, or external infiltration with advanced water detection techniques.</li>
                <li><strong>Mold Cause and Source Detection:</strong> Detect mold and pinpoint the underlying cause of its growth to prevent recurrence with seepage detection services.</li>
                <li><strong>Seepage Experts:</strong> Trusted for accurate seepage source detection and reliable water leakage solutions.</li>
                <li><strong>Prevent Water Damage:</strong> Provide reliable leakage solutions to prevent costly water damage and protect your property.</li>
                <li><strong>Affordable Water Solutions:</strong> Offer affordable water solutions without compromising on quality or reliability.</li>
                <li><strong>Comprehensive Leakage Detection:</strong> Provide comprehensive leakage detection services, ensuring long-term prevention of water damage.</li>
                <li><strong>Advanced Water Detection:</strong> Use advanced water detection techniques to find and fix leaks before they cause significant damage.</li>
                <li><strong>Ceiling Leakage Solutions:</strong> Provide effective solutions for ceiling leakage, preventing further damage and maintaining structural integrity.</li>
                <li><strong>Roof Leakage Solutions:</strong> Offer roof leakage solutions that address the root cause of the issue and prevent future leaks.</li>
                <li><strong>Pipeline Leakage Solutions:</strong> Provide pipeline leakage solutions to detect and fix leaks in underground and internal pipelines efficiently.</li>
                <li><strong>Seepage Detection Services:</strong> Offer expert seepage detection services to find the source of water intrusion and prevent further damage.</li>
                <li><strong>Trusted Leakage Experts:</strong> Count on our experienced team for accurate and reliable leakage detection and solutions.</li>
              </ul>

            </div>
            <div className="col-md-12">
              <h3>Additional Inspections We Offer</h3>
              <ul>
                <li>
                  <strong>External Water Intrusion Detection:</strong> Evaluate
                  window frames, doors, and exterior walls for gaps or weak
                  points allowing rainwater or groundwater to enter.
                </li>
                <li>
                  <strong>Bathroom and Kitchen Leak Checks:</strong> Examine wet
                  areas for concealed leaks in plumbing and drainage systems.
                </li>
                <li>
                  <strong>Waterproofing Efficiency Assessment:</strong> Inspect
                  the quality and durability of waterproofing in basements,
                  terraces, or other critical areas.
                </li>
                <li>
                  <strong>HVAC Systems Condensation Leak Check:</strong> Detect
                  leaks caused by faulty or poorly maintained air conditioning
                  and ventilation systems.
                </li>
                <li>
                  <strong>Tank and Reservoir Inspections:</strong> Check water
                  tanks or reservoirs for cracks, overflow, and seepage.
                </li>
                <li>
                  <strong>Foundation Leak Inspection:</strong> Analyze
                  foundation walls and underground areas for seepage that could
                  lead to long-term structural issues.
                </li>
              </ul>
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
            <div className="col-md-6 col-12">
              <h4>Why It Matters?</h4>
              <p>
                Water-related issues can silently escalate into serious
                problems. Our inspections ensure:
              </p>
              <ul>
                <li>Early problem detection</li>
                <li>Improved property durability</li>
                <li>Prevention of mold and health hazards</li>
                <li>Cost-effective repair planning</li>
              </ul>
            </div>
            <div className="col-md-6 col-12">
              <h4>Who Should Opt for Our Service?</h4>
              <ul>
                <li>
                  <strong>Homeowners:</strong> Address leaks before they
                  escalate into major problems.
                </li>
                <li>
                  <strong>Buyers:</strong> Ensure the property is free from
                  hidden moisture issues.
                </li>
                <li>
                  <strong>Builders and Contractors:</strong> Verify the quality
                  of construction for waterproofing and sealing.
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-12">
              <h4>The Cost of Ignoring Water Damage</h4>
              <ul>
                <li>Structural weakening</li>
                <li>Mold and mildew growth</li>
                <li>Increased energy bills</li>
                <li>Health hazards due to poor air quality</li>
              </ul>
            </div>

            <div className="col-md-6 col-12">
              <h4>Our Process</h4>
              <ul>
                <li>
                  <strong>Inspection:</strong> Detailed assessment using
                  advanced equipment.
                </li>
                <li>
                  <strong>Source Detection:</strong> Pinpoint exact leakage and
                  seepage points.
                </li>
                <li>
                  <strong>Reporting:</strong> Comprehensive, easy-to-understand
                  report with images.
                </li>
                <li>
                  <strong>Solutions:</strong> Customized recommendations to
                  resolve issues effectively.
                </li>
              </ul>
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

export default SeepageAndLeakageInspection;
