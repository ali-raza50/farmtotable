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

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" />
                Make Money with Us
              </h6>

              <p>
                <a href="#!" className="text-reset">
                  Sell products on Farm to Table
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Become Seller on Farm to Table
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Advertise Your Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Provide Security to Bussiness
                </a>
              </p>
            </Col>
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Livestock</h6>
              <p>
                <a href="#!" className="text-reset">
                  Buy Goat
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Buy Cows
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Buy Sheep
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Buy Animal Feed
                </a>
              </p>
            </Col>
            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href="#!" className="text-reset">
                  Milk Subscription
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dairy Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Breed Prediction
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Price Prediction
                </a>
              </p>
            </Col>
            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-2" /> Lahore,
                Pakistan
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />{" "}
                ar0131701@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> 03124126458
              </p>
              <p>
                <FontAwesomeIcon icon={faPrint} className="me-3" /> 03060590449
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {currentYear} Copyright:
        <a className="text-reset fw-bold" href="https://farmtotable.com/">
          FarmToTable
        </a>
      </div>
    </footer>
  );
}

export default App;
