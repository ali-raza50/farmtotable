import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImg from "../img/loginImg.png";
import "../Styles/ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <h2 className="forgotFormTitle">Forgot Password</h2>
      <div className="forgotContainer">
        <div className="forgotFormContainer">
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={loginImg} className="img-fluid" alt="Sample" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                    <p>
                      Please enter the code that is sent to your email
                      <strong> ****1701@gmail.com</strong>
                    </p>
                    <InputField
                      label="Verification code"
                      id="code"
                      type="text"
                      placeholder="Enter the code sent to your email"
                    />
                    <InputField
                      label="New password"
                      id="password"
                      type="password"
                      placeholder="Enter your new password"
                    />
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button type="button" className="btn btn-primary btn-md">
                        Reset Password
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Remember your password?{" "}
                        <Link to="/login" className="link-danger">
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
      <Footer />
    </>
  );
};

const InputField = ({ label, id, type, placeholder }) => (
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="form-control form-control-lg"
      placeholder={placeholder}
    />
  </div>
);

export default ForgotPassword;
