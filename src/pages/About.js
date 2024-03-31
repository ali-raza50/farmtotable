import React from "react";
import about from "../img/about.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div
        className="row "
        style={{
          margin: 0,
          padding: 0,
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="col-md-6 ">
          <img src={about} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Farm To Table introduces a pioneering platform for livestock
            services, empowering consumers and farmers alike. With advanced
            technology, it facilitates transparent transactions and accurate
            predictions of goat weight and pricing. By promoting ethical farming
            practices, it fosters trust and sustainability in the agricultural
            sector. Join Farm To Table for quality livestock and a brighter
            future for farming communities.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
