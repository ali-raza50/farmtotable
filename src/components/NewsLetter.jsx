import React from "react";
import { Parallax } from "react-parallax";
import decor2 from "../img/decor2.png";
import backgroundImg from "../img/newleterpic.png";

import "../Styles/newsLetter.css"; // Your custom CSS file

const NewsLetter = () => {
  // Add your form submission logic here
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission, such as sending data to an API or email service
  };

  return (
    <Parallax
      bgImage={backgroundImg}
      strength={100}
      style={{ height: "500px", backgroundSize: "cover" }}
    >
      <section className="newsletter-area section-padding-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="newsletter-content">
                <div className="section-heading white text-center">
                  <p>What we do</p>
                  <h2>
                    <span>Our Produce</span> Is Mainstay For Us
                  </h2>
                  <div className="d-flex justify-content-center">
                    <img src={decor2} alt="deco" />
                  </div>
                </div>
                <p className=" mb-50 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at diam convallis ligula cursus bibendum sed at enim.
                  Class aptent taciti sociosqu ad litora torquent conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn famie-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default NewsLetter;
