import React from "react";
// import CountUp from "react-countup";
import { Helmet } from "react-helmet-async";
import "./Home.css";
import banner_image from "../../images/banner-img.png";
import homeAbout from "../../images/home-about.png";
import buildingBack from "../../images/building-back.png";
import inspectionCoverage from "../../images/inspection-coverage-image.png";
import homeInspaction from "../../images/Home-Inspection-Image.png";
import Counter from "../shared/counter/Counter";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TestimonialSlider from "../shared/testimonials-slider/TestimonialSlider";
// import React from "react";

function Home() {
  return (
    <>
        <Helmet>
          <title>Home Inspection by Experts - Housemaster Home inspection india</title>
          <meta
            name="description"
            content="Housemaster offers a complete range of building and full home inspection services, leakage & seepage source detection. Whether you are thinking of buying a new one or simply planning renovations, it is important to know its actual condition in order to reduce the risk of surprises after moving in. home inspection india"
          />
          <link rel="canonical" href="https://www.housemaster.in/" />

          <meta property="og:title" content="Home Inspection by Experts - Housemaster Home inspection india" />
          <meta
            property="og:description"
            content='Housemaster offers a complete range of building and full home inspection services, leakage & seepage source detection. Whether you are thinking of buying a new one or simply planning renovations, it is important to know its actual condition in order to reduce the risk of surprises after moving in. home inspection india'
          />
        </Helmet>

      <section className="home_banner">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img src={banner_image} className="d-block w-100" alt="First slide label" /> */}
              <div className="carousel-caption d-none d-md-block">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner_content">
                        <h3>
                          Find Your Dream <br /> House By Us
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <Link
                          className="btn btn-effect-1 site_btn"
                          to="/book-inspection"
                          tabIndex="0"
                        >
                          Make An Enquiry
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <img
                        src={banner_image}
                        alt="House"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/a199c4b7d902da0b8202c096c5b13f2bba3b320a.jpg" className="d-block w-100" alt="Second slide label" /> */}
              <div className="carousel-caption d-none d-md-block">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner_content">
                        <h3>
                          Find Your Dream <br /> House By Us
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <Link
                          className="btn btn-effect-1 site_btn"
                          to="/book-inspection"
                          tabIndex="0"
                        >
                          Make An Enquiry
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <img
                        src={banner_image}
                        alt="House"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/a199c4b7d902da0b8202c096c5b13f2bba3b320a.jpg" className="d-block w-100" alt="Third slide label" /> */}
              <div className="carousel-caption d-none d-md-block">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="banner_content">
                        <h3>
                          Find Your Dream <br /> House By Us
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <Link
                          className="btn btn-effect-1 site_btn"
                          to="/book-inspection"
                          tabIndex="0"
                        >
                          Make An Enquiry
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <img
                        src={banner_image}
                        alt="House"
                        className="img-fluid"
                      />
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
            <div className="col-lg-4">
              <div className="counter_item text-center">
                <Counter number={105} title="Area" countSign="+" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter_item text-center">
                <Counter number={5175} title="Inspection" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter_item text-center">
                <Counter number={468} title="Success Inspection" />
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

                <Link className="btn site_btn" to="/about-us" tabIndex="0">
                  Read More
                </Link>
                <Link className="btn site_btn" to="/" tabIndex="0">
                  Teams
                </Link>
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
                          Buying a new home means purchasing every problem
                          associated with it. In many cases, these seemingly
                          insignificant problems may accumulate into more
                          significant issues and hefty costs. Home inspection is
                          a type of protective net that keeps you from sinking
                          into a bad investment. Any issues spotted during a
                          home inspection—which the seller didn’t disclose
                          earlier—can put ....
                        </p>

                        <Link className="btn site_btn" to="/" tabIndex="0">
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={banner_image}
                          alt="House"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>

                {/* tab 2 */}
                <Tab eventKey="waterLeakage" title="Water Leakage">
                  <div className="service_content">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="site_title_box">
                          <h6 className="sub_title">Water Leakage</h6>
                          <h3 className="main_heading">
                            Water Leakage and Seepage Detection
                          </h3>
                        </div>
                        <p>
                          For many home or business owners, their property is
                          one of their most valuable investments. However, a
                          simple plumbing leak can cause serious damage to your
                          property—especially if it goes unnoticed for awhile.
                          Don’t let this happen to your investment.
                        </p>

                        <Link className="btn site_btn" to="/" tabIndex="0">
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={banner_image}
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
                          An electrical inspection examines the state of the
                          electrical wiring throughout your property, and checks
                          if an installation meets safety standards. Once the
                          inspection is completed, you are issued an Electrical
                          Installation Condition Report (EICR). This outlines
                          whether your installation is satisfactory, or whether
                          any issues have been found.
                        </p>

                        <Link className="btn site_btn" to="/" tabIndex="0">
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={banner_image}
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
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Labore repudiandae fugit dolore accusamus.
                          Veritatis ab natus magni pariatur dolor maiores
                          laborum est. Ut dolor enim velit illo corrupti.
                          Consectetur dolor iste eaque. Incidunt, similique!
                        </p>

                        <Link className="btn site_btn" to="/" tabIndex="0">
                          Read More
                        </Link>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src={banner_image}
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

      {/* <section className="services_sec">
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
            <div className="col-lg-3">
              <div className="service_item">
                <div className="service_icon">
                  <img src={serviceIcon} alt="Service Icon" />
                </div>
                <div className="service_info">
                  <h3>
                    Home <br />
                    Inspaction
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
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
                  <h3>
                    Water <br />
                    Leakage
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
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
                  <h3>
                    Electrical Safety <br />
                    Inspection
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
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
                  <h3>
                    Industry energy <br />
                    and safety
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <Link className="text_btn" to="/">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="cta-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: `url(${buildingBack})` }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>
                Looking to Buy a New Property or <br />
                Sell an Existing One?
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="btn-box text-end">
                <a href="/" className="btn site_btn">
                  Rent Properties
                </a>
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
            <div className="col-lg-4">
              <div className="inspection_coverage_item text-end">
                <h4>Home Quality Check</h4>
                <p>
                  Construction quality inspection and testing which includes
                  inspection of walls, ceiling, flooring balcony etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-end">
                <h4>Safety Check</h4>
                <p>
                  safety inspection includes inspection balcony safety ,
                  radiation test, entry exit check etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-end">
                <h4>Interior Quality Check</h4>
                <p>
                  Interior quality inspection and testing which includes
                  inspection of wooden work , door-door frames, windows,
                  furniture, wooden flooring, termites etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-end">
                <h4>Electric System Check</h4>
                <p>
                  Electrical system comprising of Power / UPS socket, electrical
                  switchboards, D.B accessories, findings include faulty /
                  loosely connected / old /under gauge wire, etc.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="inspection_coverage_image">
                <img
                  src={inspectionCoverage}
                  alt="About Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="inspection_coverage_item text-start">
                <h4>Brand Check</h4>
                <p>
                  Brand check of various fitting like W/C, plumbing fittings,
                  electric fittings, kitchen fitting, locks etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-start">
                <h4>Dimension Check</h4>
                <p>
                  Electrical Dimension check of rooms, tile work, wooden
                  flooring, carpet area, door height , railing height etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-start">
                <h4>Leakage & Seepage Check</h4>
                <p>
                  Full house infrared thermal scanning for hidden seepage ,
                  supply pipe line will be tested for leakage , moisture
                  measurement of all the units etc.
                </p>
              </div>

              <div className="inspection_coverage_item text-start">
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
            <div className="col-lg-6">
              <img src={homeInspaction} alt="House" className="img-fluid" />
            </div>
            <div className="col-lg-6">
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
