import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../Styles/PredictBreed.css";
import bakra from "../img/bakra.png";
const PredictBreedandPrice = () => {
  return (
    <>
      <Header />
      <h2 className="heading">Prediction of Price & Breed</h2>
      <div className="productContainer">
        <div className="product-container">
          <h4>Provided by Seller</h4>
          <img src={bakra} alt="Product" className="product-image" />
          <div className="product-details">
            <p>
              <strong>Breed:</strong> Rajanpuri
            </p>
            <p className="price">
              <strong>Price:</strong> Rs 7000
            </p>
          </div>
        </div>
        <div className="product-container">
          <h4>Provided by Model</h4>
          <img src={bakra} alt="Product" className="product-image" />
          <div className="product-details">
            <p>
              <strong>Breed:</strong> Rajanpuri
            </p>
            <p className="price">
              <strong>Price:</strong> Rs 7000
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PredictBreedandPrice;
