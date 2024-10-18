
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home'; 
import About from './components/about'; 
import Contact from './components/contact'; 


function App() {
 
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      
      <Footer />
    </div>
   
  
  );
}

export default App;
