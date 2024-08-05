import './App.css';
import LandingComponent from './Components/LandingComponent.js';
import LoginComponent from './Components/LoginComponent'
import SignupComponent from './Components/SignUpComponent';
import HeaderComponent from './Components/HeaderComponent.js';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FooterComponent from './Components/FooterComponent.js';
import SearchComponent from './Components/SearchComponent.js';
import CityComponent from './Components/CityComponent';
function App() {
  return (
    <BrowserRouter>
    <HeaderComponent></HeaderComponent>
    <Routes>
         <Route path="/" element={<LandingComponent />}></Route>
         <Route path="/login" element={<LoginComponent/>}></Route>
         <Route path="/signup" element={<SignupComponent />}></Route>
         <Route path="/city" element={<CityComponent/>}></Route>
         <Route path="/search" element={<SearchComponent/>}></Route>
    </Routes>
    <FooterComponent></FooterComponent>
    </BrowserRouter>
    // <LoginComponent></LoginComponent>
    // <SignupComponent></SignupComponent>
   
  );
}

export default App;
