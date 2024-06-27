import React from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css";
import testimonialsBack from "../../../images/testimonials-background.jpg";
import adamJoseph from "../../../images/adam-joseph.jpg";
import review1 from "../../../images/reviews/review1.jpeg";
import review2 from "../../../images/reviews/review2.jpeg";
import review3 from "../../../images/reviews/review3.jpeg";
import review4 from "../../../images/reviews/review4.jpeg";
import review5 from "../../../images/reviews/review5.jpeg";
import review6 from "../../../images/reviews/review6.jpeg";
import review7 from "../../../images/reviews/review7.jpeg";
import review8 from "../../../images/reviews/review8.jpeg";
import review9 from "../../../images/reviews/review9.jpeg";
import review10 from "../../../images/reviews/review10.jpeg";
import review11 from "../../../images/reviews/review11.jpeg";

function TestimonialSlider() {
  const testimonialsSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: '0',
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section
      className="testimonial_section"
      style={{ backgroundImage: `url(${testimonialsBack})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site_title_box text-center">
              <h6 className="sub_title">Our Testimonial</h6>
              <h3 className="main_heading">Clients Feedback</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="testimonials_slider">
              <Slider {...testimonialsSlider}>
                <div className="testimonial_item">
                  <img src={review1} alt="review1" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review2} alt="review2" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review3} alt="review3" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review4} alt="review4" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review5} alt="review5" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review6} alt="review6" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review7} alt="review7" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review8} alt="review8" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review9} alt="review9" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review10} alt="review10" className="img-fluid" />
                </div>
                <div className="testimonial_item">
                  <img src={review11} alt="review11" className="img-fluid" />
                </div>

                {/* <div className="testimonial_item">
                  <div className="testimoni_info">
                    <p>
                        <i className="fa-solid fa-quote-left"></i>
                      Precious ipsum dolor sit amet consectetur adipisicing
                      elit, sed dos mod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad min veniam, quis nostrud Precious
                      ips um dolor sit amet, consecte
                    </p>
                    <div className="testimoni_info_inner">
                      <div className="testimoni_img">
                        <img
                          src={adamJoseph}
                          alt="Adam Joseph"
                          className="img-fluid"
                        />
                      </div>
                      <div className="testimoni_name_designation">
                        <h5>Kelian Anderson</h5>
                        <label>Selling Agents</label>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
