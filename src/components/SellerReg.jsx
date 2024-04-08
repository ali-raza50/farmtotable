import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../Styles/stepper.css";
import SellerPersonalDetails from "./SellerPersonalDetails";
import Address from "./Address";
import Confirmation from "./Confirmation";
import Stepper from "./Stepper";
import Header from "./Header";
import Footer from "./Footer";

const SellerReg = () => {
  const navigate = useNavigate(); // Get navigate function from React Router

  const [activeStep, setActiveStep] = useState(0);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const steps = ["User details", "Address", "Confirmation"];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return (
          <SellerPersonalDetails onNext={() => setActiveStep(activeStep + 1)} />
        );
      case 1:
        return <Address onNext={() => setActiveStep(activeStep + 1)} />;
      case 2:
        return <Confirmation onConfirm={() => setRegistrationComplete(true)} />;
      default:
        return null;
    }
  }

  function handlePrevious() {
    setActiveStep(activeStep - 1);
  }

  function handleNext() {
    if (activeStep === steps.length - 1) {
      // Proceed to seller menu
      alert("Your account has been created successfully!");
      navigate("/sellerMenu"); // Navigate to seller menu route using navigate function
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  return (
    <>
      <Header />
      <div className="container1">
        <div className="container2">
          <h1 className="center-heading">Seller Registration</h1>
          {!registrationComplete && (
            <p style={{ textAlign: "center", marginBottom: "20px" }}>
              Your account is inactive until registration.
            </p>
          )}
          <hr style={{ backgroundColor: "black" }} />
          {!registrationComplete && (
            <Stepper steps={steps} activeStep={activeStep} />
          )}
          {!registrationComplete && (
            <div style={{ padding: "20px" }}>
              {getSectionComponent()}
              <div style={{ textAlign: "center" }}>
                {activeStep !== 0 && (
                  <button className="stepper-button" onClick={handlePrevious}>
                    Previous
                  </button>
                )}
                {activeStep !== steps.length - 1 && (
                  <button className="stepper-button" onClick={handleNext}>
                    Next
                  </button>
                )}
                {activeStep === steps.length - 1 && (
                  <button className="stepper-button" onClick={handleNext}>
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellerReg;
