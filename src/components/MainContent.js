// src/components/MainContent.js
import React from 'react';
import BuySellCard from './BuySellCard';
import SelectServicesCard from './SelectServicesCard';

export default function MainContent() {
  return (
    <main>
      {/* Banner */}
      <div style={{ backgroundColor: '#dbeafe', padding: '10px', textAlign: 'center', fontSize: '13px', color: '#1a2dd6ff', position: 'relative' }}>
        Global negotiation just got easier with FlippaAI translation. <a href="#" style={{ color: '#1a2dd6ff', fontWeight: '700' }}>Learn More</a>
        <span style={{ position: 'absolute', right: '60px', cursor: 'pointer', fontSize: '18px', fontWeight: '700' }}>✕</span>
      </div>

      {/* Card Section */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '60px 20px' }}>
        <BuySellCard />
        <SelectServicesCard />
      </div>
    </main>
  );
}