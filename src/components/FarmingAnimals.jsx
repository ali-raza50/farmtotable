import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow } from "@fortawesome/free-solid-svg-icons";
import decor2 from "../img/decor2.png";
import cow from "../img/cow.png";
import chicken from "../img/chicken.png";
import goatreverd from "../img/goatreverd.png";
import "../Styles/farmingAnimal.css";

const FarmingAnimal = () => {
  const farmingPractices = [
    {
      icon: faCow,
      title: "Chicken Farmed For Meat",
      description: "Fresh chicken with good quality...",
      imageUrl: chicken,
    },
    {
      icon: faCow,
      title: "Pakistani Goats",
      description: "Pakistani goats prized for meat quality....",
      imageUrl: goatreverd,
    },
    {
      icon: faCow,
      title: "Beef Cattle Farming",
      description: "Beef cattle farming involves raising cattle ....",
      imageUrl: cow,
    },
    // {
    //   icon: faCow,
    //   title: "Chicken Farmed For Meat",
    //   description: "Donec nec justo eget felis facilisis fermentum...",
    //   imageUrl: cow,
    // },
    // {
    //   icon: faCow,
    //   title: "Chicken Farmed For Meat",
    //   description: "Donec nec justo eget felis facilisis fermentum...",
    //   imageUrl: cow,
    // },
    // {
    //   icon: faCow,
    //   title: "Chicken Farmed For Meat",
    //   description: "Donec nec justo eget felis facilisis fermentum...",
    //   imageUrl: cow,
    // },
    // Repeat for other practices, modifying as necessary
  ];

  return (
    <section className="farming-practice-area ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <p>Make the green world</p>
              <h2>
                <span>Farming Practices</span> To Preserve Land & Water
              </h2>
              <div className="d-flex justify-content-center">
                <img src={decor2} alt="deco" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {farmingPractices.map((practice, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-farming-practice-area mb-50 wow fadeInUp"
                style={{
                  visibility: "visible",
                  animationDelay: `${100 * (index + 1)}ms`,
                  animationName: "fadeInUp",
                }}
              >
                <div className="farming-practice-thumbnail">
                  <img src={practice.imageUrl} alt="" />
                </div>
                <div className="farming-practice-content text-center">
                  <div className="farming-icon">
                    <FontAwesomeIcon icon={practice.icon} />{" "}
                    {/* Corrected usage */}
                  </div>
                  <span>Farming practice for</span>
                  <h4 className="title">{practice.title}</h4>
                  <p>{practice.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmingAnimal;
