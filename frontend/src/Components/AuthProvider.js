import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    // const [token, setToken] = useState(() => {
    //     const savedToken = localStorage.getItem("token");
    //     return savedToken ? JSON.parse(savedToken) : null;
    // });
    const [city, setCity] = useState(null);
    // const [name,setName]=useState(null)
    // const navigate = useNavigate();

    // const LoginAction = async (data) => {
    //     try {
    //         const response = await axios.post("http://localhost:5000/signup/login", data, {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
            //setName(response.data.user.username);
            // localStorage.setItem("userId", response.data.id);
            // if (response.data && response.data.token) {
            //     setToken(response.data.token);
            //     localStorage.setItem("token", JSON.stringify(response.data.token));
            //     navigate('/');
            // }
            // localStorage.setItem('role', JSON.stringify(response.data.role));
            // if (response.data.role === "admin") {
            //     navigate('/');
            // } else if (response.data.role === "user") {
            //     navigate('/');
            // }
            // return;
        // } catch (err) {
        //     console.log(err);
        // }
    // };

    // const logOut = () => {
    //     setToken(null);
    //     setRole(null);
    //     localStorage.removeItem("userId");
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("role");
    //     toast.success('Logged out successfully'); // Success toast message
    //     navigate('/login');
    // };

    return (
        <AuthContext.Provider value={{ city,setCity}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};