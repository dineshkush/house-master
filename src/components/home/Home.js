import React from "react";
// import CountUp from "react-countup";
import "./Home.css";
import banner_image from "../../images/banner-img.png";
import homeAbout from "../../images/home-about.png";
import serviceIcon from "../../images/service-icon.png";
import Counter from "../shared/counter/Counter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
                          tabindex="0"
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
                          tabindex="0"
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
                          tabindex="0"
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
            <i class="fa-solid fa-angle-left"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <i class="fa-solid fa-angle-right"></i>
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>

                <Link className="btn site_btn" to="/about-us" tabindex="0">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services_sec">
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
                  <Link class="text_btn" to="/">
                    Find A Home <i class="fa-solid fa-arrow-right-long"></i>
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
                  <Link class="text_btn" to="/">
                    Find A Home <i class="fa-solid fa-arrow-right-long"></i>
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
                  <Link class="text_btn" to="/">
                    Find A Home <i class="fa-solid fa-arrow-right-long"></i>
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
                  <Link class="text_btn" to="/">
                    Find A Home <i class="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home_inspection_sec">
        <div className="container">
          <div className="row align-items-center">
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
            <div className="col-lg-6">
              <img src={banner_image} alt="House" className="img-fluid" />
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
            <div className="col-lg-4"></div>
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
    </>
  );
}

export default Home;
