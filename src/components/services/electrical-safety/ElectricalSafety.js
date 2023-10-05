import React from "react";
import { Helmet } from "react-helmet-async";
import "./ElectricalSafety.css";
import homeAbout from "../../../images/home-about.png";

function ElectricalSafety() {
  return (
    <>
        <Helmet>
          <title>Electrical inspection of building , Electric fault detection</title>
          <link rel="canonical" href="https://www.housemaster.in/services/electrical-safety" />

          <meta property="og:title" content="Electrical inspection of building , Electric fault detection" />
        </Helmet>

      <section className="inner_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_content text-center">
                <h1>Electrical Safety</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_safety_welcome">
        <div className="container">
          <div className="row">
            <div className="col-ld-12">
              <div className="welcome_content text-center">
                <h2>Electrical Safety Audit / Inspection Services</h2>
                <p>
                  An electrical inspection examines the state of the electrical
                  wiring throughout your property, and checks if an installation
                  meets safety standards. Once the inspection is completed, you
                  are issued an Electrical Installation Condition Report (EICR).
                  This outlines whether your installation is satisfactory, or
                  whether any issues have been found.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_service_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-4">
              <h2>Why is Electrical Inspection Important?</h2>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={homeAbout} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                    Protection against possible surges
                  </h3>
                </div>
                <p>
                  There are many areas where electrical surges occur, especially
                  during storms that can not only destroy your appliances, but
                  also cause short circuits throughout your home. When the
                  inspection is being done, the inspector will check for
                  different points in the wiring that can cause this type of
                  mishap.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">Electric Shock</h3>
                </div>
                <p>
                  There have been several instances where an electrical short
                  circuit has been the cause of a fire breaking out in a house.
                  There are a variety of loose wires in the meter or in the
                  wiring itself that cause these short circuits. During the
                  inspection, the inspector will easily detect these faults and
                  ask you to fix them.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={homeAbout} alt="About Us" className="img-fluid" />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={homeAbout} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">Electronic appliance</h3>
                </div>
                <p>
                  Suppose you touched an electronic device and immediately felt
                  a surge of electricity in your body. Furthermore, the body
                  current in electronic appliances can easily inhibit their
                  performance and can render them non-operational. An electrical
                  inspector can catch these wiring errors and rectify them at
                  the earliest convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_safety">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                    What is Included in Electrical Safety Inspection?
                  </h3>
                </div>
                <div className="site_list">
                  <ul>
                    <li>
                      Identify electrical wiring and components that may have
                      degraded over time.
                    </li>
                    <li>Reveal if any electrical circuits are overloaded.</li>
                    <li>Reveal if any lack of earthing.</li>
                    <li>
                      Identify any defective wiring or other mistakes made by
                      non-certified electricians.
                    </li>
                    <li>
                      Spot oversized fuses or breakers that may cause an
                      electrical fire hazard.
                    </li>
                    <li>Find any potential electric shock risks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ElectricalSafety;
