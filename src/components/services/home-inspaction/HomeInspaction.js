import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./HomeInspaction.css";
import homeInspactionMain from "../../../images/homeInspactionMain.png";
import homeInspactionSecond from "../../../images/homeInspactionSecond.png";
import homeInspection from "../../../images/HMI-module-Image.jpg";
import electricalSafetyInspection from "../../../images/electrical-safety-inspection.png";
import plumbingAndMoisture from "../../../images/seepage-banner-img.png";
import thermalCamera from "../../../images/thermal-camera-img.png";
import tdsMeter from "../../../images/tds-meter.png";
import { useState, useEffect } from "react";
import { getSeo } from "../seoservices/seo";
function HomeInspaction() {
  const [seo, setSeo] = useState({})
  const [loading, setLoading] = useState(false)
  const currentUrl = window.location.href
  const urlarr = currentUrl.split('/')
  const path = urlarr[urlarr.length - 1]
  const handleFetchSeo = async () => {
    setLoading(true)
    const response = await getSeo(path)
    setSeo(response)
    setLoading(false)
  }
  useEffect(() => {
    handleFetchSeo()
  }, [])
  return (
    <>
      {/* <Helmet>
        <title>Home Inspection | Housemaster | Gurugram</title>
        <meta
          name="description"
          content="Housemaster home inspection provides wide range of house related services like home inspection, property documents verification, commercial inspection etc. In india its very difficult to get a perfect house from property seller. ut Buying a new home and if there is any problem in the house means pu"
        />
        <link
          rel="canonical"
          href="https://www.housemaster.in/services/home-inspaction"
        />

        <meta
          property="og:title"
          content="Home Inspection | Housemaster | Gurugram"
        />
        <meta
          property="og:description"
          content="Housemaster home inspection provides wide range of house related services like home inspection, property documents verification, commercial inspection etc. In india its very difficult to get a perfect house from property seller. ut Buying a new home and if there is any problem in the house means pu"
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
            <div className="col-lg-6 order-2 order-md-1">
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
            <div className="col-lg-6 order-1 order-md-2">
              <img
                src={homeInspactionSecond}
                alt="About Us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="homeInspaction_btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="site_title_box">
                <h3 className="main_heading">Home Inspection Includes</h3>
              </div>
              <div class="btn-group btn_section" role="group" aria-label="Basic example">
                <a href="#InteriorAndExterior" type="button" class="btn site_btn">Interior And Exterior</a>
                <a href="#Plumbing" type="button" class="btn site_btn">Plumbing Testing</a>
                <a href="#Electrical" type="button" class="btn site_btn">Electrical Testing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="interior_and_exterior_sec" id="InteriorAndExterior">
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
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <img src={homeInspection} alt="Home Inspection" className="img-fluid" />
            </div>
          </div>

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

      <section className="electrical_safety_inspection_sec" id="Electrical">
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
                src={electricalSafetyInspection}
                alt="Electrical Safety Inspection"
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

      <section className="plumbing_inspection_sec" id="Plumbing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3>Plumbing and Moisture Intrusion Inspection-</h3>
              <div className="site_list">
                <ul>
                  <li>Thermal imaging technology is used to assess moisture levels</li>
                  <li>Infrared/ thermal check of all wet areas – bath rooms, kitchens, balconies, shaft etc.</li>
                  <li>Water pressure testing of pipelines to inspect the leakage and blockage.</li>
                  <li>Manhole and drain pipe junction Inspection.</li>
                  <li>Inspection of the related Plumbing Systems / Shafts</li>
                  <li>Identification of the reasons & sources of moisture / damp / seepage / leakage</li>
                  <li>Scanning of the walls & ceiling with Thermal Imaging Technology for termite detection.</li>
                  <li>G.I/CPVC Pipe line location tracing.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src={plumbingAndMoisture}
                alt="Plumbing and Moisture"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="inspection_includes_sec">
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
      </section> */}

      <section className="services_sec">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-12">
              <div className="site_title_box text-center">
                <h3 className="main_heading">
                  Home Inspection Tools And Instruments
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <h3>Infrared Thermal Camera</h3>
              <div className="site_list">
                <ul>
                  <li>Moisture Meter</li>
                  <li>Pipe Thickness Gauge</li>
                  <li>Radiation Meter</li>
                  <li>Automatic Pressure Pump</li>
                  <li>Hydraulic Pressure Pump</li>
                  <li>Pipe Line Scanner</li>
                  <li>Connection Pipes</li>
                  <li>Floor Joint Gauge</li>
                  <li>Tile Hollowness Tester</li>
                  <li>Floor Slope And Gradient Tester</li>
                  <li>Drain Plugs</li>
                  <li>Endoscopy Borescope Camera</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tools-and-instruments-img">
                <img
                  src={thermalCamera}
                  alt="About Us"
                  className="img-fluid"
                />
                <img
                  src={tdsMeter}
                  alt="About Us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <h3>TDS Meter</h3>
              <div className="site_list">
                <ul>
                  <li>PH Meter</li>
                  <li>Screw Driver, Wrench ETC</li>
                  <li>Multimeter</li>
                  <li>Electric Outlet Tester</li>
                  <li>Air Quality Tester</li>
                  <li>Microwave Leakage Detector</li>
                  <li>Sound Level Teater</li>
                  <li>Water Pressure Tester</li>
                  <li>Wire Camera</li>
                  <li>Tapping ROD</li>
                  <li>Vibration Meter</li>
                  <li>Depth Scale</li>
                  <li>Slope Scale</li>
                  <li>Lesser Measuring Device</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Thermal Infrared Camera</h3>
                  <p>
                    Infrared photography can help in locating the hidden water
                    leaks, seepage in wall, excessive moisture in wall or in
                    furniture, working of A.C , etc.
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Air Quality Tester</h3>
                  <p>
                    This device is used to check the air quality in your house
                    which includes testing of air pollution, carbonmono oxide ,
                    sulpher detection, oxygen inside the house. etc
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Moisture meter</h3>
                  <p>
                    This device is used to detect the moiture in wall in
                    furniture items, doors, windows etc. If the moisture in
                    furniture is more than 12% it will be harmfull for the life
                    of the wood.
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Microwave Leakage Detector</h3>
                  <p>
                    If you have a microwave in your house than its very
                    important to check the microwave leakage from you appliance
                    and this is used to detect the leakage .this leakage may
                    couse cancer.
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Electric Outlet Tester</h3>
                  <p>
                    Outlet tester is used to check or inspect the electric
                    switches power supply, earthing wire, working conditions or
                    electric board etc.​​
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Sound level Tester</h3>
                  <p>
                    This device is used to test the sound level coming from
                    outside , from A.C and from any other appliance.
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Multimeter</h3>
                  <p>
                    It is used to check the electrical connection power switches
                    , main power box, inverter condition etc
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="service_item">
                <div className="service_info">
                  <h3>Water Pressure Tester</h3>
                  <p>
                    The water pressure gauge is used to check the proper water
                    pressure in tabs and in other water outlets.
                  </p>
                  <Link className="text_btn" to="/book-inspection">
                    Find A Home <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default HomeInspaction;
