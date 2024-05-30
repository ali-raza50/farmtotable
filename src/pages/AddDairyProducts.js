import React, { useState } from "react";
import UploadImages from "../components/UploadImages";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuccessMessage from "../components/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import axios from "axios";

const AddProductForm = () => {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [weight, setWeight] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [name, setName] = useState();
  const [images, setImages] = useState([]);
  const [additional_description, setAdditionalDescription] = useState();

  const handleClick = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log("this was clicked");
    formData.append("price", price);

    formData.append("stock", stock);
    formData.append("weight", weight);
    formData.append("name", name);
    formData.append("additional_description", additional_description);

    formData.append("submittedBy", userData._id);
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`); // Here you will see all your FormData's key-value pairs
    }
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/Dairyproducts/addDairy",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response in create account for you", response);
      alert("product added successfuly");
      // navigate("/otpPage"); // Adjust the route as necessary
    } catch (error) {
      console.error(" error:", error.response.data);
    }
  };
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages([...images, ...selectedFiles]);
    console.log("this ran");
  };

  // const [productName, setProductName] = useState("");
  // const [productImages, setProductImages] = useState([]);
  // const [quantity, setQuantity] = useState("");
  // const [price, setPrice] = useState("");
  // const [additionalDescription, setAdditionalDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({});
  // const handleProductNameChange = (e) => {
  //   setProductName(e.target.value);
  // };

  // const handleProductImagesChange = (images) => {
  //   setProductImages(images);
  // };

  // const handleQuantity = (e) => {
  //   setQuantity(e.target.value);
  // };

  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };

  // const handleAdditionalDescriptionChange = (e) => {
  //   setAdditionalDescription(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage({ type: "success", text: "Product saved successfully" });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <div className="bg-white border border-4 rounded-lg shadow relative m-20">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Submit a Dairy Product</h3>
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
          <form onSubmit={handleClick}>
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
                  // value={productName}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="stock"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Stock (units)
                </label>
                <input
                  type="number"
                  id="stock"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Stock"
                  min="0" // Ensure non-negative value
                  required
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
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
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  min="0" // Ensure non-negative value
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="selectWeight"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Select Weight
                </label>
                <select
                  id="selectWeight"
                  name="weight"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                >
                  <option value="">Select Weight</option>
                  <option value="1kg">1kg</option>
                  <option value="2kg">2kg</option>
                  <option value="3kg">3kg</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="additional_description"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Additional Description
                </label>
                <textarea
                  id="additional_description"
                  rows="1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Additional Description"
                  value={additional_description}
                  onChange={(e) => {
                    setAdditionalDescription(e.target.value);
                    console.log(additional_description);
                  }}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image (multiple allowed):</label>
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="form-input"
                  multiple
                  required
                  onChange={handleFileChange}
                />
              </div>

              {/* <div className="col-span-6 sm:col-span-3 mb-4">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Image
                </label>
                <UploadImages onChange={handleProductImagesChange} />
              </div> */}
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
      {/* <SuccessMessage /> */}
      {/* {showSuccessModal && <SuccessMessage />} */}
      <Footer />
    </>
  );
};

export default AddProductForm;
