import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Register from './pages/Register';
import Release from './pages/Release';
import Adopt from './pages/Adopt';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/register" element={<Register />} />
        <Route path="/release" element={<Release />} />
        <Route path="/adopt" element={<Adopt />} />
      </Routes>
    </div>
  );
}

export default App;