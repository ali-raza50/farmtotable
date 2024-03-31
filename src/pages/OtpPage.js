import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImg from "../img/loginImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import "../Styles/Register.css";
import "../Styles/OtpPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OTPInput from "react-otp-input";
import Timer from "../components/Time";
const OtpPage = () => {
  let navigate = useNavigate();
  const [otp, setOTP] = useState("");

  const verfiyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/v1/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        // Handle successful OTP verification here
        console.log("OTP verification successful");
        // Navigate to the homepage
        navigate("/"); // Replace '/' with the route of your homepage
      } else {
        // Handle failed OTP verification here
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error occurred while verifying OTP:", error.message);
    }
  };

  return (
    <>
      <Header />
      <h2 className="regTitle">Confirm OTP</h2>
      <div className="registerContainer">
        <div className="regFormContainer">
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={loginImg} className="img-fluid" alt="Sample" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form onSubmit={verfiyOTP}>
                    <h6>Confirmation Required</h6>
                    <p>Please Enter 4 Digit Code sent to your email address </p>
                    <OTPInput
                      value={otp}
                      onChange={setOTP}
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                      // inputStyle={true}
                      shouldAutoFocus
                      inputStyle="inputStyle1"
                    />
                    <Timer seconds={30} minutes={0} />
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        // onClick={() => verfiyOTP()}
                        className="btn btn-primary btn-lg"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                      >
                        Verify
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account?
                        <Link to="/Login" className="link-danger">
                          Login
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default OtpPage;
