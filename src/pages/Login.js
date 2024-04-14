import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import register from "../img/registration.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { useAuth } from "../components/context/AuthContext.jsx";
const Login = () => {
  let navigate = useNavigate();

  // State for storing email and password input values
  const { setIsLoggedIn, setUserData } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loginwithgoogle = () => {
    console.log("mery andhar hns");
    window.open("http://localhost:8080/auth/google/callback", "_self");
    getUser();
  };

  const getUser = async () => {
    console.log("running");
    try {
      const response = await axios.get("http://localhost:8080/login/sucess", {
        withCredentials: true,
      });
      console.log("getuser data called");
      setUserData(response.data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  function nagigateToOtp() {
    if (email) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      // setOTP(OTP);
      toast.info("Please check your email for otp");
      axios
        .post("http://localhost:8080/send_recovery_email", {
          OTP,
          recipient_email: email,
        })
        .then(() => navigate("/resetOtp", { state: { email: email } }))
        .catch(console.log);
      return;
    }
    return toast.error("Please enter your email");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/v1/login", {
        email,
        password,
      });
      // Assuming the API returns a success message or similar
      console.log("login data check", response.data);
      // Assuming the API returns user data upon successful login
      const userData = response.data.user;
      console.log("user data check in login page", userData);
      // Update authentication state and user information
      setIsLoggedIn(true);
      setUserData(userData);
      // Save user data to localStorage
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", true);
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/"); // Navigate to home page or dashboard as needed
      }, 2000);
    } catch (error) {
      console.error("Login error:", error.response.data);
      toast.error(error.response.data.message || "Login failed!");
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
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <Link
              onClick={loginwithgoogle}
              to=""
              class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div class="px-4 py-3">
                <svg class="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h6 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h6>
            </Link>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <Link className="text-xs text-center text-gray-500 uppercase">
                or login with email
              </Link>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <Link
                    className="text-xs text-gray-500"
                    onClick={() => nagigateToOtp()}
                  >
                    Forget Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 pr-10 block w-full appearance-none"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Link
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 no-focus-outline"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
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
                  {isLoading ? <Spinner /> : "Login"}
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/register" className="text-xs text-gray-500 uppercase">
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
