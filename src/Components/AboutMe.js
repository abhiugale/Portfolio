import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function AboutMe() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/more-about-me");
  // };
  return (
    <section id="about" className="about-me py-5">
      <div className="container">
        <hr />

        <div className="row">
          <div className="col-md-4 text-uppercase mb-5">
            <h2 style={{ fontSize: "30px" }}>About Me</h2>
          </div>
          <div className="col-md-8">
            <div>
              <h2>
                I am a Fullstack Developer based in Pune. Has Computer Science
                background.
              </h2>
              I am a Fullstack Developer based in Pune looking for exciting
              opportunities. Has Computer Science background. Likes to focus on
              accessibility when developing. Passionate and curious about
              solving problems. Currently, I’m exploring Reactjs, Webflow and a
              bit of Designing. While I am not programming, I enjoy playing
              Cricket, travelling and listening lofi songs. Learning more to
              improve skill.
            </div>
            {/* <div className="mt-5">
              <button onClick={handleClick} className="btn btn-contact">
                MORE ABOUT ME
                <i
                  className="bi bi-arrow-up-right-circle mx-2"
                  style={{
                    fontSize: "1.3em",
                    fontWeight: "bold",
                    strokeWidth: "2px",
                  }}
                />
              </button>
            </div> */}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 text-uppercase mb-5">
            <h2 style={{ fontSize: "30px" }}>My Capabilities</h2>
          </div>
          <div className="col-md-6">
            <div>
              <p>
                I am always looking to add more skills.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-3">
                {[
                  "Java",
                  "C++",
                  "JavaScript",
                  "My SQL",
                  "React Js",
                  "React Native",
                  "Node Js",
                  "Express Js",
                  "Mongo DB",
                  "HTML",
                  "CSS",
                  "GIT",
                  "Angular",
                  "NPM",
                  "VS Code",
                  "Compass",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="badge rounded-pill px-3 py-2 skills"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 text-uppercase mb-5">
            <h2 style={{ fontSize: "30px" }}>My Experience</h2>
          </div>
          <div className="col-md-8">
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-1">Full Stack Developer Intern</h5>
                </div>
                <div>
                  <p className="fs-6">Aug 2023 — Aug 2024</p>
                </div>
              </div>
              <h6 className="text-success">RADIANT IT SERVICES PVT LTD</h6>
              <div className="">
                <ul>
                  <li>
                    Worked on the development of web applications using the MERN
                    stack (MongoDB, Express.js, React.js, Node.js).
                  </li>
                  <li>
                    Developed RESTful APIs to support front-end functionalities.
                  </li>
                  <li>
                    Ensured code quality by following best practices in software
                    development.
                  </li>
                  <li>
                    Participated in code reviews and contributed to team
                    discussions on software architecture and design.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
