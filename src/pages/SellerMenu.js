import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faCheese,
  faTint,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";

const SellerMenu = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 mb-5 mt-5">
        <div className="lg:text-center pt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-indigo-800 tracking-wide">
            Seller Menu
          </h1>
        </div>
        <div className="mt-10 p-5 bg-white rounded-lg shadow">
          <div className="grid gap-5 lg:grid-cols-2 lg:max-w-none">
            {/* Card 1: Add Animal */}
            <div className="bg-blue-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className="text-5xl text-blue-600 mb-4"
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add Animal
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Add new animals to your inventory
                </p>
                <Link
                  to="/add-animal"
                  className="block mt-4 text-center text-blue-600 hover:text-blue-700"
                  style={{ textDecoration: "none" }}
                >
                  Add Animal
                </Link>
              </div>
            </div>
            {/* Card 2: Add Dairy Products */}
            <div className="bg-green-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faCheese}
                  className="text-5xl text-green-600 mb-4"
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add Dairy Products
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Add new dairy products to your inventory
                </p>
                <Link
                  to="/dairy-products"
                  className="block mt-4 text-center text-blue-600 hover:text-blue-700"
                  style={{ textDecoration: "none" }}
                >
                  Add Dairy Products
                </Link>
              </div>
            </div>
            {/* Card 3: Add Milk */}
            <div className="bg-yellow-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faTint}
                  className="text-5xl text-yellow-600 mb-4"
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add Milk
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Add new milk products to your inventory
                </p>
                <Link
                  to="/milksubscription"
                  className="block mt-4 text-center text-blue-600 hover:text-blue-700"
                  style={{ textDecoration: "none" }}
                >
                  Add Milk
                </Link>
              </div>
            </div>
            {/* Card 4: Analytics */}
            <div className="bg-red-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-5xl text-red-600 mb-4"
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Analytics
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  View analytics for your products
                </p>
                <Link
                  to="/analytics"
                  className="block mt-4 text-center text-blue-600 hover:text-blue-700"
                  style={{ textDecoration: "none" }}
                >
                  View Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellerMenu;
