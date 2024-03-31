import React from "react";
import "../Styles/DairyProductHome.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Butter from "../img/Butter1.png";
import { Link } from "react-router-dom";

const DairyProduct = () => {
  return (
    <>
      <Header />

      <h2 className="heading">Dairy Products</h2>
      <div className="outCardContainer">
        <div className="cardContainer">
          <Link to="/productDescription">
            <div className="card">
              <img src={Butter} alt="Product" className="card-image" />
              <div className="card-buttons">
                <h6 className="modify-button">Butter</h6>
                <h6 className="delete-button">Rs 1300</h6>
              </div>
            </div>
          </Link>
          <div className="card">
            <img src={Butter} alt="Product" className="card-image" />
            <div className="card-buttons">
              <h6 className="modify-button">Butter</h6>
              <h6 className="delete-button">Rs 1300</h6>
            </div>
          </div>
          <div className="card">
            <img src={Butter} alt="Product" className="card-image" />
            <div className="card-buttons">
              <h6 className="modify-button">Butter</h6>
              <h6 className="delete-button">Rs 1300</h6>
            </div>
          </div>
          <div className="card">
            <img src={Butter} alt="Product" className="card-image" />
            <div className="card-buttons">
              <h6 className="modify-button">Butter</h6>
              <h6 className="delete-button">Rs 1300</h6>
            </div>
          </div>
          <div className="card">
            <img src={Butter} alt="Product" className="card-image" />
            <div className="card-buttons">
              <h6 className="modify-button">Butter</h6>
              <h6 className="delete-button">Rs 1300</h6>
            </div>
          </div>
          <div className="card">
            <img src={Butter} alt="Product" className="card-image" />
            <div className="card-buttons">
              <h6 className="modify-button">Butter</h6>
              <h6 className="delete-button">Rs 1300</h6>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DairyProduct;
