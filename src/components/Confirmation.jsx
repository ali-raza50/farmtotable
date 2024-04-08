import React, { useState } from "react";
import "../Styles/confirmation.css";

const Confirmation = ({ onConfirm }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleConfirm = () => {
    if (acceptedTerms) {
      // Call the onConfirm function to proceed
      onConfirm();
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="confirmation-container">
      <h2>Confirmation</h2>
      <p>
        Thank you for choosing our Farm to Table service! Before proceeding,
        please review and accept the following terms and conditions:
      </p>
      <ul>
        <li>Only organic and locally sourced produce will be delivered.</li>
        <li>
          All products are subject to availability and may vary based on
          seasonal availability.
        </li>
        <li>
          Prices are subject to change without prior notice. We strive to
          provide fair and competitive pricing for our customers.
        </li>
        <li>
          Your satisfaction is our top priority. If you have any concerns or
          inquiries, please don't hesitate to contact our customer support team.
        </li>
      </ul>
      <div>
        <label>
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />{" "}
          I have read and agree to the terms and conditions
        </label>
      </div>
      {/* <button onClick={handleConfirm}>Confirm</button> */}
    </div>
  );
};

export default Confirmation;
