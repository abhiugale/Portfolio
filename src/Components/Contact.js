import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const pdfLink = "./assets/Resume/Abhishek_Ugale_MCA2023.pdf";
  // const pdfLink = "./assets/Resume/Abhishek_Ugale_Bsc_Cs_2023.pdf";
  const linkedInLink = "https://www.linkedin.com/in/abhishek-ugale-b877b4213/";
  const githubLink = "https://github.com/abhiugale";
  const instagramLink = "https://www.instagram.com/iabhiugale/";
  const emailLink = "example@example.com";

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_0mtbqqc", // Replace with your EmailJS Service ID
        "template_0yyw6pj", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "NRfU7WEBIujykBcTA" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setResponseMessage("Message sent successfully!");
          alert(
            "Contact Details Submitted Successfully I Will Reach To You In Short...!"
          );
        },
        (error) => {
          console.log("FAILED...", error);
          setResponseMessage("Failed to send message.");
          alert(
            "Failed To Send Contact Details. You Can Directly Mail My Email: abhiugale2002@gmail.com"
          );
        }
      );
  };

  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-4 mb-5">
            <h2 className="mb-5 text-uppercase" style={{ fontSize: "40px" }}>
              Let’s Connect
            </h2>
            <p>{responseMessage}</p>
            <p>Say hello at abhiugale2002@gmail.com</p>
            <p>
              For more info, here's contact form...
              {/* <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links d-inline-block"
              >
               Resume
              </a> */}
            </p>
            <div className="col-md-8 d-flex justify-content-start">
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
                href={`mailto:${emailLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links d-inline-block"
                data-bs-toggle="tooltip"
                title="Send Email to abhiugale2002@gmail.com"
              >
                <i className="bi bi-envelope mx-2 fs-2"></i>
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links d-inline-block"
                data-bs-toggle="tooltip"
                title="Instagram"
              >
                <i className="bi bi-instagram mx-2 fs-2"></i>
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
