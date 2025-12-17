import React from 'react';

const topHeaderStyle = {
  backgroundColor: '#fff',
  padding: '10px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #e0e0e0',
};

const navBarStyle = {
    backgroundColor: '#fff',
    padding: '10px 30px',
    display: 'flex',
    alignItems: 'center',
    gap: '25px',
    fontSize: '14px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 500,
  padding: '5px 0',
  fontSize: '13px',
};

const searchBoxStyle = {
  padding: '8px 15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '350px',
  fontSize: '14px',
  outline: 'none',
  backgroundColor: '#f8f8f8',
};

function Header() {
  return (
    <>
      {/* Top Header Row (Logo, Search, Login) */}
      <header style={topHeaderStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>Flippa.</span>
          <span style={{ fontSize: '15px', color: '#333', fontWeight: 600, cursor: 'pointer' }}>Browse ▼</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <input
            type="text"
            placeholder="Search Thousands of Websites & Businesses"
            style={searchBoxStyle}
          />
          <span style={{ fontSize: '20px', color: '#333', cursor: 'pointer' }}>🔍</span>
          <a href="#" style={{ textDecoration: 'none', color: '#333', fontSize: '14px' }}>Log In</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333', fontSize: '14px', fontWeight: 'bold' }}>Sign Up</a>
        </div>
      </header>

      {/* Navigation Bar (Links and Buttons) */}
      <div style={navBarStyle}>
        <a href="#" style={linkStyle}>Meet our Brokers</a>
        <a href="#" style={linkStyle}>Insights</a>
        <a href="#" style={linkStyle}>Buyer Mandates</a>
        <a href="#" style={linkStyle}>Deal Sourcing</a>
        <a href="#" style={linkStyle}>Why Flippa</a>
        <a href="#" style={linkStyle}>Blog</a>
        <a href="#" style={linkStyle}>Pricing</a>
        <a href="#" style={{...linkStyle}}>Services ▼</a>
        <a href="#" style={{...linkStyle}}>Resources ▼</a>
        
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
            <button className="white-button" style={{ padding: '8px 18px', fontSize: '14px', height: 'auto' }}>Get a Free Valuation</button>
            <button className="blue-button" style={{ padding: '8px 18px', fontSize: '14px', height: 'auto' }}>Sell Now</button>
        </div>
      </div>
    </>
  );
}

export default Header;