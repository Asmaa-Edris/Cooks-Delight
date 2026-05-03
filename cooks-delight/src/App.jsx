import React, { useState, useEffect } from 'react'; // أضفنا hooks
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // أضفنا Router و useLocation
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Search from './pages/search/Search';
import Home from './pages/Home/Home';
import Tips from './pages/CookingTips/CookingTips'; 
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Recipies from './pages/Home/Recipes';

// Components
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Banner from './components/layout/banner/Banner';
import ScrollToTop from './components/common/ScrollToTop'; 
import Loader from './components/common/loader/Loader'; 
import ProtectedRoute from './components/ProtectedRoute';

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
      
      {/* التعديل هنا: شيلنا الـ Navbar من الشرط عشان يظهر دايماً */}
      <Navbar /> 

      <main style={{ minHeight: '80vh' }}>
        <Routes>
    {/* مسارات عامة الكل يشوفها */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<About />} />

    {/* مسارات محمية: لازم لوجن عشان يدخلها */}
    <Route element={<ProtectedRoute />}>
        <Route path="/recipes" element={<Recipies />} />
        <Route path="/recipe/:id" element={<Blog />} />
        <Route path="/tips" element={<Tips />} />
    </Route>
    
    <Route path="/search" element={<Search />} />
</Routes>
      </main>

      {/* الـ Banner والـ Footer يفضلوا مخفيين عادي في صفحات الـ Auth */}
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