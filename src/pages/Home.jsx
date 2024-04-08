import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeCentreContent from "../components/HomeCentreContent";
import HeroArea from "../components/HeroArea";
import Benefits from "../components/Benefits";
import AboutUsArea from "./About";
import ServicesArea from "../components/ServiceArea";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import FarmingAnimal from "../components/FarmingAnimals";
import TeamSection from "../components/TeamsSections";
import ContactUs from "./ContactUs";
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
        <NewsLetter />
        <FarmingAnimal />
        <TeamSection />
        <ContactUs />
        {/* <HomeCentreContent /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
