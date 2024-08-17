import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div class="hero-container" data-aos="fade-in">
              <h3>Hello 👋 I'm,</h3>

              <h1 class="animate-charcter">Abhishek Ugale</h1>
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
                  href="https://www.linkedin.com/in/abhishek-ugale-b877b4213/"
                  className="social-links d-inline-block"
                >
                  <i className="bi bi-linkedin mx-2 fs-2"></i>
                </a>
                <a
                  href="https://github.com/abhiugale"
                  className="social-links d-inline-block"
                >
                  <i className="bi bi-github mx-2 fs-2"></i>
                </a>
                <a href="#" className="social-links d-inline-block">
                  <i className="bi bi-envelope mx-2 fs-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="./assets/images/Abhi_ugale.png"
              alt="Abhi Ugale"
              className="img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
