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
import { useState, useEffect } from 'react'
import { getSeo } from '../../services/seoservices/seo'
import { Helmet } from 'react-helmet-async'
function CommercialInspection() {
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
