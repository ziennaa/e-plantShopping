// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          🛒 {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
