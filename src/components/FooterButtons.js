import React from 'react';

const FooterButtons = () => {
  return (
    <div className="footer-buttons">
      <div className="top-section">
        <button className="arrow-btn">⬅</button> 
        <button className="save-btn">Save Data</button>
        <button className="arrow-btn">➡</button>
      </div>
      <button className="print-btn">Print Barcode</button>
    </div>
  );
};

export default FooterButtons;
