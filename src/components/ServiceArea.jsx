import React, { useEffect, useRef } from "react";
import Rellax from "rellax"; // Import Rellax library
import "../Styles/ServicesArea.css"; // Import the custom CSS file for styling
import hero3 from "../img/hero3.png";
import deco from "../img/decor.png";
import milk from "../img/milk.png";
import servicesImg from "../img/servicesPic1.png";
const ServicesArea = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && imageRef.current.parentElement) {
        const offset = window.scrollY;
        const containerTop = imageRef.current.parentElement.offsetTop;
        const containerHeight = imageRef.current.parentElement.offsetHeight;

        // Check if the container is within the viewport
        if (
          offset >= containerTop &&
          offset <= containerTop + containerHeight
        ) {
          const parallaxOffset = (offset - containerTop) * 0.2;
          imageRef.current.style.backgroundPositionY = `${-parallaxOffset}px`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="serviceContainer container-fluid">
      {/* Apply scrolling effect to the background image */}

      <div
        ref={imageRef}
        className="image-side"
        style={{ backgroundImage: `url(${servicesImg})` }}
      >
        {/* Background image setup */}
      </div>

      <div className="text-side d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <p style={{ color: "black" }}>What we do</p>
                <h2>
                  <span>Our Produce</span> Is Essential For Us
                </h2>
                <img src={deco} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <p>
                Our project boasts a range of essential features catering to
                dairy enthusiasts. From managing milk subscriptions to exploring
                a variety of dairy products, predicting prices, and accessing
                expert consultations, our platform offers a comprehensive
                solution for all dairy-related needs.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="single-service-area mb-4">
                <div className="service-title mb-3 d-flex align-items-center">
                  <img src={milk} alt="Fruit & Vegetable" />
                  <h5 className="ml-3">Milk Subscription</h5>
                </div>
                <p>
                  Milk subscription offers convenience and freshness. Enjoy
                  doorstep delivery of your favorite dairy products.
                </p>
              </div>
              <div className="single-service-area mb-4">
                <div className="service-title mb-3 d-flex align-items-center">
                  <img src={milk} alt="Fruit & Vegetable" />
                  <h5 className="ml-3">Price prediction</h5>
                </div>
                <p>
                  Stay ahead with price prediction. Make informed decisions
                  based on accurate forecasts. Anticipate market trends and
                  fluctuations
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-service-area mb-4">
                <div className="service-title mb-3 d-flex align-items-center">
                  <img src={milk} alt="Fruit & Vegetable" />
                  <h5 className="ml-3">Dairy Products</h5>
                </div>
                <p>
                  Explore a wide range of dairy products for your needs. From
                  fresh milk to artisanal cheeses, we offer quality and variety.
                </p>
              </div>
              <div className="single-service-area mb-4">
                <div className="service-title mb-3 d-flex align-items-center">
                  <img src={milk} alt="Fruit & Vegetable" />
                  <h5 className="ml-3">Consultation</h5>
                </div>
                <p>
                  Get expert consultation tailored to your needs. Our team of
                  experienced professionals is here to guide you through every
                  step of your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
