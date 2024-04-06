import React, { useEffect } from "react";
import Rellax from "rellax";
import "../Styles/heroArea.css"; // Import your CSS file for styling
import hero1 from "../img/hero1.png";
import hero2 from "../img/hero2.png";
import hero3 from "../img/hero3.png";
import hero4 from "../img/hero4.png";

const HeroArea = () => {
  useEffect(() => {
    const rellax = new Rellax(".rellax"); // Initialize Rellax with the class name of your elements

    return () => {
      rellax.destroy(); // Clean up Rellax instance on component unmount
    };
  }, []);

  // Array of image URLs
  const images = [hero1, hero2, hero3, hero4];

  return (
    <div className="hero-area">
      {images.map((image, index) => (
        <div
          key={index}
          className="welcome-content rellax"
          data-rellax-speed="-4" // Adjust the speed as per your requirement
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-10">
                <div>
                  <h2>
                    The hearth of the farm is the true center of our universe.
                  </h2>
                  <p>
                    Mauris vestibulum dolor nec lacinia facilisis. Fusce
                    interdum sagittis volutpat. Praesent eget varius ligula,
                    malesuada eleifend purus. Aenean euismod est at mauris
                    mollis ultricies. Morbi arcu mi, dictum eu luala, dapibus
                    interdum mollis.
                  </p>
                  <a href="#" className="btn famie-btn mt-4">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroArea;
