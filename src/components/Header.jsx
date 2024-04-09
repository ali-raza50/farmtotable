import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Header.css"; // Ensure this path matches your file structure
import SearchComponent from "./SearchComponent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearchVisibility = () => setIsSearchVisible(!isSearchVisible);

  useEffect(() => {
    // Add or remove 'no-scroll' class to body based on menu open state
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",

          zIndex: isMenuOpen ? 999 : -1, // Control with zIndex
          display: isMenuOpen ? "block" : "none",
          transition: "opacity 0.5s",
        }}
      ></div>
      <nav className="navbar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="menu-icon"
            onClick={toggleMenu}
            style={{ marginRight: "20px" }}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
          <Link to="/">
            <div className="logo">Farm to Table</div>
          </Link>
        </div>

        {isSearchVisible && (
          <div className="search-container">
            <SearchComponent />
          </div>
        )}

        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <a href="#" onClick={toggleSearchVisibility}>
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
          </ul>
        </div>

        <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="sidebar-links">
            <li>
              <Link to="/sellerRegister" onClick={toggleMenu}>
                Become a Seller
              </Link>
            </li>
            <li>
              <Link to="/myProducts" onClick={toggleMenu}>
                Manage Your Listings
              </Link>
            </li>
            <li>
              <Link to="/sellerProfile" onClick={toggleMenu}>
                Manage Your Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

// import React, { useEffect, useState } from "react";
// import "../Styles/Header.css";

// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import {
//   faShoppingCart,
//   faUserCog,
//   faCaretDown,
// } from "@fortawesome/free-solid-svg-icons";

// import Pakistan from "../img/Pakistan.png";
// import { Link, NavLink } from "react-router-dom";
// import axios from "axios";
// function Header() {
//   const [userdata, setUserdata] = useState({});
//   console.log("response", userdata);

//   const getUser = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/login/sucess", {
//         withCredentials: true,
//       });

//       setUserdata(response.data.user);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // logoout
//   const logout = () => {
//     window.open("http://localhost:8080/logout", "_self");
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   return (
//     <div className="header">
//       <div className="nav1">
//         <div className="logoContainer">
//           <p className="logo">Farm To Table</p>
//         </div>
//         <InputGroup style={{ width: "424px" }}>
//           <FormControl id="search-focus" type="search" placeholder="Search" />
//           <Button
//             variant="primary"
//             style={{ backgroundColor: "#5BE719", borderColor: "#5BE719" }}
//           >
//             <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
//           </Button>
//         </InputGroup>

//         <span className="certified">Get Certified</span>
//         <FontAwesomeIcon icon={faShoppingCart} />
//         <Link to="sellerMenu">
//           <FontAwesomeIcon icon={faUserCog} />
//         </Link>
//         <img src={Pakistan} alt="pakistan flag" />
//         <span>
//           <strong>English</strong>&nbsp;
//           <FontAwesomeIcon icon={faCaretDown} />
//         </span>
//       </div>

//       <div className="horizontal-line"></div>

//       <div className="nav2">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/my-services">Our Services</Link>
//           </li>
//           {/* <li>
//             <Link to="/help">Help & Support</Link>
//           </li> */}
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//         <ul>
//           {Object?.keys(userdata)?.length > 0 ? (
//             <>
//               <li style={{ color: "black", fontWeight: "bold" }}>
//                 {userdata?.displayName}
//               </li>

//               <li style={{ cursor: "pointer" }} onClick={logout}>
//                 Logout
//               </li>
//               <li>
//                 <img
//                   src={userdata?.image}
//                   style={{ width: "20px", borderRadius: "50%" }}
//                   alt=""
//                 />
//               </li>
//             </>
//           ) : (
//             <li>
//               <NavLink to="/login">Login</NavLink>
//             </li>
//           )}
//           {/* <li>
//             <Link to="/register" className="create-account">
//               Create Account
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className="login">
//               Login
//             </Link>
//           </li> */}
//         </ul>
//       </div>

//       <div className="horizontal-line" style={{ marginTop: "-17px" }}></div>
//     </div>
//   );
// }

// export default Header;
