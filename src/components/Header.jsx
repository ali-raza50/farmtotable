import React, { useState } from "react";
import "../Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faShoppingCart,
  faUserCog,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Farm to Table</div>

      {/* Navigation Links and Hamburger Icon */}
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          {isSearchVisible && (
            <div
              className={`search-container ${isSearchVisible ? "visible" : ""}`}
            >
              <input type="text" placeholder="Search..." />
            </div>
          )}
          <li>
            <a href="#" onClick={toggleSearchVisibility}>
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
          <li>
            <a href="/search">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
        </ul>

        {/* Search */}
        <div className="search-container"></div>

        {/* Hamburger menu icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>

      {/* Sidebar menu */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        {/* Close button */}
        <button className="close-btn" onClick={closeMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Sidebar links */}
        <ul className="sidebar-links">
          <li>
            <a href="/sellerRegister">Become a Seller</a>
          </li>
          <li>
            <a href="/manage-listings">Manage Your Listings</a>
          </li>
          <li>
            <a href="/sellerProfile">Manage Your Account</a>
          </li>
        </ul>
      </div>
    </nav>
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
