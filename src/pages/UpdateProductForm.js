import React, { useState, useEffect } from "react";
import UploadImages from "../components/UploadImages";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuccessMessage from "../components/SuccessMessage";

const UpdateProductForm = ({ productId }) => {
  const [productName, setProductName] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({});

  useEffect(() => {
    // Here, you would fetch the product data by productId and populate the form
    // This is just a placeholder for demonstration
    const fetchProduct = async () => {
      // Assume we get this data from an API call
      const productData = {
        productName: "Organic Whole Milk",
        productImages: [], // Assume we have URLs here
        weight: "1",
        price: "399",
        color: "White",
        additionalDescription: "Rich and creamy milk from grass-fed cows.",
      };

      setProductName(productData.productName);
      setProductImages(productData.productImages);
      setWeight(productData.weight);
      setPrice(productData.price);
      setColor(productData.color);
      setAdditionalDescription(productData.additionalDescription);
    };

    fetchProduct();
  }, [productId]); // Dependency array to refetch if productId changes

  const handleProductImagesChange = (images) => {
    setProductImages(images);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, perform the update operation instead of save
    setMessage({ type: "success", text: "Product updated successfully" });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <div class="max-w-3xl mx-auto text-center mt-16">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Update Product
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="bg-white border border-4 rounded-lg shadow relative m-20">
        {/* Form structure remains the same as AddProductForm */}
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
                  //   onChange={handleProductNameChange}
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="selectBreed"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Select Breed
                </label>
                <select
                  id="selectBreed"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                >
                  <option value="">Select Breed</option>
                  <option value="breed1">Breed 1</option>
                  <option value="breed2">Breed 2</option>
                  <option value="breed3">Breed 3</option>
                  <option value="breed4">Breed 4</option>
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
                  //   onChange={handleWeightChange}
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
                  //   onChange={handlePriceChange}
                  min="0" // Ensure non-negative value
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="color"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Color
                </label>
                <input
                  type="text"
                  id="color"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Color"
                  value={color}
                  //   onChange={handleColorChange}
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
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
                  //   onChange={handleAdditionalDescriptionChange}
                  required
                ></textarea>
              </div>
              <div className="col-span-6 sm:col-span-3">
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
                Update
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
      {showModal && (
        <SuccessMessage message={message.text} onClose={closeModal} />
      )}
      <Footer />
    </>
  );
};

export default UpdateProductForm;
