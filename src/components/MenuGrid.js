import React from 'react';
import {menuItems} from '../data/menuData.js';
import { useParams } from 'react-router-dom';


export default function MenuGrid() {
    const { category } = useParams(); 
    const filteredItems = menuItems.filter(item => item.category === category);
  return (
    <div className="menu-grid-wrapper">
      <section className="menu-grid-section">
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <a key={index} href={item.link} className="menu-card">
              <div className="menu-card-inner">
                <div className="menu-card-toolbar">
                  <div className="flex-grow"></div>
                  <button className="menu-card-btn">
                    <svg viewBox="-1 -2 14 13" stroke="#222" strokeWidth="1.2" fill="none">
                      <path d="M11,1c-0.6-0.6-1.5-1-2.3-1C7.8,0,7,0.4,6.3,1L6,1.3L5.7,1C5,0.3,4.2,0,3.3,0S1.6,0.3,1,1C0.3,1.6,0,2.4,0,3.3S0.3,5,1,5.7l4.8,4.8C5.9,10.6,6,10.6,6,10.6c0.1,0,0.2,0,0.2-0.1L11,5.7c0.6-0.6,1-1.5,1-2.4S11.7,1.6,11,1z" />
                    </svg>
                  </button>
                </div>
                <div className="menu-card-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-card-top">
                  <div className="menu-card-name">{item.name}</div>
                  <div className="menu-card-price">{item.price}</div>
                </div>
                <div className="menu-card-description">{item.description}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
