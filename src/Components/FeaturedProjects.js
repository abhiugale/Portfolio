import React from "react";

function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "CET CELL Management",
      description: "Description of Project 1.",
      imgSrc: "./assets/images/prj-1.png",
      liveDemoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Event Management",
      description: "Description of Project 2.",
      imgSrc: "./assets/images/prj-2.png",
      liveDemoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "School Management",
      description: "Description of Project 3.",
      imgSrc: "./assets/images/prj-3.png",
      liveDemoLink: "#",
      githubLink: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="work" className="featured-projects py-5">
      <div className="container">
      <hr/>
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <h2 className="text-uppercase" style={{ fontSize: "40px" }}>
              Featured Projects
            </h2>
            <p>
              Here are some of the selected projects that showcase my passion
              for Frontend and Fullstack Development.
            </p>
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card">
                <img
                  src={project.imgSrc}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: "200px", // Fixed height
                    width: "100%", // Ensure the image takes up the full width of the card
                    objectFit: "cover", // Ensures the image covers the entire area without distortion
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="row">
                    <div className="col-md-6 sm-4 mt-2">
                      <button href={project.liveDemoLink} className="btn">
                        LIVE DEMO
                        <i
                          className="bi bi-arrow-up-right-circle mx-2"
                          style={{
                            fontSize: "1em",
                            fontWeight: "bold",
                            strokeWidth: "2px",
                          }}
                        />
                      </button>
                    </div>
                    <div className="col-md-6 sm-4 mt-2">
                      <button href={project.githubLink} className="btn">
                        SEE ON GITHUB
                        <i
                          className="bi bi-github mx-2"
                          style={{
                            fontSize: "1em",
                            fontWeight: "bold",
                            strokeWidth: "2px",
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
