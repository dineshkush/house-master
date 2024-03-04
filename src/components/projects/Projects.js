import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProjectTiles from "./project-titles/ProjectTiles";
import CommercialInspection from "./commercial-inspection/CommercialInspection";
import axios from "axios";
import { getSeo } from "../services/seoservices/seo";
function Projects() {
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
            <title>PROJECTS | Housemaster</title>
            <link rel="canonical" href="https://www.housemaster.in/projects" />

            <meta property="og:title" content="PROJECTS | Housemaster" />
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
                <h1>Our Projects</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectTiles />

      <CommercialInspection />
    </>
  );
}

export default Projects;
