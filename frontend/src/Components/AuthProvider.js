import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-bootstrap';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [token, setToken] = useState(() => {
        const savedToken = localStorage.getItem("token");
        return savedToken ? savedToken: null;
    });
    const [city, setCity] = useState(null);
    const[isLoggedIn,setIsLoggedIn]=useState(!!token)
    const[venueId,setVenueId]=useState([])
   // const [name,setName]=useState(null)
    const navigate = useNavigate();

    const LoginAction = async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/signup/login", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
           // setName(response.data.user.username);
            localStorage.setItem("userId", response.data.id);
            if (response.data && response.data.token) {
                setToken(response.data.token);
                localStorage.setItem("token", JSON.parse(response.data.token));
                navigate('/city');
            }
            return;
        } catch (err) {
            console.log(err);
        }
    };

    const logOut = () => {
        setToken(null);
        setIsLoggedIn(false)
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        // toast.success('Logged out successfully');
        alert("logged out succesfully") // Success toast message
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ city,setCity,LoginAction,token,logOut,isLoggedIn,setIsLoggedIn,venueId,setVenueId}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
