import React from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./DampSeepageInspection.css";
import leakageAndSeepage from "../../../images/leakage-and-seepage-inspection-Image.png";
import healthIssuesImg from "../../../images/health-issues-img.jpg";

// import serviceIcon from "../../../images/service-icon.png";

function DampSeepageInspection() {
  return (
    <>
      <Helmet>
        <title>Water Leakage/ Seepage Detection | Housemaster | Gurugram</title>
        <meta
          name="description"
          content="Seepage source detection, water leakage solution, dampness soultion, roof leakage solution and identification of real source"
        />
        <link
          rel="canonical"
          href="https://www.housemaster.in/services/damp-seepage-inspection"
        />

        <meta
          property="og:title"
          content="Water Leakage/ Seepage Detection | Housemaster | Gurugram"
        />
        <meta
          property="og:description"
          content="Seepage source detection, water leakage solution, dampness soultion, roof leakage solution and identification of real source"
        />
      </Helmet>

      <section className="inner_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner_banner_content text-center">
                <h2>What is leakage and seepage inspection</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="damp_seepage_inspection_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={leakageAndSeepage}
                alt="About Us"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                    Worried for Moisture, Damp or Seepage & Leakage
                  </h3>
                </div>
                <h5>The Invisible Silent Killer : Unsuspecting Criminal</h5>
                <p>
                  Moisture has long been important to building designers since
                  it is the single most important agent of building
                  deterioration. Moisture control is fundamental to the proper
                  functioning of any building. Controlling moisture is important
                  to protect occupants from adverse health effects and to
                  protect the building, its mechanical systems and its contents
                  from physical or chemical damage. Yet, moisture problems are
                  so common in buildings, many people consider them inevitable.
                </p>
                {/* <h4>SIGNS OF A POTENTIAL LEAK</h4>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="causes_common_symptoms_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Causes</h4>
              <div className="site_list2">
                <ul>
                  <li>Poor Ventilation</li>
                  <li>Condensation</li>
                  <li>Rising Damp</li>
                  <li>Penetrating Damp</li>
                  <li>Weathering Actions</li>
                  <li>Plumbing Failure</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h4>Common Symptoms</h4>
              <div className="site_list2">
                <ul>
                  <li>Visual Leak</li>
                  <li>Popping/ Peeling of Paint</li>
                  <li>Peeling of Wallpaper</li>
                  <li>Termite Presence</li>
                  <li>Woodwork Deterioration</li>
                  <li>Darker Patch in Wall/ Ceiling</li>
                  <li>Mold Growth</li>
                  <li>Rust</li>
                  <li>Collapsed False Ceiling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="services_sec water_leakage_services">
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
      </section> */}

      <section className="video_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title_box text-center">
                <h3 className="main_heading">Potential future issues</h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about_content">
                <h4>In the external surface</h4>
                <div className="site_list">
                  <ul>
                    <li>
                      Major architectural deterioration like cracks, pooping of
                      plaster, parts of plaster, etc
                    </li>
                    <li>
                      Deterioration of structural elements like concrete and
                      steel
                    </li>
                    <li>Reduction in the self-life of the building</li>
                  </ul>
                </div>

                <h4>Inside your homes/ unit</h4>
                <div className="site_list">
                  <ul>
                    <li>
                      Bleaching and flaking of paint due to formation of colored
                      patches
                    </li>
                    <li>Popping and removal of plaster</li>
                    <li>
                      Termite infestation leading to deterioration of wood-works
                    </li>
                    <li>Molds growth</li>
                    <li>Deterioration of Structural stability</li>
                    <li>Efflorescence of walls, tiles, stones</li>
                    <li>Deterioration of carpet & furniture</li>
                    <li>Higher level humid air content</li>
                    <li>Sick Building Syndrome – Health Hazards</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <iframe
                width="100%"
                height="418"
                src="https://www.youtube.com/embed/bnBm-vvvm-c"
                title="Seepage source detection/ Seepage Inspection/ Water Leakage Detection/ Home Inspection/ HOUSEMASTER" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Mechanical problems</h3>
              <p>
                When humidity settles on toilet tanks, water pipes, HVAC
                systems, and other mechanical objects, it can slowly cause rust
                or fungus and lead to failed parts & mechanisms. Failed parts
                can prevent proper operation & may mean costly fixes.
              </p>
            </div>

            <div className="col-lg-6">
              <h3>Electronic problems</h3>
              <p>
                Electronics are especially susceptible to damage by
                condensation. Moisture can corrode contacts inside and lower
                insulation resistance, which may cause short circuits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="health_issues_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>Health issues</h3>
              <p>
                Bacteria and molds require water to grow and multiply. Bacteria
                are a source for the transmission of diseases, therefore putting
                occupants' health at risk by water intrusion into the indoor
                environment Common health hazards includes:
              </p>
              <div className="site_list">
                <ul>
                  <li>Upper respiratory (nasal and throat) symptoms</li>
                  <li>Asthma symptoms in sensitized persons with asthma</li>
                  <li>Cough</li>
                  <li>Wheeze</li>
                  <li>Allergies</li>
                  <li>Skin Diseases</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src={healthIssuesImg}
                alt="Health issues"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="more_content_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>We present a One Stop Solution</h4>
              <p>
                It is highly important to find the cause and resolve the main
                sources of moisture / damp / seepage / leakage before embarking
                on a programme of treatment, repair and prevention.
              </p>
              <h4>
                Moisture Intrusion Assessment through Thermal Imaging Technology
              </h4>
              <div className="site_list">
                <ul>
                  <li>
                    Moisture intrusion may be identified through basic visual
                    inspection if it has led to obvious defects, such as
                    staining or mold growth. But by the time visible evidence
                    has presented itself, however, significant damage may have
                    already been done.
                  </li>
                  <li>
                    Detecting moisture intrusion problems is an application for
                    thermal imaging technology.
                  </li>
                  <li>
                    In many cases, moisture or water intrusion may have been
                    developing for a while before obvious signs become apparent.
                  </li>
                  <li>
                    By employing thermal imaging technology, we can locate
                    moisture / damp / seepage issues before they become large
                    problems and lead to serious damage, as well as gather
                    details in cases where moisture intrusion has already become
                    obvious.
                  </li>
                </ul>
              </div>
              <h4>Scope of Work</h4>
              <div className="site_list">
                <ul>
                  <li>
                    Moisture mapping assessment through inspection and thermal
                    imaging technology.
                  </li>
                  <li>Inspection of the related Plumbing Systems / Shafts.</li>
                  <li>
                    Identifying the reasons & sources of moisture / damp /
                    seepage / leakage
                  </li>
                  <li>Solution recommendations (mostly non - destructive)</li>
                </ul>
              </div>

              <h4>
                Direct Relevant Experience – All kinds of Existing / New
                Properties inspected
              </h4>
              <div className="site_list">
                <ul>
                  <li>
                    Damp / Seepage assessment of Residential units / Offices /
                    Bungalows.
                  </li>
                  <li>
                    Damp / Seepage assessment of basements in buildings with
                    multiple units.
                  </li>
                  <li>
                    Damp / Seepage assessment of roofs of buildings (residential
                    / commercial).
                  </li>
                  <li>
                    Damp / Seepage assessment of a premium office of one the
                    largest business groups in India.
                  </li>
                  <li>
                    Damp / Seepage assessment of untraceable leak in a banquet
                    hall - water dripping into lower floors.
                  </li>
                  <li>
                    Damp / Seepage assessment of a premium office complex and of
                    a premier shopping mall
                  </li>
                </ul>
              </div>
              <h4>Our Objective – Customer Satisfaction</h4>
              <div className="site_list">
                <ul>
                  <li>Long term solution</li>
                  <li>Low cost of repair</li>
                  <li>Least possible destruction</li>
                  <li>Resulting in Long & Healthy Life of your Dream Homes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="services_sec">
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
                    Leaks can be expensive, but they get even more costly if
                    your leak detection specialist destroys your property to
                    locate the source. That’s why we detect without destruction.
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
                    You get an accurate, upfront quote before we start any work.
                    All quotes are based on your specific situation, your
                    property, and our expert recommendations. Nothing more,
                    nothing less.
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
                    Our highly-trained professionals are among the most
                    experienced and seasoned technicians in the industry. Simply
                    put, you cannot find a more qualified team anywhere else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default DampSeepageInspection;
