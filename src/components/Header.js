import React from 'react';
import '../assets/menuPage.css';
import {MenuOption} from '../data/menuData.js';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-section">
          <img
            src="https://instalacarte.com/customer-logo/23/66c49c906aeeda31561440bd1be008e9.png"
            alt="wagamama"
            className="logo"
          />
          <h1 className="restaurant-name">wagamama</h1>
        </div>
        {/* <button className="language-btn">English</button> */}
      </div>

      <section className="categories">
        <div className="categories-container">
          {MenuOption?.map((item, index) => (
            <div key={index} className="category">
              <a href={`/menu/s/en/wagamama/${item.url}/all/`}>
                <img
                  src={`https://instalacarte.com/media/cache/emoji_small/emoji/${item.img}?v3`}
                  alt={item.name}
                />
                <div className="category-name">{item.name}</div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
}
