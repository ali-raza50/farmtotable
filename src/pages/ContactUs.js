import React, { useState } from "react";
import decor from "../img/decor.png";
import "../Styles/contactUs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/contactus/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Handle success or error response
        alert("Message send successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {/* <Header /> */}

      <section className="contact-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="contact-content mb-100">
                <div className="section-heading">
                  <p>Contact now</p>
                  <h2>
                    <span>Get In Touch</span> With Us
                  </h2>
                  <div className="">
                    <img src={decor} alt="deco" />
                  </div>
                </div>
                <div className="contact-form-area">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Your Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          className="form-control"
                          cols="30"
                          rows="10"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn famie-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-maps mb-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.4134254611604!2d74.21006887469117!3d31.402733652946203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University!5e0!3m2!1sen!2s!4v1712429901781!5m2!1sen!2s"
                  allowFullScreen=""
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUs;
