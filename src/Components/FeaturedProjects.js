import React from "react";

function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Background Generator Web Application",
      description:
        "Developed a background generator web application using React.js.Enabled users to create visually appealing backgrounds with gradient options and real-time preview.",
      imgSrcs: [
        "./assets/BG-Generator/img-1.png",
        "./assets/BG-Generator/img-2.png",
      ],
      liveDemoLink: "",
      githubLink: "https://github.com/abhiugale/background-generator.git",
    },
    {
      id: 2,
      title: "Event Management System",
      description:
        "Built a comprehensive event management system with user registrations and ticketing using React and MySQL. Implemented features for event creation, management, promotion, and attendee management.",
      imgSrcs: [
        "./assets/Event-Management/img-1.png",
        "./assets/Event-Management/img-2.png",
        "./assets/Event-Management/img-3.png",
        "./assets/Event-Management/img-4.png",
        "./assets/Event-Management/img-5.png",
        "./assets/Event-Management/img-6.png",
        "./assets/Event-Management/img-7.png",
        "./assets/Event-Management/img-8.png",
      ],
      liveDemoLink: "",
      githubLink: "https://github.com/abhiugale/event-management.git",
    },
    {
      id: 3,
      title: "Real Estate Website",
      description:
        "Orchestrated the creation of key components including Home, Property listing, Mortgage Calculator,and Checkout, optimizing user journey and experience, hosted the project on Firebase, ensuring scalability and performance.",
      imgSrcs: [
        "./assets/Real-Estate/img-1.png",
        "./assets/Real-Estate/img-2.png",
        "./assets/Real-Estate/img-3.png",
        "./assets/Real-Estate/img-4.png",
        "./assets/Real-Estate/img-5.png",
        "./assets/Real-Estate/img-6.png",
        "./assets/Real-Estate/img-7.png",
        "./assets/Real-Estate/img-8.png",
      ],
      liveDemoLink: "https://realestate-22a2a.web.app/",
      githubLink: "https://github.com/abhiugale/Real-Estate-Project.git",
    },
    {
      id: 4,
      title: "Krishikraft",
      description:
        "Orchestrated the creation of key components including Home, Product listing, Services,and Checkout, optimizing user journey and experience, ensuring scalability and performance.",
      imgSrcs: [
        "./assets/Krishikraft/img-1.png",
        "./assets/Krishikraft/img-2.png",
        "./assets/Krishikraft/img-3.png",
        "./assets/Krishikraft/img-4.png",
        "./assets/Krishikraft/img-5.png",
        "./assets/Krishikraft/img-6.png",
        "./assets/Krishikraft/img-7.png",
        "./assets/Krishikraft/img-8.png",
      ],
      liveDemoLink: "",
      githubLink: "https://github.com/abhiugale/KrishiKraft.git",
    },
    // Add more projects as needed
  ];
  const openGithub = (gitLink) => {
    window.open(gitLink, "_blank");
  };
  const openLiveDemo = (liveLink) => {
    if (!liveLink) {
      alert("This project is not hosted on live server...");
    } else {
      window.open(liveLink, "_blank");
    }
  };
  return (
    <section id="work" className="featured-projects py-5">
      <div className="container">
        <hr />
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
              <div className="card mt-5">
                <div
                  id={`carousel-${project.id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {project.imgSrcs.map((src, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={src}
                          className="d-block w-100"
                          alt={project.title}
                          style={{
                            height: "200px", // Fixed height
                            // objectFit: "cover", // Ensures the image covers the entire area without distortion
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${project.id}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${project.id}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="row">
                    <div className="col-md-6 sm-4 mt-2">
                      <button
                        onClick={() => openLiveDemo(project.liveDemoLink)}
                        className="btn"
                      >
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
                      <button
                        onClick={() => openGithub(project.githubLink)}
                        className="btn"
                      >
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
