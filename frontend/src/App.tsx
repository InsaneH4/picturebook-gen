// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import MainHub from './pages/mainhub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainhub" element={<MainHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;