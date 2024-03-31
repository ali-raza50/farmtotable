import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import loginImg from "../img/loginImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import "../Styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { OtpContext } from "../components/OtpContext";
const CreateAccount = () => {
  const { setOtpInfo } = useContext(OtpContext);
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("sahi chal raha h"); // Display success message
      const response = await axios.post(
        "http://localhost:8080/api/v1/signup",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json", // Set the Content-Type header to JSON
          },
        }
      );
      // Redirect user to success page or perform other actions

      navigate("/otpPage");
    } catch (error) {
      console.error("error h", error); // Display error message
      // Handle error
    }
  };
  return (
    <>
      <Header />
      <h2 className="regTitle">Registeration Form</h2>
      <div className="registerContainer">
        <div className="regFormContainer">
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={loginImg} className="img-fluid" alt="Sample" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form onSubmit={handleSubmit}>
                    <InputField
                      label="name"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      icon={faUser}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      icon={faEnvelope}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                      label="Password"
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      icon={faLock}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputField
                      label="Confirm Password"
                      name="confirmPassword"
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      icon={faLock}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        // onClick={() => nagigateToOtp()}
                        className="btn btn-primary btn-lg"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                      >
                        Register
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
      <Footer />
    </>
  );
};

const InputField = ({
  label,
  name,
  id,
  type,
  placeholder,
  icon,
  value,
  onChange,
}) => (
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor={id}>
      {label}
    </label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        <FontAwesomeIcon icon={icon} />
      </span>
      <input
        type={type}
        id={id}
        className="form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default CreateAccount;