import React from "react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import contactUs from "../img/contactus.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <>
      <Header />

      <div
        style={{
          margin: 0,
          padding: 0,
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="col-md-6 " style={{ marginRight: "70px" }}>
          <img src={contactUs} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4 ml-5">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : ar0131701@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 03124126458
          </p>
          <p className="mt-3">
            <BiSupport /> : 03060590449
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
