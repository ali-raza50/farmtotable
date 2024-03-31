import React from "react";
import "../Styles/AddProduct.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddProductForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    e.target.reset();
  };

  return (
    <>
      <Header />
      <div className="outsideFormContainer">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 className="form-title">Submit a Product</h2>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalDescription">
              Additional Description:
            </label>
            <textarea
              id="additionalDescription"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="selectBreed">Select Breed:</label>
            <select id="selectBreed" className="form-input" required>
              <option value="">Select Breed</option>
              <option value="breed1">Breed 1</option>
              <option value="breed2">Breed 2</option>
              <option value="breed3">Breed 3</option>
              <option value="breed4">Breed 4</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (in kg):</label>
            <input type="number" id="weight" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" className="form-input" required />
          </div>
          <button type="submit" className="form-button">
            Add Product
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddProductForm;
