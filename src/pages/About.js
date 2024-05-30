import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/about.css";
import wheat from "../img/wheatBack.png";
import deco from "../img/decor.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const AboutUsArea = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="about-us-area">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <div className="about-us-content mb-100">
                <div className="section-heading">
                  <p>About us</p>
                  <h2>
                    <span>Let Us</span> Tell You Our Story
                  </h2>
                  <img src={deco} alt="" />
                </div>
                <p>
                  We have made a platform to connect local farmers with people
                  of pakistan.Our platform will serve as a single source of
                  buing dairy products, milk and goats.We have also trained
                  Machine learning models which will predict breed and prices of
                  goats in order to make our platform unique.
                </p>

                <Link
                  style={{ textDecoration: "none" }}
                  to="/animal"
                  className="btn famie-btn mt-30"
                >
                  See Products
                </Link>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="famie-video-play mb-100">
                <img src={wheat} alt="" />
                <a
                  href="https://youtu.be/bEbKy9TiZHU?si=_1A_1rdlpNtk_Ct3"
                  className="play-icon"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default AboutUsArea;

// import React from "react";
// import about from "../img/about.jpeg";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const About = () => {
//   return (
//     <>
//       <Header />
//       <div
//         className="row "
//         style={{
//           margin: 0,
//           padding: 0,
//           height: "70vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="col-md-6 ">
//           <img src={about} alt="contactus" style={{ width: "100%" }} />
//         </div>
//         <div className="col-md-4">
//           <p className="text-justify mt-2">
//             Farm To Table introduces a pioneering platform for livestock
//             services, empowering consumers and farmers alike. With advanced
//             technology, it facilitates transparent transactions and accurate
//             predictions of goat weight and pricing. By promoting ethical farming
//             practices, it fosters trust and sustainability in the agricultural
//             sector. Join Farm To Table for quality livestock and a brighter
//             future for farming communities.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default About;
