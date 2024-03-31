import React from "react";
import "../Styles/Animal.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bakra from "../img/bakra.png";
import { Link } from "react-router-dom";

const Animal = () => {
  return (
    <>
      <Header />

      <h2 className="heading">Animals</h2>
      <div className="outCardContainer">
        <div className="cardContainer">
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <Link to="/predictBreed">
                <button className="modify-button">
                  Predict Breed and Price
                </button>
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Predict Breed and Price</button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Predict Breed and Price</button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Predict Breed and Price</button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Predict Breed and Price</button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Predict Breed and Price</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Animal;
