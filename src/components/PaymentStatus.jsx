// PaymentStatus.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PaymentStatus = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg m-10">
        <h1 className="text-3xl font-bold mb-4">Payment Module Status</h1>
        <p className="text-lg mb-4">
          We are currently working on implementing the payment module. Thank you
          for your patience!
        </p>
        <p className="text-lg mb-4">
          If you have any questions or concerns, please contact our support
          team.
        </p>
        {/* You can add more content here as needed */}
      </div>
      <Footer />
    </>
  );
};

export default PaymentStatus;
