// src/components/BuySellCard.js
import React from 'react';

export default function BuySellCard() {
  return (
    <div style={{ backgroundColor: '#e9eefdff', padding: '45px', borderRadius: '28px', boxShadow: '0 4px 25px rgba(0,0,0,0.06)', width: '520px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '15px', textAlign: 'center', color: '#0f172a' }}>Buy & Sell End-to-End</h2>
      <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6', fontSize: '16px', marginBottom: '25px' }}>
        List, connect, and sell your business with end-to-end advisory through Flippa's global marketplace.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', fontSize: '13px', color: '#10b981', fontWeight: '600', marginBottom: '35px' }}>
        <span>✓ 425,000 AI Buyer Matches Weekly</span>
        <span>✓ Expert Advisory & Brokerage</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '45px' }}>
        <button className="white-button" style={{ minWidth: '160px' }}>Browse Businesses</button>
        <button className="blue-button" style={{ minWidth: '160px' }}>Sell Now</button>
      </div>

      {/* Inner List Container */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '18px', padding: '24px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8', marginBottom: '20px' }}>
          <span>🔍</span> <span style={{ fontSize: '15px', fontWeight: '500' }}>Businesses for sale</span>
        </div>
        
        {/* Item 1 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: '#f0f9ff', borderRadius: '10px' }}></div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>Ecommerce | Beauty</div>
              <div style={{ color: '#94a3b8', fontSize: '13px' }}>3x | 3.9x</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: '700', fontSize: '15px' }}>USD $1,500,000</div>
            <div style={{ color: '#0066ff', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>View Listing</div>
          </div>
        </div>

        {/* Item 2 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: '#fdf2f2', borderRadius: '10px' }}></div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', color: '#1e293b' }}>YouTube | Sports</div>
              <div style={{ color: '#94a3b8', fontSize: '13px' }}>4x | 1.2k</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: '700', fontSize: '15px' }}>AUD $480,000</div>
            <div style={{ color: '#0066ff', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>View Listing</div>
          </div>
        </div>
      </div>
    </div>
  );
}