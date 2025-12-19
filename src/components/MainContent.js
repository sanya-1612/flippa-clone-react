// src/components/MainContent.js
import React from 'react';
import BuySellCard from './BuySellCard';
import SelectServicesCard from './SelectServicesCard';

export default function MainContent() {
  return (
    <main>
      {/* Banner */}
      <div style={{ backgroundColor: '#b9d7ffff', padding: '12px', textAlign: 'center', fontSize: '13px', color: '#0d00ffff', position: 'relative', fontWeight: '650', }}>
        Global negotiation just got easier with FlippaAI translation. <a href="#" style={{ color: '#001affff', fontWeight: '700' }}>Learn More</a>
        <span style={{ position: 'absolute', right: '10px', cursor: 'pointer', fontSize: '18px', fontWeight: '700',color: '#0000009c' }}>✕</span>
      </div>

      {/* Card Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', padding: '60px 20px' }}>
        <BuySellCard />
        <SelectServicesCard />
      </div>
    </main>
  );
}