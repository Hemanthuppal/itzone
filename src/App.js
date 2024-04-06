import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Home from './Home';
import Service from './Service';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
