import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/menuPage.css';
import Header from './Header.js'
import {MenuOption} from '../data/menuData.js';
import MenuGrid from './MenuGrid.js';

export default function MenuPage() {
  const { tableId } = useParams();
  const [cart, setCart] = useState({}); // { [id]: { ...item, quantity } }

  const addToCart = item => {
    setCart(prev => {
      const prevQty = prev[item.id]?.quantity || 0;
      return {
        ...prev,
        [item.id]: { ...item, quantity: prevQty + 1 }
      };
    });
  };

  const increaseQty = id =>
    setCart(prev => ({
      ...prev,
      [id]: { ...prev[id], quantity: prev[id].quantity + 1 }
    }));

  const decreaseQty = id =>
    setCart(prev => {
      const q = prev[id].quantity - 1;
      if (q <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...prev[id], quantity: q } };
    });

  const entries = Object.values(cart);
  const totalItems = entries.reduce((sum, c) => sum + c.quantity, 0);
  const totalPrice = entries.reduce((sum, c) => sum + c.price * c.quantity, 0);

  // <-- NEW: handle checkout click
  const handleCheckout = () => {
    if (totalItems === 0) return;
    alert('🎉 Your order has been confirmed! Thank you for ordering.');
    // optional: clear the cart after confirming
    setCart({});
  };

  return (
    <>
    <Header/>
    <MenuGrid/>
    </>
    // <div className="menu-page">
    //   <h2>Table {tableId} — Menu</h2>
    //   <div className="menu-container">
    //     <div className="menu-list">
    //       {menuData.map(item => (
    //         <div key={item.id} className="menu-item-card">
              
    //           <img src={item.image} alt={item.name} className="menu-item-img" />

    //           <div className="menu-item-info">
    //             <h4>{item.name}</h4>
    //             <p>₹{item.price}</p>
    //             <button onClick={() => addToCart(item)} className="add-btn">
    //               Add +
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     <aside className="cart-sidebar">
    //       <h3>Your Cart</h3>
    //       {entries.length === 0 ? (
    //         <p className="empty-cart">Cart is empty</p>
    //       ) : (
    //         <>
    //           <ul className="cart-items">
    //             {entries.map(c => (
    //               <li key={c.id} className="cart-item-row">
    //                 <span className="item-name">{c.name}</span>
    //                 <div className="item-controls">
    //                   <button onClick={() => decreaseQty(c.id)} className="qty-btn">−</button>
    //                   <span className="qty">{c.quantity}</span>
    //                   <button onClick={() => increaseQty(c.id)} className="qty-btn">+</button>
    //                 </div>
    //                 <span className="item-price">₹{c.price} each</span>
    //                 <span className="line-total">₹{c.price * c.quantity}</span>
    //               </li>
    //             ))}
    //           </ul>

    //           <div className="cart-summary">
    //             <div>Total Items: {totalItems}</div>
    //             <div>Total Price: ₹{totalPrice}</div>
    //             {/* UPDATED: attach handler */}
    //             <button
    //               className="checkout-btn"
    //               onClick={handleCheckout}
    //             >
    //               Proceed to Checkout
    //             </button>
    //           </div>
    //         </>
    //       )}
    //     </aside>
    //   </div>
    // </div>
  );
}
