import React from "react";
import "../Styles/HomeCentreContent.css";
import heroAnimal from "../img/heroAnimal.png";
import livestock from "../img/Livestock.png";
import Butcher from "../img/Butcher.png";
import DairyProducts from "../img/DairyProducts.png";
import { Link } from "react-router-dom";
const HomeCentreContent = () => {
  return (
    <>
      {/* hero section */}
      <div style={{ width: "100%", marginTop: "10px", overflow: "hidden" }}>
        <img
          style={{ width: "1365px" }}
          className="heroImg"
          src={heroAnimal}
          alt="heroImage"
        />
      </div>
      <div className="categories">
        <Link to="/animal">
          <div class="firstCat">
            <img src={livestock} alt="Animal" class="animal-image" />
            <p class="text">Animals</p>
          </div>
        </Link>
        <Link to="/farmOwners">
          <div class="secondCat">
            <img src={Butcher} alt="Farm Houses" class="animal-image" />
            <p class="text">Farm Houses</p>
          </div>
        </Link>
        <Link to="/dairyProducts">
          <div class="thirdCat">
            <img src={DairyProducts} alt="Dairy" class="animal-image" />
            <p class="text">Dairy Products</p>
          </div>
        </Link>
      </div>
      {/* text k liye */}
      <div className="outInfo">
        <div className="info">
          <h1>Farm To Table</h1>
          <p className="paraInfo">
            FarmToTable is an online platform where you can predict the price
            and breed of goat Either you have a cow farm, animal farm, cow baby
            for sale, animal for sale, this digital platform gives you the space
            to trade your agricultural products. This is the right place for
            buyers and primary sellers to connect directly. Whether you want to
            sell pets and other animals, food, and crops or want to buy those
            products, you have arrived at the right place.
            <br />
            You, as buyers and sellers, will love the experience because it has
            never been so easy before.
          </p>
          <h4>Why should I use FarmToTable?</h4>
          <p className="paraInfo">
            Our digital platform to connect people of similar interests is a
            great way to take your trading experience to the next level. With
            the concept and intention of bringing agricultural buyers and
            sellers into the same place, we developed this smart digital space.
            You do not need to worry and wander around to buy a pet now. Our
            space has made it easier for you to explore everything you want on
            your fingertips.
          </p>
          <p className="paraInfo">
            This platform is not only for the buyers but also for the primary
            sellers of the products. Farmers and producers! You can sell your
            products to the consumers without having to pay for the middleman
            that you may have been doing in the traditional trading system. We
            have created the proper platform for you to list your products and
            reach out to the bigger marketplace.
          </p>
          <p className="paraInfo">
            We are your sophisticated experience of trading animals and food
            products. The direct connection between buyers and sellers certainly
            brings you an easy and nice trading experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeCentreContent;
