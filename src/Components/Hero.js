import React, { useEffect } from "react";

function Hero() {
  const pdfLink = "./assets/Resume/Abhishek_Ugale_MCA_2025.pdf";
  // const pdfLink = "./assets/Resume/Abhishek_Ugale_Bsc_Cs_2023.pdf";
  const linkedInLink = "https://www.linkedin.com/in/abhishek-ugale-b877b4213/";
  const githubLink = "https://github.com/abhiugale";
  const emailLink = "";
  useEffect(() => {
    // Initialize all tooltips after the component mounts
    // const tooltipTriggerList = [].slice.call(
    //   document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // );
    // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new window.bootstrap.Tooltip(tooltipTriggerEl);
    // });
  }, []);

  return (
    <section id="hero" className="hero text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="hero-container" data-aos="fade-in">
              <h3>Hello 👋 I'm,</h3>

              <h1 className="animate-charcter">Abhishek Ugale</h1>
            </div>
            <p>
              A Pune-based FullStack Developer passionate about building
              accessible and user-friendly and fully functional websites and
              mobile applications.
            </p>
            <div className="row align-items-center">
              <div className="col-md-4">
                <a href="#contact" className="btn btn-contact">
                  Contact Me
                  <i
                    className="bi bi-arrow-up-right-circle mx-2"
                    style={{
                      fontSize: "1.3em",
                      fontWeight: "bold",
                      strokeWidth: "2px",
                    }}
                  />
                </a>
              </div>
              <div className="col-md-8 d-flex justify-content-start">
                <a
                  href={pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links d-inline-block"
                  data-bs-toggle="tooltip"
                  title="View Resume"
                >
                  <i className="bi bi-file-earmark-person mx-2 fs-2"></i>
                </a>
                <a
                  href={linkedInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links d-inline-block"
                  data-bs-toggle="tooltip"
                  title="LinkedIn Profile"
                >
                  <i className="bi bi-linkedin mx-2 fs-2"></i>
                </a>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links d-inline-block"
                  data-bs-toggle="tooltip"
                  title="Github Profile"
                >
                  <i className="bi bi-github mx-2 fs-2"></i>
                </a>
                <a
                  href={emailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links d-inline-block"
                  data-bs-toggle="tooltip"
                  title="Send Email to abhiugale2002@gmail.com"
                >
                  <i className="bi bi-envelope mx-2 fs-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {/* <img
              src="./assets/images/abhi.png"
              alt="Abhi Ugale"
              className="img img-fluid"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
