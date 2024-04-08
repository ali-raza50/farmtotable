import React from "react";
import decor from "../img/decor.png";
import "../Styles/contactUs.css";
const ContactUs = () => {
  return (
    <section className="contact-area section-padding-100-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="contact-content mb-100">
              <div className="section-heading">
                <p>Contact now</p>
                <h2>
                  <span>Get In Touch</span> With Us
                </h2>
                <div className="">
                  <img src={decor} alt="deco" />
                </div>
              </div>
              <div className="contact-form-area">
                <form action="index.html" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Your Subject"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn famie-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-maps mb-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.4134254611604!2d74.21006887469117!3d31.402733652946203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University!5e0!3m2!1sen!2s!4v1712429901781!5m2!1sen!2s"
                allowfullscreen=""
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

// import React from "react";
// import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
// import contactUs from "../img/contactus.jpeg";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// const ContactUs = () => {
//   return (
//     <>
//       <Header />

//       <div
//         style={{
//           margin: 0,
//           padding: 0,
//           height: "70vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="col-md-6 " style={{ marginRight: "70px" }}>
//           <img src={contactUs} alt="contactus" style={{ width: "100%" }} />
//         </div>
//         <div className="col-md-4 ml-5">
//           <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
//           <p className="text-justify mt-2">
//             any query and info about product feel free to call anytime we 24X7
//             vaialible
//           </p>
//           <p className="mt-3">
//             <BiMailSend /> : ar0131701@gmail.com
//           </p>
//           <p className="mt-3">
//             <BiPhoneCall /> : 03124126458
//           </p>
//           <p className="mt-3">
//             <BiSupport /> : 03060590449
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactUs;
