import React from 'react'
import "./CommercialInspection.css"
import airtelLogo from "../../../images/project-logo/airtel-logo.jpg"
import bestechLogo from "../../../images/project-logo/bestech-logo.jpg"
import cpwdLogo from "../../../images/project-logo/cpwd-logo.jpg"
import dlfLogo from "../../../images/project-logo/dlf-logo.jpg"
import emaarLogo from "../../../images/project-logo/emaar-logo.jpg"
import futureTechLogo from "../../../images/project-logo/future-tech-logo.jpg"
import ireoLogo from "../../../images/project-logo/ireo-logo.jpg"
import laghuUdyogBharatiLogo from "../../../images/project-logo/laghu-udyog-bharati-logo.jpg"
import m3mLogo from "../../../images/project-logo/m3m-logo.jpg"
import nbccLogo from "../../../images/project-logo/nbcc-logo.jpg"
import savoySuitesLogo from "../../../images/project-logo/savoy-suites-logo.jpg"
import suncityLogo from "../../../images/project-logo/suncity-logo.jpg"
import ushaLogo from "../../../images/project-logo/usha-logo.jpg"

function CommercialInspection() {

    const CommercialInspectionLogo = [
        {
            title : "Airtel",
            image : airtelLogo,
        },
        {
            title : "Bestech",
            image : bestechLogo,
        },
        {
            title : "CPWD",
            image : cpwdLogo,
        },
        {
            title : "DLF",
            image : dlfLogo,
        },
        {
            title : "Emaar",
            image : emaarLogo,
        },
        {
            title : "Future Tech",
            image : futureTechLogo,
        },
        {
            title : "Ireo",
            image : ireoLogo,
        },
        {
            title : "Laghu Udyog Bharati",
            image : laghuUdyogBharatiLogo,
        },
        {
            title : "M3M",
            image : m3mLogo,
        },
        {
            title : "NBCC",
            image : nbccLogo,
        },
        {
            title : "Savoy Suites",
            image : savoySuitesLogo,
        },
        {
            title : "Suncity",
            image : suncityLogo,
        },
        {
            title : "USHA",
            image : ushaLogo,
        },
    ]

  return (
    <>
    <section className="commercial_inspection_logo_area">
        <div className="container">
          <div className="row">
            <div className="site_title_box text-center">
              <h3 className="main_heading">Commercial Inspection</h3>
            </div>
          </div>

          <div className="row commercial_inspection_logo_row">
            {CommercialInspectionLogo.map((CommercialLogo, index) => (
              <div className="col-3 col-lg-2" key={index}>
                <div className="Commerciallogo_item">
                  <img
                    src={CommercialLogo.image}
                    alt={CommercialLogo.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CommercialInspection
