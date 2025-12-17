import React from 'react';
import BuySellCard from './BuySellCard';
import SelectServicesCard from './SelectServicesCard';

const topBannerStyle = {
  backgroundColor: '#e6f2ff', 
  padding: '12px 0',
  textAlign: 'center',
  fontSize: '14px',
  color: '#333',
  marginBottom: '50px', 
  borderBottom: '1px solid #cceeff', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
};

const mainContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px', 
  padding: '0 20px 60px 20px',
  flexWrap: 'wrap',
};

function MainContent() {
  return (
    <main>
      <div style={topBannerStyle}>
        Global negotiation just got easier with Flippa translation. <a href="#" style={{ color: '#007bff', textDecoration: 'none', marginLeft: '8px' }}>Learn More</a>
        <span style={{ marginLeft: '20px', cursor: 'pointer', color: '#777', fontSize: '18px' }}>&times;</span>
      </div>

      <div style={mainContainerStyle}>
        <BuySellCard />
        <SelectServicesCard />
      </div>
    </main>
  );
}

export default MainContent;