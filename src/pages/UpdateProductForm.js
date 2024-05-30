import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuccessMessage from "../components/SuccessMessage";
import UploadImages from "../components/UploadImages";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import { useParams } from "react-router-dom";

const UpdateProductForm = () => {
  const { productId } = useParams();
  console.log(productId);
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [additional_description, setAdditionalDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({});

  // Load the product details for updating
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/Dairyproducts/getProduct/${productId}`
        );
        const product = response.data;
        setName(product.name);
        setPrice(product.price);
        setStock(product.stock);
        setWeight(product.weight);
        setAdditionalDescription(product.additional_description);
        // Set images if available
        if (product.images) {
          setImages(product.images);
        }
      } catch (error) {
        console.error("Failed to fetch product data", error);
      }
    };

    fetchData();
  }, [productId]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages([...selectedFiles]); // Replace previous images
    console.log("Files updated");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("weight", weight);
    formData.append("name", name);
    formData.append("additional_description", additional_description);
    formData.append("submittedBy", productId);

    images.forEach((image, index) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.put(
        `http://localhost:4000/api/Dairyproducts/updateDairy/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product updated successfully", response);

      // Optionally redirect or fetch product list again
    } catch (error) {
      console.error("Error updating product:", error.response?.data);
    }
  };

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
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Update Product
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="bg-white border border-4 rounded-lg shadow relative m-20">
        <form onSubmit={handleClick}>
          <div className="p-6 space-y-6">
            <h3 className="text-xl font-semibold">Update Dairy Product</h3>
            <div className="grid grid-cols-6 gap-6">
              {/* Product Name */}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              {/* Stock */}
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
                  min="0" // Ensure non-negative values
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                />
              </div>
              {/* Price */}
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
                  min="0" // Ensure non-negative values
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              {/* Select Weight */}
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
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                >
                  <option value="">Select Weight</option>
                  <option value="1kg">1kg</option>
                  <option value="2kg">2kg</option>
                  <option value="3kg">3kg</option>
                </select>
              </div>
              {/* Additional Description */}
              <div className="col-span-6">
                <label
                  htmlFor="additional_description"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Additional Description
                </label>
                <textarea
                  id="additional_description"
                  rows="3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Additional Description"
                  value={additional_description}
                  onChange={(e) => setAdditionalDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              {/* Image Upload */}
              <div className="col-span-6">
                <label
                  htmlFor="image"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Image (multiple allowed):
                </label>
                <input
                  type="file"
                  id="image"
                  name="images"
                  className="form-input"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
              >
                Update Product
              </button>
            </div>
          </div>
          {/* Success or Error Message */}
          <SuccessMessage
            isOpen={showModal}
            message={message}
            onClose={closeModal}
          />
        </form>
      </div>

      <Footer />
    </>
  );
};

export default UpdateProductForm;
