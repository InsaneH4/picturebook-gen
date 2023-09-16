// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import MainHub from './pages/mainhub';
import Childmode from './pages/childmode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainhub" element={<MainHub />} />
        <Route path="/Childmode" element={<Childmode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
