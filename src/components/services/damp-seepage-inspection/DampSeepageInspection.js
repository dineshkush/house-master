import React from "react";
// import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./DampSeepageInspection.css";
import homeAbout from "../../../images/home-about.png";
import serviceIcon from "../../../images/service-icon.png";

function DampSeepageInspection() {
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Water Leakage/ Seepage Detection | Housemaster | Gurugram</title>
          <meta
            name="description"
            content="Seepage source detection, water leakage solution, dampness soultion, roof leakage solution and identification of real source"
          />
          <link rel="canonical" href="https://www.housemaster.in/services/damp-seepage-inspection" />

          <meta property="og:title" content="Water Leakage/ Seepage Detection | Housemaster | Gurugram" />
          <meta
            property="og:description"
            content='Seepage source detection, water leakage solution, dampness soultion, roof leakage solution and identification of real source'
          />
        </Helmet>
      </HelmetProvider>
      
      <section className="inner_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_content text-center">
                <h2>Water Leakage</h2>
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
                    Water Leakage and Seepage Detection
                  </h3>
                </div>
                <p>
                  For many home or business owners, their property is one of
                  their most valuable investments. However, a simple plumbing
                  leak can cause serious damage to your property—especially if
                  it goes unnoticed for awhile. Don’t let this happen to your
                  investment!
                </p>
                <h4>SIGNS OF A POTENTIAL LEAK</h4>
                <p>Here are some of the things to look out for:</p>
                <div className="site_list">
                  <ul>
                    <li>Puddles of water in your bathroom or other rooms</li>
                    <li>Water stains on your walls or ceiling</li>
                    <li>
                      Sounds of trickling water when no water is being used
                    </li>
                    <li>
                      Earthy or musty smell even after cleaning the bathroom
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services_sec water_leakage_services">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Pipe Line Leakage Detection</h3>
                  <p>
                  Water leakages in the buildings due to poor maintenance and building defects could lead to growth of toxic molds that could cause serious health and safety issue. our team can locate the leakage location without any destruction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Seepage Source Detection</h3>
                  <p>
                  Water seepage is when water flows from one place to another via small holes or porous material. This pressure forces water into your home through the tiniest cracks. The instruments we have are very accurate in source identification.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Wall Dampness Source Detection</h3>
                  <p>
                  Damp problems in walls are often only noticed once internal damp symptoms become apparent. Such symptoms include damp patches, black mould growth, hygroscopic salt contamination.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Pipeline Pressure Measurement</h3>
                  <p>
                  High water pressure puts a lot of unnecessary strain on your home's plumbing system. This often leads to loosened joints or pinhole leaks in the pipes. Left unrepaired, leaking pipes are likely to cause mould growth and other serious water damage to your home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">Leakage and seepage inspection includes</h3>
                </div>
                <div className="site_list">
                  <ul>
                    <li>Pipe line leakage location detection.</li>
                    <li>wall seepage source detection.</li>
                    <li>ceiling seepage source detection.</li>
                    <li>Seepage due to terrace area or tank area.</li>
                    <li>basement seepage source detection.</li>
                    <li>water drippings issue source identification.</li>
                    <li>seepage or leakage due to building structure defect etc.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
            <iframe width="100%" height="418" src="https://www.youtube.com/embed/bnBm-vvvm-c" title="Seepage source detection/ Seepage Inspection/ Water Leakage Detection/ Home Inspection/ HOUSEMASTER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                People Choose Us for a Reason. Learn Why
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Non-Invasive Approach</h3>
                  <p>
                  Leaks can be expensive, but they get even more costly if your leak detection specialist destroys your property to locate the source. That’s why we detect without destruction.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Transparent Pricing</h3>
                  <p>
                  You get an accurate, upfront quote before we start any work. All quotes are based on your specific situation, your property, and our expert recommendations. Nothing more, nothing less.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>Peace of Mind</h3>
                  <p>
                  Our highly-trained professionals are among the most experienced and seasoned technicians in the industry. Simply put, you cannot find a more qualified team anywhere else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DampSeepageInspection;
