import React from "react";
import "../Styles/SellerServices.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bakra from "../img/bakra.png";

const SellerServices = () => {
  return (
    <>
      <Header />

      <h2 className="heading">Seller Services</h2>
      <div className="outCardContainer">
        <div className="cardContainer">
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button" style={{ background: "red" }}>
                Delete
              </button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button" style={{ background: "red" }}>
                Delete
              </button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button" style={{ background: "red" }}>
                Delete
              </button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button" style={{ background: "red" }}>
                Delete
              </button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button" style={{ background: "red" }}>
                Delete
              </button>
            </div>
          </div>
          <div className="card">
            <img src={bakra} alt="Product" className="card-image" />
            <div className="card-buttons">
              <button className="modify-button">Modify</button>
              <button className="delete-button" style={{ background: "red" }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellerServices;
