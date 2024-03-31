import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImg from "../img/loginImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faGoogle,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [OTP, setOTP] = useState();
  const SocialButton = ({ icon, onClick }) => {
    return (
      <button onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  };
  const loginwithgoogle = () => {
    console.log("mery andhar hns");
    window.open("http://localhost:8080/auth/google/callback", "_self");
  };
  function nagigateToOtp() {
    if (email) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      // setOTP(OTP);

      axios
        .post("http://localhost:8080/send_recovery_email", {
          OTP,
          recipient_email: email,
        })
        .then(() => navigate("/resetOtp", { state: { email: email } }))
        .catch(console.log);
      return;
    }
    return alert("Please enter your email");
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestBody = {
      email,
      password,
    };
    try {
      console.log(email);
      const response = await axios.post(
        "http://localhost:8080/api/v1/login",
        requestBody
      );
      if (response.status === 200) {
        console.log("Login successful!");
        navigate("/");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Header />
      <h2 className="loginFormTitle">Login Form</h2>
      <div className="loginContainer">
        <div className="loginFormContainer">
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={loginImg} className="img-fluid" alt="Sample" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                      <SocialButton icon={faFacebookF} />
                      <SocialButton icon={faGoogle} onClick={loginwithgoogle} />
                      ;
                      <SocialButton icon={faLinkedin} />
                    </div>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>
                    <InputField
                      label="Email address"
                      name="email"
                      id="form3Example3"
                      type="email"
                      placeholder="Enter a valid email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                      label="Password"
                      name="password"
                      id="form3Example4"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Remember me
                        </label>
                      </div>

                      {/* <Link to="/forgotPassword" className="text-body" onClick={() => nagigateToOtp()}> */}
                      <Link
                        className="text-body"
                        onClick={() => nagigateToOtp()}
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <Link to="/register" className="link-danger">
                          Register
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

const SocialButton = ({ icon }) => (
  <button type="button" className="btn btn-primary btn-floating mx-1">
    <FontAwesomeIcon icon={icon} />
  </button>
);

const InputField = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
  placeholder,
}) => (
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="form-control form-control-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Login;
