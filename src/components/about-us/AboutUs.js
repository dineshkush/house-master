import React from "react";
// import { Link } from "react-router-dom";
import "./AboutUs.css";
import homeAbout from "../../images/home-about.png";

function AboutUs() {
  return (
    <>
      <section className="inner_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_content text-center">
                <h2>About Us</h2>
                <p>
                  We have the knowledge to give you a crystal clear look at your
                  home
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={homeAbout} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h6 className="sub_title">About Us</h6>
                  <h3 className="main_heading">
                    The Leading Real Estate Rental Marketplace
                  </h3>
                </div>
                <p>
                  Housemaster is a home inspection company founded by alumni of
                  IIT Roorkee. It provides wide range of house related services
                  like home inspection, property documents verification,
                  commercial inspection etc. In India its very difficult to get
                  a perfect house from property seller. But Buying a new home
                  and if there is any problem in the house means purchasing
                  problem associated with it. In many cases, these seemingly
                  insignificant problems may accumulate into more significant
                  issues and hefty costs. Which may cause unwanted expenditure
                  and stress in a healthy mind .
                </p>
                <p>
                  Home inspection is a type of protective net that keeps you
                  from sinking into a bad investment. issues always spotted
                  during a home inspection—which the seller didn’t disclose
                  earlier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="more_about_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h6 className="sub_title">About Us</h6>
                  <h3 className="main_heading">Founders of House Master</h3>
                </div>
                <p>
                  Founders of Housemaster home inspections "Pankaj Panchal and
                  Prem Singh" are from IIT Roorkee having post graduation in
                  "Structure Dynamics and Seismic Vulnerability and Risk
                  Assessment". both are also having good experience in building
                  design and construction with different parameters and
                  considerations. They personally inspects some parts of every
                  house like structure design , beam column joints and layouts ,
                  seismic inspection etc.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={homeAbout} alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
