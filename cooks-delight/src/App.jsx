import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Search from './pages/search/Search';
import Home from './pages/Home/Home';
import Tips from './pages/CookingTips/CookingTips';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Recipies from './pages/Home/Recipes';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipies />} />
        <Route path="/recipe/:id" element={<Blog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;