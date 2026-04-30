import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Banner from './components/layout/Banner/Banner'; 
import Loader from './components/common/Loader/Loader'; 
import ScrollToTop from './components/common/ScrollToTop'; 

import About from './pages/About/About';
import Home from './pages/Home/Home';
import CookingTips from './pages/CookingTips/CookingTips';
import Login from './pages/Login/login';
import Register from './pages/register/Register';

function AppContent() {
  const [showLoader, setShowLoader] = useState(false);
  const location = useLocation();

  const hideLayoutRoutes = ['/login', '/register'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  useEffect(() => {
    setShowLoader(true);
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, [location]); 

  return (
    <div className="App">
      {showLoader && <Loader />}
      <Navbar /> 

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tips" element={<CookingTips />} />
        </Routes>
      </main>

      {!shouldHideLayout && (
        <>
          <Banner />
          <Footer />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}