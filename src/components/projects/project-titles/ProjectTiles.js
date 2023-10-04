import React from "react";
import "./ProjectTiles.css";
import ireoVictoryValley from "../../../images/ireo-victory-valley-image.jpg";

function ProjectTiles() {
  const projectTiles = [
    {
      image: ireoVictoryValley,
      title: "Project 1",
    },
    {
      image: ireoVictoryValley,
      title: "Project 2",
    },
    {
      image: ireoVictoryValley,
      title: "Project 3",
    },
    {
      image: ireoVictoryValley,
      title: "Project 4",
    },
    {
      image: ireoVictoryValley,
      title: "Project 5",
    },
    {
      image: ireoVictoryValley,
      title: "Project 6",
    },
    {
      image: ireoVictoryValley,
      title: "Project 7",
    },
    {
      image: ireoVictoryValley,
      title: "Project 8",
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
              <div className="col-lg-3" key={index}>
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
