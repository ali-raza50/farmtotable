// UserDropdown.js
import React from "react";
import { Link } from "react-router-dom";

const UserDropdown = ({ userData, onLogout }) => (
  <div
    className="user-dropdown"
    style={{
      position: "absolute",
      right: "-100px",
      top: "45px",
      backgroundColor: "#000000",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      width: "200px",
      zIndex: "1000",
    }}
  >
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      {userData?.name || "farzi"}
    </div>
    <div style={{ borderBottom: "1px solid #ccc" }}>
      <Link
        to="/userProfile"
        style={{
          padding: "10px",
          display: "block",
          color: "white",
          textDecoration: "none",
        }}
      >
        Profile
      </Link>
    </div>
    <div style={{ padding: "10px", cursor: "pointer" }} onClick={onLogout}>
      Logout
    </div>
  </div>
);

export default UserDropdown;
