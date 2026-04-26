import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './pages/About/About'; 


function App() {
  return (
     <>
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<div>Welcome to Cooks Delight!</div>} />

            <Route path="/about" element={<About />} />
            
          </Routes>
        </div>
      </Router>
     </>
  
  );
}

export default App;