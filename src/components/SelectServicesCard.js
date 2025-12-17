// src/components/SelectServicesCard.js
import React from 'react';

export default function SelectServicesCard() {
  return (
    <div style={{ backgroundColor: '#dcf5edff', padding: '45px', borderRadius: '28px', boxShadow: '0 4px 25px rgba(0,0,0,0.06)', width: '520px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '15px', textAlign: 'center', color: '#0f172a' }}>Select Services for Your Deal</h2>
      <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6', fontSize: '16px', marginBottom: '25px' }}>
        Choose individual services like escrow payments, or legal contracts to complete your business transactions.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 20px', fontSize: '13px', color: '#10b981', fontWeight: '600', marginBottom: '25px' }}>
        <span>✓ Payments & Escrow</span> <span>✓ Legal</span> <span>✓ Finance</span>
        <span>✓ Insurance</span> <span>✓ Verification & Assessment</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <button className="white-button" style={{ minWidth: '180px' }}>View Services</button>
      </div>

      {/* Services Label Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '40px' }}>
        {['Due Diligence', 'Legal', 'Insurance', 'Finance', 'Payments', 'Escrow'].map(item => (
          <div key={item} style={{ border: '1px solid #e2e8f0', padding: '14px', borderRadius: '12px', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: '#475569', backgroundColor: '#fcfcfc' }}>
            {item}
          </div>
        ))}
      </div>

      {/* Partner Logos Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={logoBoxStyle}>✖ <span style={{fontWeight: '700'}}>Dropbox</span> Sign</div>
        <div style={logoBoxStyle}><span style={{fontWeight: '900', color: '#1e293b'}}>RUBICON</span></div>
        <div style={logoBoxStyle}><span style={{color: '#0066ff', fontWeight: 'bold', fontSize: '18px'}}>Swoop</span></div>
        <div style={logoBoxStyle}>
          <div style={{fontSize: '11px', lineHeight: '1.2'}}>
            <span style={{fontWeight: 'bold', color: '#001a33'}}>F FlippaPay</span><br/>
            <span style={{color: '#64748b'}}>🛡️ Escrow.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const logoBoxStyle = {
  padding: '12px',
  border: '1px solid #f1f5f9',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 1px 4px rgba(0,0,0,0.02)'
};