import React from "react";
// import CountUp from "react-countup";
import "./Home.css";
import banner_image from "../../images/banner-img.png";
import Counter from "../shared/counter/Counter";

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
                        <a
                          className="btn btn-effect-1 site_btn"
                          href="/"
                          tabindex="0"
                        >
                          Make An Enquiry
                        </a>
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
                        <a
                          className="btn btn-effect-1 site_btn"
                          href="/"
                          tabindex="0"
                        >
                          Make An Enquiry
                        </a>
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
                        <a
                          className="btn btn-effect-1 site_btn"
                          href="/"
                          tabindex="0"
                        >
                          Make An Enquiry
                        </a>
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
    </>
  );
}

export default Home;
