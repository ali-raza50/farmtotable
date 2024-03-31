// AddProductForm.js
import React from "react";
import "../Styles/MilkSubscription.css"; // Import CSS file for styling
import Header from "../components/Header";
import Footer from "../components/Footer";

const MilkSubscription = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log("Form submitted");
    // Reset form fields if needed
    e.target.reset();
  };

  return (
    <>
      <Header />
      <div className="outsideFormContainer">
        <form className="form-container" onSubmit={handleSubmit}>
          <h2 className="form-title">Milk Subscription</h2>
          <div className="form-group">
            <label htmlFor="productName">Name:</label>
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
            <label htmlFor="selectBreed">Select Plan:</label>
            <select id="selectBreed" className="form-input" required>
              <option value="">Select Breed</option>
              <option value="breed1">Monthly</option>
              <option value="breed2">Weekly</option>
              <option value="breed3">Daily</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Phone:</label>
            <input type="tel" id="weight" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="price">Address:</label>
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

export default MilkSubscription;
