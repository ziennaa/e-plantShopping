// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Landing from './Landing';
import ProductList from './ProductList';
import CartPage from './CartItem';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar will always show */}
      <Navbar />

      {/* These URLs render the three pages */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
