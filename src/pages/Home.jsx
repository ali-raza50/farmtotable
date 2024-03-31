import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeCentreContent from "../components/HomeCentreContent";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <HomeCentreContent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
