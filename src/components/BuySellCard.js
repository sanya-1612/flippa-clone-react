import React from 'react';

const cardStyle = {
  backgroundColor: 'white', 
  padding: '40px',
  borderRadius: '18px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  width: '450px',
  textAlign: 'left',
  border: '1px solid #a9c6ff', 
  position: 'relative',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  marginTop: '25px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px 30px',
};

const listItemStyle = {
  color: '#555',
  fontSize: '14px',
  fontWeight: 500,
};

const businessItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
};


const logoBoxStyle = (bgColor) => ({
    width: '35px',
    height: '35px',
    backgroundColor: bgColor,
    borderRadius: '8px',
    border: '1px solid #ddd',
    
});

function BuySellCard() {
  return (
    <div style={cardStyle}>
      <h2 style={{ fontSize: '24px', margin: '0 0 10px 0', fontWeight: 700, color: '#333' }}>Buy & Sell End-to-End</h2>
      <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px' }}>
        List, connect, and sell your business with end-to-end advisory through Flippa's global marketplace.
      </p>

      <ul style={listStyle}>
        <li style={listItemStyle}><span style={{color: '#007bff', marginRight: '5px'}}>✓</span> 425,000 AI Buyer Matches Weekly</li>
        <li style={listItemStyle}><span style={{color: '#007bff', marginRight: '5px'}}>✓</span> Expert Advisory & Brokerage</li>
      </ul>

      <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        <button className="white-button" style={{ padding: '10px 20px' }}>Browse Businesses</button>
        <button className="blue-button" style={{ padding: '10px 20px' }}>Sell Now</button>
      </div>

      {/* Buisness list section */}
      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#fff', borderRadius: '10px' }}>
        <p style={{ fontWeight: 600, margin: '0 0 15px 0', fontSize: '15px', color: '#777' }}>Q Businesses for sale</p>
        
        {/* item 1: Ecommerce | Beauty */}
        <div style={businessItemStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={logoBoxStyle('#f0f0ff')}></div> 
            <div>
              <p style={{ margin: '0', fontWeight: 'bold', fontSize: '15px', color: '#333' }}>Ecommerce | Beauty</p>
              <p style={{ margin: '0', fontSize: '12px', color: '#888' }}>3x | 3.9k</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '15px', color: '#333' }}>USD $1,500,000</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#007bff', cursor: 'pointer' }}>View Listing</p>
          </div>
        </div>
        
        {/* item 2: SaaS | AI Business */}
        <div style={businessItemStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={logoBoxStyle('#e6fff0')}></div>
            <div>
              <p style={{ margin: '0', fontWeight: 'bold', fontSize: '15px', color: '#333' }}>SaaS | AI Business</p>
              <p style={{ margin: '0', fontSize: '12px', color: '#888' }}>4x | 3.2x</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '15px', color: '#333' }}>£965,000</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#007bff', cursor: 'pointer' }}>View Listing</p>
          </div>
        </div>

        {/* item 3: YouTube | Sports */}
        <div style={{...businessItemStyle, borderBottom: 'none'}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={logoBoxStyle('#ffeded')}></div> 
            <div>
              <p style={{ margin: '0', fontWeight: 'bold', fontSize: '15px', color: '#333' }}>YouTube | Sports</p>
              <p style={{ margin: '0', fontSize: '12px', color: '#888' }}>4x | 1.2k</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: '0', fontWeight: 'bold', fontSize: '15px', color: '#333' }}>AUD $480,000</p>
            <p style={{ margin: '0', fontSize: '12px', color: '#007bff', cursor: 'pointer' }}>View Listing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySellCard;