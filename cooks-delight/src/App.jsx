import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Banner from './components/layout/Banner/Banner'; 
import Loader from './components/common/Loader/Loader'; 
import ScrollToTop from './components/common/ScrollToTop'; 
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home/Home';
import About from './pages/About/About';
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
    const timer = setTimeout(() => setShowLoader(false), 800);
    return () => clearTimeout(timer);
  }, [location]); 

  return (
    <div className="App">
      {showLoader && <Loader />}
      
      <Navbar /> 

      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/tips" element={<ProtectedRoute><CookingTips /></ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        theme="colored"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}