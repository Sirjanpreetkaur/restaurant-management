import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/menuPage.css';
import menuData from '../data/menu.json';

export default function MenuPage() {
  const { tableId } = useParams();
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = index => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="menu-page">
      <h2>Table {tableId} - Menu</h2>

      <div className="menu-list">
        {menuData.map(item => (
          <div key={item.id} className="menu-item">
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="menu-item-img"
            />
            <div className="menu-item-details">
              <strong>{item.name}</strong>
              <span>₹{item.price}</span>
            </div>
            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 && <p>No items yet.</p>}
        {cart.map((item, idx) => (
          <div key={idx} className="cart-item">
            {item.name} - ₹{item.price}
            <button
              className="remove-btn"
              onClick={() => removeFromCart(idx)}
            >
              &times;
            </button>
          </div>
        ))}
        <hr />
        <div className="cart-total">
          <strong>Total: ₹{total}</strong>
        </div>
        <button
          className="checkout-btn"
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
