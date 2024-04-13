import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ali from "../img/myImg.jpg";

import "../Styles/Header.css"; // Ensure this path matches your file structure
import SearchComponent from "./SearchComponent";
import UserDropdown from "./UserDropdown";
import axios from "axios";
import { useAuth } from "../components/context/AuthContext.jsx";
const Header = () => {
  const { isLoggedIn, userData } = useAuth(); // ye context folder sy h jo hum ny banaya h khud sy sy h
  const [userdata, setUserdata] = useState({}); // ye google auth sy data aya h
  // const { setIsLoggedIn, setUserData } = useAuth();
  console.log("header mey", isLoggedIn);
  console.log("header mey", userData);
  // console.log("response", userdata);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearchVisibility = () => setIsSearchVisible(!isSearchVisible);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownVisible && !event.target.closest(".user-dropdown")) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isDropdownVisible]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/login/sucess", {
        withCredentials: true,
      });

      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  // logoout
  const logout = () => {
    window.open("http://localhost:8080/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log("userdata:", userdata);
  console.log("userData:", userData);

  // if (isLoggedIn) {
  //   userDataToPass = userData; // ye normal login k liye
  // } else {
  //   userDataToPass = userdata; // ye jab sign in with google select kary ga
  // }
  const userDataToPass = isLoggedIn ? userData : userdata;
  console.log("userDataToPass: ", userDataToPass);
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

            {/* login with google auth */}
            {Object?.keys(userdata)?.length > 0 ? (
              <>
                {/* <li style={{ color: "white", fontWeight: "bold" }}>
                  {userdata?.displayName}
                </li> */}
                <li
                  onClick={toggleDropdown}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <img
                    src={userdata?.image}
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                    alt="userimage"
                  />
                  {isDropdownVisible && (
                    <UserDropdown userData={userdata} onLogout={logout} />
                  )}
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            {/* login with google auth end here***********/}

            {/* normal login */}
            {/* {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile">{userData.name}</Link>
                </li>
                <li>
                  <button>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )} */}

            {/* normal login end here */}
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
