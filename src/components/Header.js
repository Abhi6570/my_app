import React from 'react';

const Header = () => {
  return (
    <div className="header">
        <button className="search-btn">🔍</button>
      <input type="text" className="search-bar" placeholder="Search search..." />
      <button className="refresh-btn">⟳</button>
    </div>
  );
};

export default Header;
