import React from "react";
import { Helmet } from "react-helmet-async";
import "./ElectricalSafety.css";
// import homeAbout from "../../../images/home-about.png";
import ProtectionAgainst from "../../../images/protection-against-img.png";
import ElectricShock from "../../../images/electric-shock-img.png";
import ElectronicAppliance from "../../../images/electronic-appliance-img.png";
import { useState, useEffect } from "react";
import { getSeo } from "../seoservices/seo";

function ElectricalSafety() {
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
          <title>Electrical inspection of building , Electric fault detection</title>
          <link rel="canonical" href="https://www.housemaster.in/services/electrical-safety" />

          <meta property="og:title" content="Electrical inspection of building , Electric fault detection" />
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
                <h1>Electrical Safety</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_safety_welcome">
        <div className="container">
          <div className="row">
            <div className="col-ld-12">
              <div className="welcome_content text-center">
                <h2>Electrical Safety Audit / Inspection Services</h2>
                <p>
                  An electrical inspection examines the state of the electrical
                  wiring throughout your property, and checks if an installation
                  meets safety standards. Once the inspection is completed, you
                  are issued an Electrical Installation Condition Report (EICR).
                  This outlines whether your installation is satisfactory, or
                  whether any issues have been found.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_service_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-4">
              <h2>Why is Electrical Inspection Important?</h2>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={ProtectionAgainst} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                    Protection against possible surges
                  </h3>
                </div>
                <p>
                  There are many areas where electrical surges occur, especially
                  during storms that can not only destroy your appliances, but
                  also cause short circuits throughout your home. When the
                  inspection is being done, the inspector will check for
                  different points in the wiring that can cause this type of
                  mishap.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-md-1">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">Electric Shock</h3>
                </div>
                <p>
                  There have been several instances where an electrical short
                  circuit has been the cause of a fire breaking out in a house.
                  There are a variety of loose wires in the meter or in the
                  wiring itself that cause these short circuits. During the
                  inspection, the inspector will easily detect these faults and
                  ask you to fix them.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-md-2">
              <img src={ElectricShock} alt="About Us" className="img-fluid" />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={ElectronicAppliance} alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">Electronic appliance</h3>
                </div>
                <p>
                  Suppose you touched an electronic device and immediately felt
                  a surge of electricity in your body. Furthermore, the body
                  current in electronic appliances can easily inhibit their
                  performance and can render them non-operational. An electrical
                  inspector can catch these wiring errors and rectify them at
                  the earliest convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_safety">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                    What is Included in Electrical Safety Inspection?
                  </h3>
                </div>
                <div className="site_list">
                  <ul>
                    <li>
                      Identify electrical wiring and components that may have
                      degraded over time.
                    </li>
                    <li>Reveal if any electrical circuits are overloaded.</li>
                    <li>Reveal if any lack of earthing.</li>
                    <li>
                      Identify any defective wiring or other mistakes made by
                      non-certified electricians.
                    </li>
                    <li>
                      Spot oversized fuses or breakers that may cause an
                      electrical fire hazard.
                    </li>
                    <li>Find any potential electric shock risks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="electrical_problems_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                  Common Symptoms of Home Electrical Problems – Warning Signals
                  </h3>
                </div>
                <div className="site_list">
                  <ul>
                    <li>electrical inspection on the present condition of the electrical system comprising of Power / UPS socket, electrical switchboards, D.B accessories, etc.</li>
                    <li>Condition of wirings (findings include faulty / loosely connected / old /under gauge wire which may</li>
                    <li>result in electrical leakages and short circuits)</li>
                    <li>Earthing System inspection.</li>
                    <li>Three phase Load Distribution</li>
                    <li>Inspection of the three-phase meter /sub meter (For ensuring that there is no fault at the meter)</li>
                    <li>Electrical system Thermal Imaging Inspection.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inspection_benefits_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about_content">
                <div className="site_title_box">
                  <h3 className="main_heading">
                  Electrical system inspection benefits
                  </h3>
                </div>
                <div className="site_list">
                  <ul>
                    <li>Reduced Energy Expenses</li>
                    <li>identify Problems</li>
                    <li>Increased Employee Comfort</li>
                    <li>Personalized Recommendations</li>
                    <li>Show Environmental Concern</li>
                    <li>Increased Property Value</li>
                    <li>Longer Equipment Lifespan</li>
                    <li>Reduce over budget and expenses on the electrical systems</li>
                    <li>It helps you to lower energy bills.</li>
                    <li>It enables you to increase the comfort of those in the facility.</li>
                    <li>It helps you to increase the life span of the equipment in your facility.</li>
                    <li>It discovers any unaccounted consumption that may exist at the facility</li>
                    <li>profitability through optimization of energy expenditure</li>
                    <li>productivity through optimization of equipment and processes performance, thanks to the rationalization of energy use.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ElectricalSafety;
