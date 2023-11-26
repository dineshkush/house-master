import React from "react";
import { Helmet } from "react-helmet-async";
import homeInspactionMain from "../../../images/homeInspactionMain.png";
import homeInspactionSecond from "../../../images/homeInspactionSecond.png";

function IndustryEnergy() {
  return (
    <>
      <Helmet>
        <title>Industry Energy</title>
        <link
          rel="canonical"
          href="https://www.housemaster.in/services/industry-energy"
        />

        <meta property="og:title" content="Industry Energy" />
      </Helmet>

      <section className="inner_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_content text-center">
                <h2>Industry Energy</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homeInspaction_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={homeInspactionMain}
                alt="About Us"
                className="img-fluid"
              />
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

      <section className="prepurchase_section">
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
              <img
                src={homeInspactionSecond}
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="interior_and_exterior_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="site_title_box">
                <h3 className="main_heading">Home interior and exterior</h3>
              </div>
              <p>
                A home inspection involves a full examination of both the
                interior and exterior of a home to identify any serious defects
                in the construction quality, structure, foundation, and other
                components. This inspection can help potential buyers make
                informed decisions about purchasing a home and can also help
                homeowners identify and address any potential problems before
                they become major issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="interior_and_exterior_points">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h4>Areas to be Inspected will Include:</h4>
              <div className="site_list two_col_list">
                <ul>
                  <li>Rooms</li>
                  <li>Living</li>
                  <li>Dining</li>
                  <li>Hall Areas</li>
                  <li>Alleys</li>
                  <li>Bathrooms</li>
                  <li>Kitchen</li>
                  <li>Basement</li>
                  <li>Store room</li>
                  <li>Balconies</li>
                  <li>Front yard </li>
                  <li>Backyard</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <h4>Systems & Components Inspection will include:</h4>
              <div className="site_list">
                <ul>
                  <li>
                    <strong>WALLS -</strong> Plaster & Paint, Wall Angle, Wall
                    Edge, Gaps, Moisture Patches, cracks etc.
                  </li>
                  <li>
                    <strong>FLOORS –</strong> Finishing, Cracks, Gaps, Skirts
                    Thickness, Hollowness, Grouting, Leveling etc.
                  </li>
                  <li>
                    <strong>CEILING –</strong> Frame, Paint, Finishing, Chipped
                    Mark, Moisture Patches, Cracks, Gaps etc.
                  </li>
                  <li>
                    <strong>DOORS -</strong> Material, Finishing, Alignment,
                    Gaps, Handle Lock, Hinges, Door Frame etc.
                  </li>
                  <li>
                    <strong>WINDOWS –</strong> Paint, Scratches, Sill, Slope,
                    Lock, Gaps, Operating Panel, Window Frame etc.
                  </li>
                  <li>
                    <strong>BALCONY –</strong> Railing, Parapet Wall, Skirts,
                    Drip Case, Tile Work, Grouting, Slope, Cracks etc.
                  </li>
                  <li>
                    <strong>STAIRS –</strong> Stair Material, Step Size, Boarder
                    Stone, Safety Railing, Lights, Skirts etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_safety_inspection_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="site_title_box">
                <h3 className="main_heading">Electrical Safety Inspection</h3>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={homeInspactionSecond}
                alt="About Us"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h4>A thorough electrical safety inspection includes:</h4>
              <div className="site_list">
                <ul>
                  <li>
                    Checking circuit breakers for proper function to prevent
                    fires.
                  </li>
                  <li>
                    Identifying and addressing electric shock hazards like
                    exposed wires or faulty outlets.
                  </li>
                  <li>
                    Inspecting the electrical panel for damage or improper
                    wiring.
                  </li>
                  <li>
                    Testing smoke detectors for proper installation, power, and
                    function.
                  </li>
                  <li>
                    Confirming that light switches and outlets work correctly
                    and are free from damage.
                  </li>
                  <li>
                    Inspect electrical system, including power sockets,
                    switchboards, and DB accessories.
                  </li>
                  <li>
                    Check wiring for faults, loose connections, or outdated
                    wiring that could cause leaks or short circuits.
                  </li>
                  <li>Evaluate the earthing system.</li>
                  <li>Assess three-phase load distribution.</li>
                  <li>Inspect three-phase meters or submeters for faults.</li>
                  <li>Review electrical and fire safety aspects.</li>
                  <li>
                    Perform thermal imaging inspection (images may be included
                    to enhance understanding).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plumbing_inspection_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h3>Plumbing and Moisture Intrusion Inspection-</h3>
              <div className="site_list">
                <ul>
                  <li>
                    Thermal imaging technology is used to assess moisture levels
                  </li>
                  <li>
                    Infrared/ thermal check of all wet areas – bath rooms,
                    kitchens, balconies, shaft etc.
                  </li>
                  <li>
                    Water pressure testing of pipelines to inspect the leakage
                    and blockage.
                  </li>
                  <li>Manhole and drain pipe junction Inspection.</li>
                  <li>Inspection of the related Plumbing Systems / Shafts</li>
                  <li>
                    Identification of the reasons & sources of moisture / damp /
                    seepage / leakage
                  </li>
                  <li>
                    Scanning of the walls & ceiling with Thermal Imaging
                    Technology for termite detection.
                  </li>
                  <li>G.I/CPVC Pipe line location tracing.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <img
                src={homeInspactionSecond}
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustryEnergy;
