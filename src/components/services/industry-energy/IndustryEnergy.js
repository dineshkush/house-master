import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";

function IndustryEnergy() {
  return (
    <>
    <HelmetProvider>
        <Helmet>
          <title>Industry Energy</title>
          <link rel="canonical" href="https://www.housemaster.in/services/industry-energy" />

          <meta property="og:title" content="Industry Energy" />
        </Helmet>
      </HelmetProvider>

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
    </>
  )
}

export default IndustryEnergy
