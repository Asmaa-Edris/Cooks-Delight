import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<div>Welcome to Cooks Delight!</div>} />

            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </>

  );
}

export default App;