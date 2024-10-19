// // src/components/ProfileIcon.js
// import React, { useEffect,useState } from "react";
// import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from '../axiosSetup';
// // import user_model from "../../../backend/models/user_model";


// const ProfileIcon = () => {
//   const [userName,setUserName]=useState('')
//   const userId=localStorage.userId;
//   useEffect(()=>{
//     const userDetails=async () => {
//       try{
//         const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
//         // console.log(response);
//         setUserName(response.data.username);        

//       }
//       catch(err){
//         console.log(err)
//       }
//     }
//     userDetails();
//   })
//   return (
//     <div className="d-flex align-items-center">
//         <Link to="/profile-edit">
//             <i className="bi bi-person-circle mr-3" style={{ fontSize: '1.75rem', color: "#ffffff" }}></i>
//             <span className="ml-3" style={{color:"#add8e6"}}>{userName}</span>
//       </Link>
//     </div>
//   );
// };

// export default ProfileIcon;


// src/components/ProfileIcon.js
// src/components/ProfileIcon.js
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from '../axiosSetup';

const ProfileIcon = () => {
  const [userName, setUserName] = useState('');
  const userId = localStorage.userId;

  useEffect(() => {
    const userDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
        setUserName(response.data.username);
      } catch (err) {
        console.log(err);
      }
    };
    userDetails();
  }, [userId]); // Added userId as a dependency to useEffect

  // Get the first letter of the username
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <div className="d-flex align-items-center">
      <Link to="/profile-edit" className="d-flex align-items-center text-decoration-none" style={{ color: "#ffffff" }}>
        <div 
          className="d-flex justify-content-center align-items-center" 
          style={{
            fontSize: '2rem',  // Reduced size for the icon
            width: '40px',     // Smaller width
            height: '40px',    // Smaller height
            borderRadius: '50%', 
            backgroundColor: '#007bff', // Bootstrap primary color
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Reduced shadow for a smaller icon
            marginRight: '8px', // Adjusted margin
            position: 'relative',
          }}
        >
          <span 
            style={{
              fontSize: '1.2rem',  // Adjusted font size for the letter
              color: "#ffffff", 
              position: "absolute" 
            }}
          >
            {firstLetter}
          </span>
        </div>
        <span className="ms-1" style={{ fontSize: '0.9rem', color: "#add8e6" }}>{userName}</span> {/* Smaller font size for username */}
      </Link>
    </div>
  );
};

export default ProfileIcon;
