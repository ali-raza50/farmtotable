import React, { useEffect, useState } from "react";
import "../Styles/Header.css";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faShoppingCart,
  faUserCog,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import Pakistan from "../img/Pakistan.png";
import farmLogo from "../img/farmtotablelogo.webp";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  return (
    <nav className="navbar">
      <div className="logo">Farm to Table </div>
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
