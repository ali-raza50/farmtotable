import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "#000000", animation: "fadeInUp 2s ease" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="/" className="me-4 text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="/" className="me-4 text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="me-4 text-white">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="/" className="me-4 text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="me-4 text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/" className="me-4 text-white">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" />
                Make Money with Us
              </h6>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Sell products on Farm to Table
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Become Seller on Farm to Table
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Advertise Your Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Provide Security to Business
                </a>
              </p>
            </Col>
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Livestock</h6>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Buy Goat
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Buy Cows
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Buy Sheep
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Buy Animal Feed
                </a>
              </p>
            </Col>
            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Milk Subscription
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Dairy Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Breed Prediction
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none">
                  Price Prediction
                </a>
              </p>
            </Col>
            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className="text-white">
                <FontAwesomeIcon icon={faHome} className="me-2" /> Lahore,
                Pakistan
              </p>
              <p className="text-white">
                <FontAwesomeIcon icon={faHome} className="me-2" /> Comsa,
                Pakistan
              </p>
              <p className="text-white">
                <FontAwesomeIcon icon={faPhone} className="me-3" /> 03124126458
              </p>
              <p className="text-white">
                <FontAwesomeIcon icon={faPrint} className="me-3" /> 03060590449
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "#000000", animation: "fadeInUp 1s ease" }}
      >
        © {currentYear} FarmToTable. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
