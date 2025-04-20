import React from 'react';
import QRCode from 'react-qr-code';
import '../assets/menuPage.css';

// Generate QR codes for each table (12 tables)
const tables = Array.from({ length: 12 }, (_, i) => i + 1);

export default function QRGenerator() {
  return (
    <div className="qr-container">
      <h2>Table QR Codes</h2>
      <div className="qr-grid">
        {tables.map(tableId => {
          // Each QR points to the table's menu page
          const url = `${window.location.origin}/menu/${tableId}`;
          return (
            <div key={tableId} className="qr-card">
              <QRCode value={url} size={128} />
              <div>Table {tableId}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}