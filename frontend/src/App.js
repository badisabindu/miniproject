
import './App.css';
import LoginComponent from './Components/LoginComponent'
import SignupComponent from './Components/SignUpComponent';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<LoginComponent />}></Route>
         <Route path="/signup" element={<SignupComponent />}></Route>
    </Routes>
    </BrowserRouter>
    // <LoginComponent></LoginComponent>
    // <SignupComponent></SignupComponent>
   
  );
}

export default App;
