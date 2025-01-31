import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function MoreAboutMe() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/more-about-me');
  };
  return (
    <section id="about" className="about-me py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-uppercase mb-5">
            <h2 style={{ fontSize: "40px" }}>About Me</h2>
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
            <div className="mt-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreAboutMe;
