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

function ProjectTiles() {
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
  ];

  return (
    <>
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
