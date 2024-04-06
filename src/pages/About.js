import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/about.css";
import wheat from "../img/wheatBack.png";
import deco from "../img/decor.png";
const AboutUsArea = () => {
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                nunc elit, pretium at urna vel, fermentum malesuada mi. Donec
                auctor nisi nec neque sagittis, sit amet dapibus pellentesque
                dolor feugiat. Nulla mollis magna non consequat, volutpat dolor
                ut, ultrices consectetur, ultrices at purus.
              </p>
              <a href="#" className="btn famie-btn mt-30">
                Read More
              </a>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="famie-video-play mb-100">
              <img src={wheat} alt="" />
              <a
                href="https://www.youtube.com/watch?v=7HKoqNJtMTQ"
                className="play-icon"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
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
