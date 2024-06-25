import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.css";
import banner1 from "../../images/homepage-banner1.png";
import homeAbout from "../../images/inspaction-about-img.png";
import homeInspactionService from "../../images/home-inspaction-image.jpg";
import waterLeakageService from "../../images/water-leakage-service.jpg";
import electricalSafetyInspection from "../../images/electrical-safety-inspection-service.jpg";
import buildingBack from "../../images/building-back.png";
import inspectionCoverage from "../../images/inspection-coverage-image.png";
import homeInspaction from "../../images/Home-Inspection-pic.png";
import Counter from "../shared/counter/Counter";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TestimonialSlider from "../shared/testimonials-slider/TestimonialSlider";
import startupIndia from "../../images/startupindia-logo.webp";
import SeepageBannerImage from "../../images/seepage-banner-img.png";
import ElectricalInspectionBanner from "../../images/electrical-inspection-banner.png";
import EnergyAndSafetyImg from "../../images/EnergyAndSafetyImg.jpg";
import { getSeo } from "../services/seoservices/seo";
import { useState, useEffect } from "react";
function Home() {
  const [seo, setSeo] = useState({})
  const [loading, setLoading] = useState(false)
  const currentUrl = window.location.href
  const urlarr = currentUrl.split('/')
  const path = urlarr[urlarr.length-1]
  const handleFetchSeo  = async() => {
    setLoading(true)
    const response = await getSeo('home')
    setSeo(response)
    setLoading(false)
  }
  useEffect(() => {
    handleFetchSeo()
  },[])
  return (
    <>
      {/* <Helmet>
        <title>
          Home Inspection by Experts - Housemaster Home inspection india
        </title>
        <meta
          name="description"
          content="Housemaster offers a complete range of building and full home inspection services, leakage & seepage source detection. Whether you are thinking of buying a new one or simply planning renovations, it is important to know its actual condition in order to reduce the risk of surprises after moving in. home inspection india"
        />
        <link rel="canonical" href="https://www.housemaster.in/" />

        <meta
          property="og:title"
          content="Home Inspection by Experts - Housemaster Home inspection india"
        />
        <meta
          property="og:description"
          content="Housemaster offers a complete range of building and full home inspection services, leakage & seepage source detection. Whether you are thinking of buying a new one or simply planning renovations, it is important to know its actual condition in order to reduce the risk of surprises after moving in. home inspection india"
        />
      </Helmet> */}
      <Helmet>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description} />
        <meta name="keywords" content={seo?.keywords} />
        <meta property="og:title" content={seo?.open_graph?.title} />
        <meta
          property="og:description"
          content={seo?.open_graph?.description}
        />
        <meta name="twitter:title" content={seo?.twitter?.title} />
        <meta name="twitter:description" content={seo?.twitter?.description} />
        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content={seo?.robots} />
        {/* <meta property="og:image" content={workSpace?.images[0]?.image} /> */}
        {/* <meta property="og:image:alt" content={workSpace?.images[0]?.alt} /> */}
        {/* <meta property="twitter:image" content={workSpace?.images[0]?.image} /> */}
        <meta
          property="twitter:image:alt"
          // content={workSpace?.images[0]?.alt}
        /> 
        <script type="application/ld+json">{seo?.script}</script>
       </Helmet> 

      <section className="home_banner">
        <div className="recognizedby_img">
          <h4>
            Recognized by <img src={startupIndia} alt="Startup India" />
          </h4>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-7 col-lg-5">
                      <div className="banner_content">
                        <h3>Perfection's Just a Check Away</h3>
                        <p className="mobilehide">
                        The most comprehensive assessment of properties in India - a Real Estate Evaluation - identifies concerns prior to any financial commitment. Assurance of safeguarding both your funds and peace of mind.
                        </p>
                        <p className="desktophide">Professional home assessment, exposing potential issues & building health</p>
                        <Link
                          className="btn btn-effect-1 site_btn"
                          to="/book-inspection"
                          tabIndex="0"
                        >
                          Make An Enquiry
                        </Link>
                      </div>
                    </div>
                    <div className="col-5 col-lg-7">
                      <img
                        src={banner1}
                        alt="House"
                        className="img-fluid banner_one_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-7 col-lg-6">
                      <div className="banner_content">
                        <h3>Seepage/ leakage/ dampness solutions</h3>
                        <div className="site_list mobilehide">
                          <ul>
                            <li>Pipe line leakage location detection.</li>
                            <li>wall seepage source detection.</li>
                            <li>ceiling seepage source detection.</li>
                            <li>Seepage due to terrace area or tank area.</li>
                            <li>basement seepage source detection.</li>
                            <li>
                              water drippings issue source identification.
                            </li>
                            <li>
                              seepage or leakage due to building structure
                              defect etc.
                            </li>
                          </ul>
                        </div>
                        <p className="desktophide">Non-destructive detection of seepage/dampness sources, using advanced technology for precise identification</p>
                        <Link
                          className="btn btn-effect-1 site_btn"
                          to="/services/damp-seepage-inspection"
                          tabIndex="0"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="col-5 col-lg-6">
                      <img
                        src={SeepageBannerImage}
                        alt="House"
                        className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-7 col-lg-6">
                      <div className="banner_content">
                        <h3>
                        Electrical inspection and testing
                        </h3>
                        <p className="mobilehide">
                        Electrical Safety Audit is performed by enquiry, inspection, testing and verification of electrical components and systems.
                        </p>
                        <p className="desktophide">Thorough electrical assessment ensuring safety, identifying issues, and recommending solutions for a secure and efficient system</p>
                        <Link
                          className="btn btn-effect-1 site_btn"
                          to="/services/electrical-safety"
                          tabIndex="0"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="col-5 col-lg-6">
                      <img
                        src={ElectricalInspectionBanner}
                        alt="House"
                        className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-angle-left"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-angle-right"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="counter_area">
        <div className="container">
          <div className="row">
            <div className="col-4 col-lg-4">
              <div className="counter_item text-center">
                <Counter number={1035000} title="Inspected Area (sqft)" countSign="+" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="counter_item text-center">
                <Counter number={6789} title="Inspections" />
              </div>
            </div>
            <div className="col-4 col-lg-4">
              <div className="counter_item text-center">
                <Counter number={99} title="Success Rate (%)"  countSign="+" />
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
                    Indias first and best home inspection startup founded by alumni of IIT Roorkee
                  </h3>
                </div>
                <p>
                Housemaster is a home inspection company founded by alumni of IIT Roorkee. It  provides a wide range of house related services like home inspection, property leakage & seepage inspection, electrical inspection, energy audit , commercial inspection etc. In India its very difficult to get a perfect house from a property seller. But Buying a new home and if there is any problem in the  house means purchasing  problems associated with it. In many cases, these seemingly insignificant problems may accumulate into more significant issues and hefty costs. Which may cause unwanted expenditure and stress in a healthy mind.
                </p>
                <p>
                Home inspection is a type of protective net that keeps you from sinking into a bad investment. issues always  spotted during a home inspection—which the seller didn’t disclose earlier.
                </p>

                <Link className="btn site_btn" to="/about" tabIndex="0">
                  Read More
                </Link>
                {/* <Link className="btn site_btn" to="/about" tabIndex="0">
                  Teams
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title_box text-center">
                <h6 className="sub_title">Our Services</h6>
                <h3 className="main_heading">Our Main Focus</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Tabs
                defaultActiveKey="homeInspaction"
                id="uncontrolled-tab-example"
                className="services_tab justify-content-center"
                justify
              >
                {/* tab 1 */}
                <Tab eventKey="homeInspaction" title="Home Inspaction">
                  <div className="service_content">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="site_title_box">
                          <h6 className="sub_title">Home Inspaction</h6>
                          <h3 className="main_heading">
                            A Home Is a Large Investment. Don't Go in Blind.
                          </h3>
                        </div>
                        <p>
                        Inspecting  a property is an important step when you're buying or selling a house. It involves thoroughly looking at the structure, systems, and overall condition of the home. The main goal is to find any possible issues or problems that could affect the safety, how well things work, or the value of the property.
                        </p>

                        <Link
                          className="btn site_btn"
                          to="/services/home-inspaction"
                          tabIndex="0"
                        >
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={homeInspactionService}
                          alt="House"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* tab 2 */}
                <Tab eventKey="waterLeakage" title="Water Leakage Inspaction">
                  <div className="service_content">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="site_title_box">
                          <h6 className="sub_title">Seepage/Leakage inspection</h6>
                          <h3 className="main_heading">
                            Water Leakage and Seepage Detection
                          </h3>
                        </div>
                        <p>
                        Leakage and seepage inspection is a critical process to identify and address water-related issues in a structure.Source detection involves identifying the origin of leaks, whether from plumbing, roofs, or external elements.
                        </p>

                        <Link
                          className="btn site_btn"
                          to="/services/damp-seepage-inspection"
                          tabIndex="0"
                        >
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={waterLeakageService}
                          alt="House"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* tab 3 */}
                <Tab
                  eventKey="electricalSafety"
                  title="Electrical Safety Inspection"
                >
                  <div className="service_content">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="site_title_box">
                          <h6 className="sub_title">Electrical Safety</h6>
                          <h3 className="main_heading">
                            Electrical Safety Audit / Inspection Services
                          </h3>
                        </div>
                        <p>
                        An electrical assessment assesses the condition of the electrical wiring in your property, verifying if the setup complies with safety regulations. After the assessment, you receive an Electrical Installation Condition Report (EICR), detailing whether your setup is deemed satisfactory or if any concerns have been identified
                        </p>

                        <Link
                          className="btn site_btn"
                          to="/services/electrical-safety"
                          tabIndex="0"
                        >
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={electricalSafetyInspection}
                          alt="House"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* tab 4 */}
                <Tab
                  eventKey="industryEnergy"
                  title="Industry Energy And Safety"
                >
                  <div className="service_content">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="site_title_box">
                          <h6 className="sub_title">Industry Energy</h6>
                          <h3 className="main_heading">
                            Industry Energy And Safety
                          </h3>
                        </div>
                        <p>The industry of energy and safety is a multifaceted sector focused on ensuring secure and efficient energy production and consumption while prioritizing safety protocols. This field encompasses a wide range of activities, from developing sustainable energy sources to implementing safety measures in industrial processes</p>

                        <Link
                          className="btn site_btn"
                          to="/services/industry-energy"
                          tabIndex="0"
                        >
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={EnergyAndSafetyImg}
                          alt="House"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
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
              Inspecting Homes, Protecting Dreams – Your Trusted Partner in Property Assurance
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

      <section className="inspection_coverage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title_box text-center">
                <h6 className="sub_title">Inspection coverage</h6>
                <h3 className="main_heading">Full home inspection coverage</h3>
              </div>
            </div>
          </div>

          <div className="row align-items-center mt-lg-4">
            <div className="col-12 col-lg-4">
              <div className="inspection_coverage_item text-end">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Home Quality Check</h4>
                <p>
                  Construction quality inspection and testing which includes
                  inspection of walls, ceiling, flooring balcony etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-end">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Safety Check</h4>
                <p>
                  safety inspection includes inspection balcony safety ,
                  radiation test, entry exit check etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-end">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Interior Quality Check</h4>
                <p>
                  Interior quality inspection and testing which includes
                  inspection of wooden work , door-door frames, windows,
                  furniture, wooden flooring, termites etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-end">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Electric System Check</h4>
                <p>
                  Electrical system comprising of Power / UPS socket, electrical
                  switchboards, D.B accessories, findings include faulty /
                  loosely connected / old /under gauge wire, etc.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mobilehide">
              <div className="inspection_coverage_image">
                <img
                  src={inspectionCoverage}
                  alt="About Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="inspection_coverage_item text-start">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Brand Check</h4>
                <p>
                  Brand check of various fitting like W/C, plumbing fittings,
                  electric fittings, kitchen fitting, locks etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-start">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Dimension Check</h4>
                <p>
                  Electrical Dimension check of rooms, tile work, wooden
                  flooring, carpet area, door height , railing height etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-start">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Leakage & Seepage Check</h4>
                <p>
                  Full house infrared thermal scanning for hidden seepage ,
                  supply pipe line will be tested for leakage , moisture
                  measurement of all the units etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-start">
                <i class="fa-regular fa-square-check desktophide"></i>
                <h4>Electric System Check</h4>
                <p>
                  Electrical system comprising of Power / UPS socket, electrical
                  switchboards, D.B accessories, findings include faulty /
                  loosely connected / old /under gauge wire, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_inspection_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mobilehide">
              <img src={homeInspaction} alt="House" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="site_title_box">
                <h6 className="sub_title">Home Inspection</h6>
                <h3 className="main_heading">
                  When is the best time to have your home inspection
                </h3>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="site_list">
                <ul>
                  <li>Before possession of new house or apartment</li>
                  <li>Before/After of renovating your home </li>
                  <li>Before purchasing a re-sale house</li>
                  <li>Quality check for on-going home construction</li>
                  <li>Facing issues of leakage, seepage & dampness</li>
                  <li>Facing structural damage issues etc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
    </>
  );
}

export default Home;
