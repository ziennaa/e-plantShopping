// src/CartItem.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { useNavigate } from 'react-router-dom';
import './CartItem.css';

export default function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Total cost of all items:
  const calculateTotalAmount = () =>
    cart
      .reduce((sum, it) => sum + parseFloat(it.cost.slice(1)) * it.quantity, 0)
      .toFixed(2);

  // Total for one item:
  const calculateTotalCost = (item) =>
    (parseFloat(item.cost.slice(1)) * item.quantity).toFixed(2);

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = (item) =>
    dispatch(removeItem({ name: item.name }));

  const handleContinueShopping = () =>
    navigate('/plants');

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-cost">{item.cost}</div>

            <div className="cart-item-quantity">
              <button
                className="cart-item-button"
                onClick={() => handleDecrement(item)}
              >
                –
              </button>
              <span className="cart-item-quantity-value">
                {item.quantity}
              </span>
              <button
                className="cart-item-button"
                onClick={() => handleIncrement(item)}
              >
                +
              </button>
            </div>

            <div className="cart-item-total">
              Total: ${calculateTotalCost(item)}
            </div>

            <button
              className="cart-item-delete"
              onClick={() => handleRemove(item)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button className="get-started-button1" onClick={() => alert('Coming soon!')}>
          Checkout
        </button>
      </div>
    </div>
  );
}
