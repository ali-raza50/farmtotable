import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../components/context/AuthContext";

const OTPForm = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Countdown time in seconds
  const [otp, setOtp] = useState(Array(4).fill("")); // OTP state
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userData } = useAuth();

  const totalTime = 60;
  // Effect for countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);
  const circleCircumference = 2 * Math.PI * 40;
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false; // Ensure the character is a number

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to next input field if available
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const verifyOtp = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/verifyOtp",
        {
          otp: otp.join(""),
          email: userData.email,
        }
      );
      // console.log(response.data);
      toast.success("OTP Verification");
      setTimeout(() => {
        navigate("/"); // Adjust the route as necessary
      }, 2000); // Wait for 5 seconds before navigating
      // Redirect on successful verification
    } catch (error) {
      console.error(
        "Verification error:",
        error.response ? error.response.data : error
      );
      toast.error(error.response.data.message || "otp failed!");
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    setTimeLeft(60); // Reset the countdown timer

    try {
      // Call API to resend OTP. This is just a placeholder and needs to be replaced with your actual API call.
      console.log("Resending OTP...");
      // For demonstration, let's simulate an API response delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("OTP Resent.");
    } catch (error) {
      console.error("Error resending OTP:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto border max-w-sm mt-20 mb-20 rounded">
        <div className="shadow-md px-8 py-6">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
            OTP Verification
          </h2>

          <div className="flex justify-center items-center relative mb-5 mt-5">
            {/* SVG with Gradient */}
            <svg
              className="absolute"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <defs>
                <linearGradient
                  id="countdownGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" style={{ stopColor: "#ff105f" }} />
                  <stop offset="100%" style={{ stopColor: "#ffad06" }} />
                </linearGradient>
              </defs>
              <circle
                r="40"
                cx="60"
                cy="60"
                fill="none"
                stroke="url(#countdownGradient)"
                strokeWidth="4"
                strokeDasharray={circleCircumference}
                strokeDashoffset={
                  (circleCircumference * (totalTime - timeLeft)) / totalTime
                }
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <span className="text-1xl font-semibold z-10">{timeLeft}s</span>
          </div>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-2 mb-6">
            {otp.map((data, index) => (
              <input
                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={verifyOtp}
              className={`bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none ${
                isLoading && "opacity-75 cursor-not-allowed"
              }`}
            >
              {isLoading ? <Spinner /> : "Verify"}
            </button>
            <button
              disabled={timeLeft > 0}
              onClick={resendOtp}
              className={`font-bold text-sm ${
                timeLeft > 0
                  ? "text-gray-400"
                  : "text-teal-500 hover:text-teal-800"
              }`}
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default OTPForm;
