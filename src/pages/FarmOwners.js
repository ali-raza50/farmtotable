import React from "react";
import "../Styles/FarmOwners.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import farmOwner from "../img/farmowner1.png";
import { Link } from "react-router-dom";

const FarmOwners = () => {
  return (
    <>
      <Header />

      <h2 className="heading">Available Farm Owners</h2>
      <div className="outCardContainer">
        <div className="cardContainer">
          <div className="card">
            <img src={farmOwner} alt="Product" className="card-image" />
            <div className="card-buttons">
              <Link to="/UpdatePage">
                <button className="modify-button">Modify</button>
              </Link>
              <Link to="/viewStore">
                <button className="delete-button">View Store</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={farmOwner} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button">View Store</button>
            </div>
          </div>
          <div className="card">
            <img src={farmOwner} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button">View Store</button>
            </div>
          </div>
          <div className="card">
            <img src={farmOwner} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button">View Store</button>
            </div>
          </div>
          <div className="card">
            <img src={farmOwner} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button">View Store</button>
            </div>
          </div>
          <div className="card">
            <img src={farmOwner} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button">View Store</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FarmOwners;
