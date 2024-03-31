import React from "react";
import Header from "../components/Header";
import FooterC from "../components/Footer";
import { Link } from "react-router-dom";
import "../Styles/SellerMenu.css";
const SellerMenu = () => {
  return (
    <>
      <Header />
      <h2 className="heading">Seller Menu</h2>
      <div className="menu">
        <div className="insideMenu">
          <div className="firstDiv">
            <Link
              to="/add-animal"
              style={{ textDecoration: "none" }}
              className="text"
            >
              Add Animal
            </Link>
          </div>

          <div className="secDiv">
            <Link
              to="/milksubscription"
              style={{ textDecoration: "none" }}
              className="text"
            >
              Sell Milk
            </Link>
          </div>
          <div className="thirdDiv">
            <Link
              to="/dairy-products"
              style={{ textDecoration: "none" }}
              className="text"
            >
              Sell Dairy Products
            </Link>
          </div>
          <div className="fourDiv">
            <Link
              to="/my-services"
              style={{ textDecoration: "none" }}
              className="text"
            >
              My Services
            </Link>
          </div>
        </div>
      </div>
      <FooterC />
    </>
  );
};

export default SellerMenu;
