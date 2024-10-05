// src/components/ProfileIcon.js
import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from '../axiosSetup';
// import user_model from "../../../backend/models/user_model";


const ProfileIcon = () => {
  const [userName,setUserName]=useState('')
  const userId=localStorage.userId;
  useEffect(()=>{
    const userDetails=async () => {
      try{
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
        // console.log(response);
        setUserName(response.data.username);        

      }
      catch(err){
        console.log(err)
      }
    }
    userDetails();
  })
  return (
    <div className="d-flex align-items-center">
        <Link to="/profile-edit">
            <i className="bi bi-person-circle mr-3" style={{ fontSize: '1.75rem', color: "#ffffff" }}></i>
            <span className="ml-3" style={{color:"#add8e6"}}>{userName}</span>
      </Link>
    </div>
  );
};

export default ProfileIcon;
