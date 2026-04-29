import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Banner from './components/layout/Banner/Banner'; 
import Loader from './components/common/Loader/Loader'; 
import About from './pages/About/About';
import Home from './pages/Home/Home';
import CookingTips from './pages/CookingTips/CookingTips';
import Login from './pages/Login/login'
function AppContent() {
  const [showLoader, setShowLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowLoader(true);

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]); 

  return (
    <div className="App">
      {showLoader && <Loader />}
      
      <Navbar /> 

      <main >
        <Routes>
          <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />

           <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
                  <Route path="/tips" element={<CookingTips />} />



        </Routes>
      </main>

      <Banner /> 
      <Footer /> 
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}