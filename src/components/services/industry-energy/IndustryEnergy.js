import React from "react";
import { Helmet } from "react-helmet-async";
import ElectricalInspectionImg from "../../../images/ElectricalInspectionImg.jpg";
import FireSafetyImg from "../../../images/Fire-Safety-img.jpg";
import CivilPlumbingImg from "../../../images/CivilPlumbingImg.jpg";
import "./IndustryEnergy.css";
import { useState, useEffect } from "react";
import { getSeo } from "../seoservices/seo";
function IndustryEnergy() {
  const [seo, setSeo] = useState({})
  const [loading, setLoading] = useState(false)
  const currentUrl = window.location.href
  const urlarr = currentUrl.split('/')
  const path = urlarr[urlarr.length-1]
  const handleFetchSeo  = async() => {
    setLoading(true)
    const response = await getSeo(path)
    setSeo(response)
    setLoading(false)
  }
  useEffect(() => {
    handleFetchSeo()
  },[])
  return (
    <>
      {/* <Helmet>
        <title>Industry Energy</title>
        <link
          rel="canonical"
          href="https://www.housemaster.in/services/industry-energy"
        />

        <meta property="og:title" content="Industry Energy" />
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
                src={ElectricalInspectionImg}
                alt="About Us"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">Electrical Inspection</h3>
                </div>
                <p>
                  electrical inspection on the present condition of the
                  electrical systemcomprising of Power / UPS socket, electrical
                  switchboards, D.B accessories, etc.
                </p>
                <div className="site_list">
                  <ul>
                    <li>
                      Condition of wirings (findings include faulty / loosely
                      connected / old /under gauge wire which may result in electrical leakages and short circuits)</li>
                    <li>Earthing Systeminspection.</li>
                    <li>Three phase Load Distribution</li>
                    <li>
                      Inspection of the three-phase meter /sub meter (For
                      ensuring that there is no fault at the meter)
                    </li>
                    <li>Electrical systemThermal Imaging Inspection.</li>
                  </ul>
                </div>
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
                  <h3 className="main_heading">
                    Electrical + Fire Safety Inspection
                  </h3>
                </div>
                <div className="site_list">
                  <ul>
                    <li>Full electrical as in TypeA</li>
                    <li>
                      Does the factory have an emergency plan in case of fire or
                      other
                    </li>
                    <li>
                      emergency? It should cover evacuation routes, assembly
                      areas,
                    </li>
                    <li>
                      fire extinguishers and first aid locations, telephone
                      numbers for
                    </li>
                    <li>fire brigade and hospital, etc.</li>
                    <li>
                      Inspection and checks of wet riser,down comer,hose reel,
                      automaticsprinklers system,yard hydrant,U.Gtank with draw
                      connections, terracetank connection, flammable Liquids or
                      gas location in the building
                    </li>
                    <li>
                      Fire pump working condition and minimum 2 pumps are
                      required.
                    </li>
                    <li>
                      early warning system condition and manual operated
                      electrical fire alarm system
                    </li>
                    <li>emergency lights, auto D.Gset connections</li>
                    <li>
                      hose boxeswith delivery house and branch, pipe refuge
                      area, gate valve condition, pressure gauge, hose reel
                      length, pipeline connection and its condition, fir exit
                      plan, fire exitinguser condition
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={FireSafetyImg}
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
            <div className="col-lg-12">
              <div className="site_title_box">
                <h3 className="main_heading">
                  Electrical + Fire Safety + Civil & Plumbing Inspection
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4>Plumbing and Moisture Intrusion</h4>
              <div className="site_list">
                <ul>
                  <li>
                    Inspection Hot and cold water supply pipe line leakage
                    testing
                  </li>
                  <li>Drain testing for the required area</li>
                  <li>Civil defect testing for the required area</li>
                  <li>Bathroomaccessories fittingand installationtesting</li>
                  <li>Drain endoscopy</li>
                  <li>
                    Flooring and wall finishing of the water utility area
                    testing ∙ Repair recommendation preparation
                  </li>
                  <li>Plumbing design study and review</li>
                  <li>Drain pipes hydrostatictesting, if required</li>
                  <li>House thermal scanning</li>
                  <li>Infraredthermal scanning of seepage effectedwalls</li>
                  <li>
                    Moisture measurement of all seepage affectedwalls and area
                  </li>
                  <li>Pipe line scan if required</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <h4>Civil inspection</h4>
              <div className="site_list">
                <ul>
                  <li>Wall cracks</li>
                  <li>Slab cracks</li>
                  <li>Flooring condition</li>
                  <li>Door and door frame condition</li>
                  <li>Structural overview and column beam condition</li>
                  <li>Basement inspection</li>
                  <li>Tankarea condition</li>
                  <li>Front and main drainage system condition </li>
                  <li>Building thermal scanning</li>
                  <li>Stair area inspection</li>
                  <li>
                    Steel structure condition and thickness check about rusting
                    issue
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="interior_and_exterior_points">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site_title_box">
                <h3 className="main_heading">Inspection Benefits</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h4>Electrical system inspection benefits</h4>
              <div className="site_list">
                <ul>
                  <li>Reduced Energy Expenses</li>
                  <li>identify Problems</li>
                  <li>Increased Employee Comfort</li>
                  <li>Personalized Recommendations</li>
                  <li>Show Environmental Concern</li>
                  <li>Increased Property Value</li>
                  <li>Longer Equipment Lifespan</li>
                  <li>
                    Reduce over budget and expenses on the electrical systems
                  </li>
                  <li>It helps you to lower energy bills.</li>
                  <li>
                    It enables you to increase the comfort of those in the
                    facility.
                  </li>
                  <li>
                    It helps you to increase the life span of the equipment in
                    your facility.
                  </li>
                  <li>
                    It discovers any unaccounted consumption that may exist at
                    the facility
                  </li>
                  <li>
                    profitability through optimization of energy expenditure
                  </li>
                  <li>
                    productivity through optimization of equipment and processes
                  </li>
                  <li>
                    performance, thanks to the rationalization of energy use.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <h4>Fir safety benefits</h4>
              <div className="site_list">
                <ul>
                  <li>Identifying all significant fire hazards.</li>
                  <li>Evaluation of the existing control measures.</li>
                  <li>Determining the additional control measures required.</li>
                  <li>
                    Evaluation of the current fire detection and firefighting
                    facilities.
                  </li>
                  <li>Testing of all fire safety equipment and precautions.</li>
                  <li>
                    Training and instruction to all occupants of premises about
                    fire safety.
                  </li>
                  <li>
                    The fire safety audit in India is done by experts in this
                    field. They have years of experience, and hence, you will
                    get the right recommendations about it.
                  </li>
                  <li>
                    The audit report will have complete details about everything
                    you need to do for your company’s safety.
                  </li>
                  <li>
                    The audit report is very simple and can be understood by
                    anyone. You don’t need any expert knowledge to understand
                    the audit report and follow what is recommended.
                  </li>
                  <li>
                    As you keep following the recommendations given by the fire
                    safety team, you will find it to be very helpful for you and
                    your employees.
                  </li>
                  <li>
                    They provide you the records which are mandatory according
                    to the fire and safety law in India.
                  </li>
                  <li>
                    When you stay safe, then you will be able to put your
                    business ahead of the competitors in the present market.
                  </li>
                  <li>
                    The audit will help you to check the existing equipment,
                    service the equipment, its components, and also the expected
                    recommendations will be told to you.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Civil_plumbing_sec">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-lg-6">
                <h4>Civil and plumbing inspection benefits</h4>
                <div className="site_list">
                  <ul>
                    <li>To save human life and buildings</li>
                    <li>To understand the condition of building</li>
                    <li>To find critical areas to repair immediately</li>
                    <li>To comply with statutory requirements</li>
                    <li>
                      To enhance life cycle of building by suggesting preventive
                      and corrective measures like repairs and retrofitting
                    </li>
                    <li>Issue of seepage and leakages will be solved .</li>
                    <li>Reduction in maintenance cost by every year</li>
                    <li>
                      The standard of every repair will be provided which will
                      increase the repair life
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  src={CivilPlumbingImg}
                  alt="Civil Plumbing"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="electrical_safety_inspection_sec">
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
      </section> */}

      {/* <section className="plumbing_inspection_sec">
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
      </section> */}
    </>
  );
}

export default IndustryEnergy;
