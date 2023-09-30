import React from "react";
import { Link } from "react-router-dom";
import "./HomeInspaction.css";
import homeAbout from "../../../images/home-about.png";
import homeInspection from "../../../images/home-inspection-img.webp";
import serviceIcon from "../../../images/service-icon.png";

function HomeInspaction() {
  return (
    <>
      <section className="inner_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_content text-center">
                <h2>Home Inspection</h2>
                <p>
                  We have the knowledge to give you a crystal clear look at your
                  home
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={homeAbout} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                    A Home Is a Large Investment. Don't Go in Blind.
                  </h3>
                </div>
                <p>
                  Buying a new home means purchasing every problem associated
                  with it. In many cases, these seemingly insignificant problems
                  may accumulate into more significant issues and hefty costs.
                  Home inspection is a type of protective net that keeps you
                  from sinking into a bad investment. Any issues spotted during
                  a home inspection—which the seller didn’t disclose earlier—can
                  put you in a better state for bargaining and negotiations.
                </p>
                <p>
                  Whether you are buying or selling a house, we are here to help
                  you identify any potential problems with the property. The
                  typical inspection takes 3-6 hours. Using a range of
                  investigative tools we will inspect your home from top to
                  bottom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">Pre-Purchase Home Inspection</h3>
                </div>
                <p>
                  This is an inspection typically requested by a home buyer as a
                  condition of their offer to purchase. They are looking for
                  information that will help them to determine the home's
                  current condition including what more they might have to
                  invest in the home after the purchase.
                </p>

                <p>
                  Our home inspection is an investigative process whereby the
                  inspector will examine visible, readily accessible aspects of
                  a home's interior and exterior from top to bottom. The goal of
                  the inspection is to uncover and itemize hazards and
                  deficiencies and determine the useful life span, functionality
                  and interactivity of the home's components.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={homeAbout} alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="inspection_includes_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <div className="site_title_box text-center">
                <h3 className="main_heading">Our Inspection Includes</h3>
              </div>

              <img
                src={homeInspection}
                alt="Home Inspection"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title_box text-center">
                <h3 className="main_heading">
                  Home Inspection Tools And Instruments
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Thermal Infrared Camera</h3>
                  <p>
                    Infrared photography can help in locating the hidden water
                    leaks, seepage in wall, excessive moisture in wall or in
                    furniture, working of A.C , etc.
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Air Quality Tester</h3>
                  <p>
                    This device is used to check the air quality in your house
                    which includes testing of air pollution, carbonmono oxide ,
                    sulpher detection, oxygen inside the house. etc
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Moisture meter</h3>
                  <p>
                    This device is used to detect the moiture in wall in
                    furniture items, doors, windows etc. If the moisture in
                    furniture is more than 12% it will be harmfull for the life
                    of the wood.
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Microwave Leakage Detector</h3>
                  <p>
                    If you have a microwave in your house than its very
                    important to check the microwave leakage from you appliance
                    and this is used to detect the leakage .this leakage may
                    couse cancer.
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Electric Outlet Tester</h3>
                  <p>
                    Outlet tester is used to check or inspect the electric
                    switches power supply, earthing wire, working conditions or
                    electric board etc.​​
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Sound level Tester</h3>
                  <p>
                    This device is used to test the sound level coming from
                    outside , from A.C and from any other appliance.
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Multimeter</h3>
                  <p>
                    It is used to check the electrical connection power switches
                    , main power box, inverter condition etc
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Water Pressure Tester</h3>
                  <p>
                    The water pressure gauge is used to check the proper water
                    pressure in tabs and in other water outlets.
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeInspaction;
