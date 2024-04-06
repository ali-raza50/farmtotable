// import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div>
      <Link to="/review">
        <button>Review</button>
      </Link>
    </div>
  );
};

export default Orders;
