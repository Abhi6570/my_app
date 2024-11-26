import React from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import QCSection from './components/QCSection';
import FooterButtons from './components/FooterButtons';

const App = () => {
  return (
    <div className="app-container">
      {/* Search Bar Section */}
      <div className="section">
        <Header />
      </div>

      {/* Main Content Section */}
      <div className="section">
        <h4 className="record-info">1 of 0</h4>
        <InputField label="Item Code" placeholder="ItemName" />
        <InputField label="Item Name" placeholder="ItemName" />
        <InputField label="Description" placeholder="Description" />
        <InputField label="Brand" placeholder="Search and Select brand..." />
        <InputField label="Sub-Category" placeholder="Enter Sub-Category" />
        <div className="row">
          <InputField label="EAN" placeholder="Enter EAN" />
          <InputField label="MRP" placeholder="Enter MRP" />
        </div>
        <div className="row">
          <InputField label="Received Qty" placeholder="Enter Quantity" />
          <InputField label="Accepted Qty" placeholder="Enter Accepted Qty" />
        </div>
        <QCSection />
      </div>

      {/* Save Data Section */}
      <div className="section">
        <FooterButtons />
      </div>
    </div>
  );
};

export default App;
