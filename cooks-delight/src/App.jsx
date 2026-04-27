import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Search from './pages/search/Search';
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
            <Route path="/search" element={<Search />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </>

  );
}

export default App;