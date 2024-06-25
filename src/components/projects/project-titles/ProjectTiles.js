import React from "react";
import "./ProjectTiles.css";
import ireoVictoryValley from "../../../images/projects-img/ireo-victory-valley.webp";
import ireoSkyon from "../../../images/projects-img/ireo-skyon.webp";
import m3mGolfEstate from "../../../images/projects-img/m3m-golf-estate.webp";
import bestechParkview from "../../../images/projects-img/bestech-parkview.webp";
import emaarPalmHeights from "../../../images/projects-img/emaar-palm-heights.webp";
import adaniSamsara from "../../../images/projects-img/adani-samsara.gif";
import theHermitage from "../../../images/projects-img/the-hermitage.webp";
import theSuncity from "../../../images/projects-img/the-suncity.gif";
import mapskoMountVille from "../../../images/projects-img/mapsko-mount-ville.webp";
import vipulWorld from "../../../images/projects-img/vipul-world.webp";
import parasProject from "../../../images/projects-img/paras-project.jpg";
import MahindraLuminare from "../../../images/projects-img/Mahindra-Luminare.jpg";
import ireoGrandArch from "../../../images/projects-img/ireo-grand-arch.jpg";
import dlfTheCrest from "../../../images/projects-img/dlf-the-crest.jpg";
import dlfTheCamellias from "../../../images/projects-img/dlf-the-camellias.jpg";
import centralParkGurgaon from "../../../images/projects-img/central-park-gurgaon.jpg";
import { useState, useEffect } from "react";
import { getSeo } from "../../services/seoservices/seo";
import { Helmet } from "react-helmet-async";
function ProjectTiles() {
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
  const projectTiles = [
    {
      image: ireoVictoryValley,
      title: "Ireo Victory Valley",
    },
    {
      image: ireoSkyon,
      title: "Ireo Skyon",
    },
    {
      image: m3mGolfEstate,
      title: "M3M Golf Estate",
    },
    {
      image: bestechParkview,
      title: "Bestech Parkview",
    },
    {
      image: emaarPalmHeights,
      title: "Emaar Palm Heights",
    },
    {
      image: adaniSamsara,
      title: "Adani Samsara",
    },
    {
      image: theHermitage,
      title: "The Hermitage",
    },
    {
      image: theSuncity,
      title: "The Suncity",
    },
    {
      image: mapskoMountVille,
      title: "Mapsko Mount Ville",
    },
    {
      image: vipulWorld,
      title: "Vipul World",
    },
    {
      image: parasProject,
      title: "Paras",
    },
    {
      image: MahindraLuminare,
      title: "Mahindra Luminare",
    },
    {
      image: ireoGrandArch,
      title: "Ireo Grand Arch",
    },
    {
      image: dlfTheCrest,
      title: "DLF The Crest",
    },
    {
      image: dlfTheCamellias,
      title: "DLF The Camellias",
    },
    {
      image: centralParkGurgaon,
      title: "Central Park Gurgaon",
    },
  ];

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
      <section className="project_area">
        <div className="container">
          <div className="row">
            <div className="site_title_box text-center">
              <h3 className="main_heading">Our Customers Came From</h3>
            </div>
          </div>

          <div className="row">
            {projectTiles.map((project, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <div className="project_item">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                  <h4>{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectTiles;
