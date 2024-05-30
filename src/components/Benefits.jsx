import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/benefits.css";
import farmimg from "../img/farmimg.png";
import digger from "../img/digger.png";
import dairyproduct from "../img/dairyproduct.png";
import animalicon1 from "../img/animalicon1.png";
import milkServices from "../img/milkServices.png";
import detetcBreed from "../img/detetcBreed.png";
import predictPrice from "../img/predictPrice.png";
import { Link } from "react-router-dom";

const Benefits = () => {
  useEffect(() => {
    // Ensure the animation is applied on component mount
    const benefitsAreas = document.querySelectorAll(".single-benefits-area");
    benefitsAreas.forEach((area) => {
      area.classList.add("fadeInUp");
      // After animation ends, remove the class to keep elements visible
      // area.addEventListener("animationend", () => {
      //   area.classList.remove("fadeInUp");
      // });
    });
  }, []);

  return (
    <section className="famie-benefits-area section-padding-100-0 pb-5">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="benefits-thumbnail mb-5">
              <img src={farmimg} alt="" />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={4} lg>
            <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
              <img
                src={predictPrice}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <h5>Predict Price</h5>
            </div>
          </Col>
          <Col xs={12} sm={4} lg>
            <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
              <img
                src={detetcBreed}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <h5>Detect Breed</h5>
            </div>
          </Col>
          <Col xs={12} sm={4} lg>
            <Link
              to="/dairyProducts"
              className="single-benefit-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
                <img
                  src={dairyproduct}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
                <h5>Dairy Products</h5>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={4} lg>
            <Link
              to="/animal"
              className="single-benefit-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
                <img
                  src={animalicon1}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
                <h5>Animals</h5>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={4} lg>
            <Link
              to="/milksubscription"
              className="single-benefit-link"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
                <img
                  src={milkServices}
                  alt=""
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
                <h5>Milk Services</h5>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
