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
                <p>What we do</p>
                <h2>
                  <span>Our Produce</span> Is Mainstay For Us
                </h2>
                <img src={deco} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <p>
                Mauris fermentum nunc quis massa lacinia consequat. Suspendisse
                orci magna, pharetra sedonia risus ut, elementum mollis nisin.
                Nunc in sapien turpis. Donec egeto david orci pulvinar ultrices
                necto drax turpis. Pellentesque justo metus, semper nec
                ullamcorper id, gravida ultricies arcu.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="single-service-area mb-4">
                <div className="service-title mb-3 d-flex align-items-center">
                  <img src={milk} alt="Fruit & Vegetable" />
                  <h5 className="ml-3">Milk Subscription</h5>
                </div>
                <p>
                  Intiam eu sagittis est, aster cosmo lacini libero. Praesent
                  dignissim sed odio velo aliquam manta legolas.
                </p>
              </div>
              <div className="single-service-area mb-4">
                <div className="service-title mb-3 d-flex align-items-center">
                  <img src={milk} alt="Fruit & Vegetable" />
                  <h5 className="ml-3">Price prediction</h5>
                </div>
                <p>
                  Intiam eu sagittis est, aster cosmo lacini libero. Praesent
                  dignissim sed odio velo aliquam manta legolas.
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
                  Intiam eu sagittis est, aster cosmo lacini libero. Praesent
                  dignissim sed odio velo aliquam manta legolas.
                </p>
              </div>
              <div className="single-service-area mb-4">
                <div className="service-title mb-3 d-flex align-items-center">
                  <img src={milk} alt="Fruit & Vegetable" />
                  <h5 className="ml-3">Consultation</h5>
                </div>
                <p>
                  Intiam eu sagittis est, aster cosmo lacini libero. Praesent
                  dignissim sed odio velo aliquam manta legolas.
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
