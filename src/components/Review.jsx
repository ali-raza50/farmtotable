import React, { useState } from "react";
import "../Styles/Review.css";

const ratings = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

function ProductReviewForm() {
  const [productRating, setProductRating] = useState(0);
  const [productRatingText, setProductRatingText] = useState("");

  const handleRating = (rating) => {
    setProductRating(rating);
    setProductRatingText(ratings[rating]);
  };

  return (
    <div className="product-review-container">
      <div className="product-container">
        <img
          className="product-image"
          src="path-to-your-product-image.jpg" // Replace with your product image path
          alt="Product Name"
        />
        <div className="product-details">
          <h3 className="product-title">Product Title</h3>
          <p className="product-description">Description of the product...</p>
        </div>
      </div>
      <div className="rating-container">
        <p className="rating-prompt">Select Product Rating</p>
        <div className="star-container">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`star ${index <= productRating ? "filled" : "empty"}`}
              onClick={() => handleRating(index)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="rating-text">{productRatingText}</div>
      </div>
      <button type="button" className="submit-button" onClick={handleRating}>
        Submit Review
      </button>
    </div>
  );
}

export default ProductReviewForm;
