import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/benefits.css";
import farmimg from "../img/farmimg.png";
import digger from "../img/digger.png";
const Benefits = () => {
  useEffect(() => {
    // Ensure the animation is applied on component mount
    const benefitsAreas = document.querySelectorAll(".single-benefits-area");
    benefitsAreas.forEach((area) => {
      area.classList.add("fadeInUp");
    });
  }, []);

  return (
    <section className="famie-benefits-area section-padding-100-0 pb-5">
      <Container>
        <Row>
          <Col xs={12}>
            <div
              className="benefits-thumbnail mb-5"
              style={{ marginTop: "100px" }}
            >
              <img src={farmimg} alt="" />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col xs={12} sm={4} lg>
            <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
              <img src={digger} alt="" />
              <h5>Predict Price</h5>
            </div>
          </Col>
          <Col xs={12} sm={4} lg>
            <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
              <img src={digger} alt="" />
              <h5>Detect Breed</h5>
            </div>
          </Col>
          <Col xs={12} sm={4} lg>
            <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
              <img src={digger} alt="" />
              <h5>Dairy Products</h5>
            </div>
          </Col>
          <Col xs={12} sm={4} lg>
            <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
              <img src={digger} alt="" />
              <h5>Animals</h5>
            </div>
          </Col>
          <Col xs={12} sm={4} lg>
            <div className="single-benefits-area wow mb-50 d-flex flex-column align-items-center">
              <img src={digger} alt="" />
              <h5>Milk Services</h5>
            </div>
          </Col>

          {/* Repeat for other columns */}
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
