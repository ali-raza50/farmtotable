import React, { useState, useEffect } from "react";
import Rellax from "rellax";
import "../Styles/heroArea.css"; // Import your CSS file for styling
import hero from "../img/hero.png";
import hero1 from "../img/hero1.png";
import hero2 from "../img/hero2.png";
import hero3 from "../img/hero3.png";
import hero4 from "../img/hero4.png";
import hero5 from "../img/hero5.png";
import { Link } from "react-router-dom";

const HeroArea = () => {
  // Array of image URLs
  const images = [hero, hero1, hero2, hero3, hero4, hero5];
  const texts = [
    {
      title: "Welcome to Farm to Table",
      description:
        "We have trained a special model which will predict breeds and prices of goats",
    },
    {
      title: "Healthy and Nutritious",
      description:
        "Eating healthy has never been easier with our selection of nutritious foods. From organic fruits and veggies to grass-fed meats, we prioritize your health and well-being.",
    },
    {
      title: "Support Local Farmers",
      description:
        "By choosing Farm to Table, you're supporting local farmers and their communities. We work closely with small-scale farmers to bring you the freshest ingredients.",
    },
    {
      title: "Join the Farming Revolution",
      description:
        "Be a part of the farming revolution with Farm to Table. Embrace sustainable practices and enjoy delicious, wholesome food that nourishes your body and soul.",
    },
    {
      title: "Connect with Nature",
      description:
        "Escape the hustle and bustle of city life and connect with nature at our farm. Experience the beauty of rural living while enjoying fresh air and scenic views.",
    },
    {
      title: "Join the Farming Revolution",
      description:
        "Be a part of the farming revolution with Farm to Table. Embrace sustainable practices and enjoy delicious, wholesome food that nourishes your body and soul.",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const rellax = new Rellax(".rellax"); // Initialize Rellax with the class name of your elements

    // Function to change the image after 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 100000);

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
      rellax.destroy(); // Clean up Rellax instance on component unmount
    };
  }, []);

  return (
    <div className="hero-area">
      {images.map((image, index) => (
        <div
          key={index}
          className={`welcome-content rellax ${
            index === currentImageIndex ? "active" : ""
          }`}
          data-rellax-speed="-4" // Adjust the speed as per your requirement
          style={{
            backgroundImage: `url(${image})`,
            transition: "opacity 1s ease-in-out", // Apply transition for smooth sliding effect
            opacity: index === currentImageIndex ? 1 : 0, // Control opacity based on active index
          }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-lg-10">
                <div className="text-container">
                  <h2
                    className={`title ${
                      index === currentImageIndex ? "slide-in-top" : ""
                    }`}
                  >
                    {texts[index].title}
                  </h2>
                  <p
                    className={`text-black text-lg description ${
                      index === currentImageIndex ? "slide-in-bottom" : ""
                    }`}
                  >
                    {texts[index].description}
                  </p>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/contact"
                    className={`btn famie-btn mt-4 ${
                      index === currentImageIndex ? "slide-in-bottom" : ""
                    }`}
                  >
                    Contact Us
                  </Link>
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
