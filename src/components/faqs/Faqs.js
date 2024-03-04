import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Helmet } from "react-helmet-async";
import "./Faqs.css";
import { useState, useEffect } from "react";
import { getSeo } from "../services/seoservices/seo";
function Faqs() {
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
        <title>Frequently Asked Questions (FAQ's) | Housemaster</title>
        <link
          rel="canonical"
          href="https://www.housemaster.in/book-inspection"
        />
        <meta
          property="og:title"
          content="Frequently Asked Questions (FAQ's) | Housemaster"
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
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What is Professional Home Inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    A Home Inspection is a comprehensive, non-invasive, visual
                    assessment of all accessible areas and components within a
                    property. This examination incorporates modern technology
                    and specialized tools while operating standard controls to
                    evaluate the condition of these systems and components. The
                    inspection aims to identify and report any issues within
                    specific systems and components, with the inclusion of
                    relevant pictures for critical observations made by the
                    inspector. The resulting inspection reports are generated
                    using software to provide a comprehensive overview of the
                    property's condition.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What is the Home Inspection Coverage?
                  </Accordion.Header>
                  <Accordion.Body>
                    <h4>Areas of Inspection</h4>
                    <h5>Interior</h5>
                    <div className="site_list">
                      <ul>
                        <li>Bedrooms</li>
                        <li>Living room</li>
                        <li>Dining room</li>
                        <li>Hallways</li>
                        <li>Alleys</li>
                        <li>Bathrooms</li>
                        <li>Kitchens</li>
                        <li>Lofts</li>
                        <li>Balconies</li>
                        <li>Servants' quarters</li>
                        <li>Lobby area</li>
                        <li>Garages</li>
                      </ul>
                    </div>
                    <h5>Exterior</h5>
                    <div className="site_list">
                      <ul>
                        <li>Site</li>
                        <li>Attached structure</li>
                        <li>Stairs</li>
                        <li>Steps</li>
                        <li>Ramps</li>
                        <li>Walkways</li>
                        <li>Railings</li>
                        <li>Handrails</li>
                        <li>Driveways</li>
                      </ul>
                    </div>
                    <h5>Systems and Components Inspected</h5>
                    <div className="site_list">
                      <ul>
                        <li>Ceilings</li>
                        <li>Walls</li>
                        <li>Floors</li>
                        <li>Doors</li>
                        <li>Windows</li>
                        <li>Electrical system</li>
                        <li>Plumbing system and fixtures</li>
                        <li>Cabinets and countertops</li>
                        <li>Applicable installed appliances</li>
                        <li>Ventilation and exhaust systems</li>
                        <li>Water supply</li>
                        <li>Heating and air conditioning system</li>
                      </ul>
                    </div>
                    <h5>Inspection Coverage</h5>
                    <div className="site_list">
                      <ul>
                        <li>Material types</li>
                        <li>Installation and finishing</li>
                        <li>Operations and functionality</li>
                        <li>General safety</li>
                      </ul>
                    </div>
                    <h5>The 3D Inspection of Issues</h5>
                    <div className="site_list">
                      <ul>
                        <li>Detect the issues</li>
                        <li>Describe the outcome</li>
                        <li>Direct rectification options</li>
                      </ul>
                    </div>
                    Each issue is backed by a colored picture of the issue.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Who can avail your services?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our home inspection services are available to homeowners,
                    buyers, sellers, builders, developers, real estate agents,
                    interior designers, architects, government agencies,
                    lenders, insurance companies, and city building departments.
                    We also inspect commercial, retail, school, and office
                    properties.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Does it apply to only new property?
                  </Accordion.Header>
                  <Accordion.Body>
                    Home inspection applies to Ongoing Construction, Newly
                    Completed Properties, Older Properties, Ancient Properties.
                    Residential Apartment Complex, Single Building Apartments,
                    Bungalows, Commercial Properties. All kinds of properties
                    can be inspected. We also inspect commercial, retail school,
                    office properties, etc.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    What are the benefits of a Home Inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Benefits of Home Inspections for Homeowners and Buyers
                    </p>
                    <p>
                      Home inspections provide homeowners and buyers with the
                      following benefits:
                    </p>
                    <div className="site_list">
                      <ul>
                        <li>
                          Peace of mind: Knowing that a qualified professional
                          has inspected your home and identified any potential
                          problems can give you peace of mind about your
                          investment.
                        </li>
                        <li>
                          Early warning signs: Home inspections can reveal
                          problems that you may not be able to see on your own,
                          such as structural damage, faulty wiring, or plumbing
                          leaks. This gives you the opportunity to have these
                          problems repaired before they become more serious and
                          costly.
                        </li>
                        <li>
                          Forecasting potential future expenses: Home
                          inspections can help you to forecast potential future
                          expenses, such as roof replacement or HVAC repairs.
                          This information can be helpful when budgeting for
                          your new home.
                        </li>
                        <li>
                          Uncovering safety issues: Home inspections can uncover
                          safety issues, such as carbon monoxide leaks or
                          electrical hazards. This information can help you to
                          keep your family safe in their new home.
                        </li>
                        <li>
                          Revealing pest problems: Home inspections can reveal
                          pest problems, such as termites or carpenter ants.
                          This information can help you to take steps to control
                          these pests and prevent damage to your home.
                        </li>
                        <li>
                          Negotiating repairs: If the home inspection reveals
                          any problems, you may be able to negotiate with the
                          seller to have them repaired before you on the sale.
                        </li>
                        <li>
                          Relatively inexpensive: Home inspections are a
                          relatively inexpensive way to protect your investment.
                        </li>
                      </ul>
                    </div>

                    <h5>
                      Benefits of Home Inspection to a Real Estate Developer
                    </h5>
                    <p>
                      Home inspectors are the eyes and ears of developers,
                      helping them to ensure the quality of their construction
                      projects. It is impossible for promoters or senior
                      management to continuously monitor every apartment and
                      every aspect of construction. Developers rely on their
                      contractors and shop floor managers to ensure that their
                      dream homes are built cohesively and finished to a high
                      standard.
                    </p>
                    <p>
                      Home inspections provide a third-party audit of the
                      construction and finishing of units on behalf of
                      developers, acting as a quality assurance measure. Home
                      inspections can save developers substantial money and
                      effort by ensuring that contractors are meeting quality
                      standards, even when developers are not on-site.
                    </p>
                    <p>
                      With the enactment of the Real Estate Regulation and
                      Development Act, 2016, home inspections can provide
                      developers with further assurance that the homes they are
                      building meet quality standards. Home inspections can also
                      give developers peace of mind, knowing that their
                      construction projects are being completed correctly.
                      Additionally, home inspections can add to a developer's
                      credibility and professionalism, helping to grow their
                      brand.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How will the inspection help me determine the condition of
                    the home?
                  </Accordion.Header>
                  <Accordion.Body>
                    A home inspection is akin to a comprehensive health checkup
                    for a residence. It involves a thorough examination of every
                    aspect and component within the property, including the
                    materials used, to identify any potential issues, defects,
                    or anomalies that warrant special attention. The resulting
                    report is designed to be self-explanatory, enabling the
                    client to gain a clear understanding of the property's
                    condition. Should any questions or concerns arise, our team
                    is readily available for assistance with just a phone call
                    away.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Why should I have a professional Home Inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Home is one of the biggest investment one make in one’s
                      life time. A large part of our savings goes into buying
                      our dream homes, furnishing it and then paying stamp duty
                      / brokerage, etc
                    </p>
                    <p>
                      All of us wants our dream home to be as we have
                      envisaged……. safe – sound – secured.
                    </p>
                    <p>
                      We should and have the right to know “How Healthy our
                      Homes are”. We need to get a Complete Health Check-up of
                      our dream homes just the way we get a complete checkup of
                      our body.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    How long does an inspection take?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      For a home of approx. 2000 square feet, a team of 5
                      members take approximately 4-5 hours to complete the
                      inspection.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    Do I need to be present during the Inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Ideally, yes. The goal of a home inspection is not just to
                      inspect the property, but also to educate the homeowner or
                      potential buyer about the property's condition. This is
                      better achieved if you are present at the time of the
                      inspection. It is especially important to be present
                      during our inspection. By accompanying the inspector, you
                      will have the opportunity to:
                    </p>
                    <div className="site_list">
                      <ul>
                        <li>
                          See the condition of each key component throughout the
                          house and property first hand, get a better
                          understanding of the home and of the resulting
                          inspection report.
                        </li>
                        <li>
                          Ease any concerns about findings which may seem
                          distressing on paper but are in fact superficial. For
                          example, the inspector might explain that an unsightly
                          column needs only a coat of paint.
                        </li>
                        <li>
                          Have all of your questions and concerns addressed
                          immediately as they arise.
                        </li>
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    How do I prepare for a Home Inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      I have to make an appointment with the home inspector,
                      call him / her over on a particular day for inspection. I
                      should make sure the house / apartment is easily
                      accessible and all areas within the home are accessible,
                      and not locked. As far as possible, the areas should not
                      have furnishings to enable ease of access of each and
                      every system / component of all the areas of the house
                      being inspected. Also all areas must be clean for a smooth
                      and proper inspection to take place.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    Can a house fail a Home Inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      No. A professional home inspection is an examination of
                      the current condition of a house. It is not an appraisal,
                      which determines market value. It is not a municipal
                      inspection, which verifies local code compliance. A home
                      inspector, therefore, will not pass or fail a house, but
                      rather describe its physical condition and indicate what
                      components and systems may need to be kept under
                      observation, or needs repair / replacement.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    What if a Home Inspection reveals problems?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      No house is perfect. If the inspector identifies problems,
                      it doesn’t mean you should or shouldn’t buy the house,
                      only that you will know in advance what to expect. If your
                      budget is tight, or if you don’t want to become involved
                      in future repair work, this information will be important
                      to you. If major problems are found, a seller may agree to
                      make repairs.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    If the house proves to be in good condition, did I really
                    need an inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Definitely. Now you can complete your home purchase with
                      confidence. You’ll have learned many things about your
                      home from the inspector’s written report, and will have
                      that information for future reference.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    For items that require repair or replacement, will the
                    inspector tell me the costs of each?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The inspector can give you an estimate if you ask for it.
                      However, final cost will be provided by the specialists
                      resolving / repairing the defects.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    Will the inspector forward the report to other agents and
                    clients involved in the home sale?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>No. We maintain complete confidentiality.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                  <Accordion.Header>
                    Can you email me the Home Inspection report?
                  </Accordion.Header>
                  <Accordion.Body>Yes, in pdf format.</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    Why should I choose Housemaster Home Inspections over a
                    competitor?
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="site_list">
                      <ul>
                        <li>
                          Only leading Indian brand in home inspection industry
                          which was founded by IIT Alumni’s{" "}
                        </li>
                        <li>Pioneering the industry in India</li>
                        <li>Inspection tailored to Indian conditions</li>
                        <li>
                          Indian Team has experience more than 3000 inspection{" "}
                        </li>
                        <li>
                          All the inspection engineers are trained by IIT
                          Roorkee Professionals{" "}
                        </li>
                        <li>
                          Professional team trained for inspection as per
                          international practice.
                        </li>
                        <li>Latest Technology</li>
                        <li>Specialized tools & equipment</li>
                        <li>
                          Software driven reports with pictures of relevant
                          issues.
                        </li>
                        <li>Value-added / Additional services</li>
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    How much do I spent for an Inspection?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Home Inspection is Relatively Inexpensive - Less than 0.5 %
                    of the amount spent on buying / making your home.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
