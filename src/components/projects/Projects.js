import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectTiles from "./project-titles/ProjectTiles";
import CommercialInspection from "./commercial-inspection/CommercialInspection";

function Projects() {
  return (
    <>
        <Helmet>
          <title>PROJECTS | Housemaster</title>
          <link rel="canonical" href="https://www.housemaster.in/projects" />

          <meta property="og:title" content="PROJECTS | Housemaster" />
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
