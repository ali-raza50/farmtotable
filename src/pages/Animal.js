import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import bakra from "../img/bakra1.png";
import "../Styles/Animal.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AnimalCard = () => {
  // Hardcoded data for demonstration
  const name = "Rajanpuri";
  const price = "Rs. 1200";
  const city = "Multan";
  const viewCount = 100;
  const description =
    "This is a description for Bakra.This is a description for Bakra.";
  const image = bakra;

  return (
    <>
      <Header />

      <div class="max-w-3xl mx-auto text-center mt-16">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Animals
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Link
        to="/animaldescription"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card" style={{ height: "auto", borderRadius: "0" }}>
          <img src={bakra} className="card-img-top" alt={name} />
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <h5 className="card-title">{name}</h5>
              </div>
              <div className="col-6 text-right">
                <h5 className="card-title">{price}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h3 className="card-title">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />{" "}
                  {city}
                </h3>
              </div>
              <div className="col-6 text-right">
                <div className="view-count">
                  <FontAwesomeIcon icon={faEye} className="eye-icon" />
                  <span>{viewCount}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Footer />
    </>
  );
};

export default AnimalCard;
