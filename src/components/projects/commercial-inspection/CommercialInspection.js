import React from 'react'
import m3mLogo from "../../../images/m3m-logo.png"
import emaarLogo from "../../../images/emaar-logo.png"

function CommercialInspection() {

    const CommercialInspectionLogo = [
        {
            title : "M3M",
            image : m3mLogo,
        },
        {
            title : "Emaar",
            image : emaarLogo,
        },
        {
            title : "M3M",
            image : m3mLogo,
        },
        {
            title : "Emaar",
            image : emaarLogo,
        },
        {
            title : "M3M",
            image : m3mLogo,
        },
        {
            title : "Emaar",
            image : emaarLogo,
        },
        {
            title : "M3M",
            image : m3mLogo,
        },
        {
            title : "Emaar",
            image : emaarLogo,
        },
        {
            title : "M3M",
            image : m3mLogo,
        },
        {
            title : "Emaar",
            image : emaarLogo,
        },
        {
            title : "M3M",
            image : m3mLogo,
        },
        {
            title : "Emaar",
            image : emaarLogo,
        },
    ]

  return (
    <>
    <section className="project_area">
        <div className="container">
          <div className="row">
            <div className="site_title_box text-center">
              <h3 className="main_heading">Commercial Inspection</h3>
            </div>
          </div>

          <div className="row">
            {CommercialInspectionLogo.map((CommercialLogo, index) => (
              <div className="col-lg-2" key={index}>
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
