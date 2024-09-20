import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingComponent from './Components/LandingComponent';
import LoginComponent from './Components/LoginComponent';
import SignupComponent from './Components/SignUpComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import SearchComponent from './Components/SearchComponent';
import CityComponent from './Components/CityComponent';
import AuthProvider from './Components/AuthProvider';
import ProfileEditComponent from './Components/ProfileEditComponent';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="d-flex flex-column min-vh-100">
          <HeaderComponent />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<LandingComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/signup" element={<SignupComponent />} />
              <Route path="/city" element={<CityComponent />} />
              <Route path="/search" element={<SearchComponent />} />
              <Route path="/profile-edit" element={<ProfileEditComponent />} />
              {/* <Route path="/test" element={<TestingComponent />} /> */}
            </Routes>
          </main>
          <FooterComponent />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
