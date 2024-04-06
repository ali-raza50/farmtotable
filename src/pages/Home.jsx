import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeCentreContent from "../components/HomeCentreContent";
import HeroArea from "../components/HeroArea";
import Benefits from "../components/Benefits";
import AboutUsArea from "./About";
import ServicesArea from "../components/ServiceArea";
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <HeroArea />
        <Benefits />
        <AboutUsArea />
        <ServicesArea />
        <Products />
        {/* <HomeCentreContent /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
