import React from "react";
import Butter from "../img/dairy1.png";
import "../Styles/DairyProductHome.css"; // Adjust the path if your CSS file is in a different directory
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DairyProduct = () => {
  const product = {
    imageUrl: Butter, // Updated to use the imported image
    name: "Organic Whole Milk",
    price: "Rs 399",

    description: "Rich and creamy milk from grass-fed cows.",

    brand: "Nature's Dairy",

    rating: 4.5,
  };

  return (
    <>
      <Header />

      <div class="max-w-3xl mx-auto text-center mt-16">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Dairy Products
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Link
        to="/productDescription"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="cardContainer1">
          <div className="dairyProduct">
            <img src={product.imageUrl} alt="Product" />
            <div className="productHeader">
              <h3>{product.name}</h3>
              <div>{product.price}</div>
            </div>
            <p className="productDescription">{product.description}</p>
          </div>
        </div>
      </Link>
      <Footer />
    </>
  );
};

export default DairyProduct;
