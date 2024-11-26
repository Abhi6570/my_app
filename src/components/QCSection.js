import React from 'react';

const QCSection = () => {
  return (
    <div className="qc-section">
      <button className="qc-btn">QC</button>
      <label className="qc-pass">
        <input type="checkbox" /> QC Pass
      </label>
    </div>
  );
};

export default QCSection;
