import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import register from "../img/registration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const ResetPassword = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Assuming email is passed via state from the previous page

  const [password, setpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post("http://localhost:8080/api/v1/resetPassword", {
        email,
        password,
      });

      toast.success("Password reset successful");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Reset password error:", error.response?.data);
      toast.error(error.response?.data?.message || "Reset password failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url(${register})`,
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center text-black logo">
              Farm To Table
            </h2>
            <p className="text-xl text-gray-600 text-center">Reset Password</p>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    New Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  />
                  <Link
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 no-focus-outline"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm New Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    required
                  />
                  <Link
                    // type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 "
                    onClick={toggleConfirmPasswordVisibility}
                    style={{ outline: "none" }}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className={`mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                    isLoading && "opacity-75 cursor-not-allowed"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : "Reset Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ResetPassword;
