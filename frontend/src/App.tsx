// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import MainHub from './pages/mainhub';
import ChildMode from './pages/childmode';
import Story from './pages/Story';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/MainHub" element={<MainHub />} />
        <Route path="/ChildMode" element={<ChildMode />} />
        <Route path="/Story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
