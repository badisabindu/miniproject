// src/components/ProfileIcon.js
import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProfileIcon = () => {
  return (
    <div className="d-flex align-items-center">
        <Link to="/profile-edit">
            <i className="bi bi-person-circle" style={{ fontSize: '1.75rem', color: "#ffffff" }}></i>
            <span className="ml-3" style={{color:"#add8e6"}}>Your Name</span>
      </Link>
    </div>
  );
};

export default ProfileIcon;
