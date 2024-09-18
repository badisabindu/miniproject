
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; 

import {Link,useNavigate} from "react-router-dom";
import React, { useState } from 'react';
import axios from '../axiosSetup';
import { useAuth } from './AuthProvider';
//import {toast} from 'react-toastify';

function LoginComponent() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const{setIsLoggedIn,token}=useAuth();
    //const {LoginAction} = useAuth()
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/login', {
            email,
            password,
          });
          console.log(response)
          localStorage.setItem('token', response.data.token);
          setIsLoggedIn(true)
          setMessage(response.data.message);
          alert(response.data.message);
          navigate('/city');
        }  catch (error) {
            setMessage('Login failed: ' + error.response.data.message);
            alert(error.response.data.message)
          }
        };
      

    return (
    <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100vh',
                backgroundImage: 'url(https://wallpapercave.com/wp/wp4756926.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-muted mb-4 text-center">Log In</h3>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">E-Mail</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" onClick={handleLogin} className="btn btn-primary w-100">Log In</button>
                    <p className="mt-3 text-center">
                        Don't have an account? <Link to="/signup" className="text-primary">Sign Up</Link>
                    </p>
                </form>
                <p className="text-center text-danger mt-2">{message}</p>
            </div>
        </div>
    );


};
export default LoginComponent;
