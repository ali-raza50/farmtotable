import React, { useState } from "react";
import UploadImages from "../components/UploadImages";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuccessMessage from "../components/SuccessMessage";
import { useNavigate } from "react-router-dom";

const MilkSubscription = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({});
  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductImagesChange = (images) => {
    setProductImages(images);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAdditionalDescriptionChange = (e) => {
    setAdditionalDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform save operation
    // For demonstration purposes, let's assume the save operation is successful
    setMessage({ type: "success", text: "Product saved successfully" });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <SuccessMessage /> */}
      <Header />
      <div className="bg-white border border-4 rounded-lg shadow relative m-20">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Milk Subscription Plan</h3>
          <button
            onClick={() => navigate("/sellerMenu")}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="productName"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Product Name"
                  value={productName}
                  onChange={handleProductNameChange}
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="select Plan"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Select Plan
                </label>
                <select
                  id="selectPlan"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                >
                  <option value="">Select Plan</option>
                  <option value="breed1">Daily</option>
                  <option value="breed2">Weekly </option>
                  <option value="breed3">Monthly </option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="weight"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Weight (in kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Weight"
                  value={weight}
                  onChange={handleWeightChange}
                  min="0" // Ensure non-negative value
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Price"
                  value={price}
                  onChange={handlePriceChange}
                  min="0" // Ensure non-negative value
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3 mb-4">
                <label
                  htmlFor="additionalDescription"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Additional Description
                </label>
                <textarea
                  id="additionalDescription"
                  rows="6"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Additional Description"
                  value={additionalDescription}
                  onChange={handleAdditionalDescriptionChange}
                  required
                ></textarea>
              </div>
              <div className="col-span-6 sm:col-span-3 mb-4">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Image
                </label>
                <UploadImages onChange={handleProductImagesChange} />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                onClick={handleSubmit}
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Save all
              </button>
              <SuccessMessage
                isOpen={showModal}
                message={message}
                onClose={closeModal}
              />
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MilkSubscription;
