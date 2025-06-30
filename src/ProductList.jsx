// src/ProductList.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  const plantsArray = [ /* your categories & plants */ ];

  return (
    <div className="product-grid">
      {plantsArray.map((cat, idx) => (
        <section key={idx}>
          <h2>{cat.category}</h2>
          <div className="product-list">
            {cat.plants.map((plant,i) => (
              <div className="product-card" key={i}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>${plant.cost}</p>
                <button
                  className={`product-button ${
                    addedToCart[plant.name] ? 'added-to-cart' : ''
                  }`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
