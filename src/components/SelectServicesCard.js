import React from 'react';

const cardStyle = {
  backgroundColor: 'white', 
  padding: '40px',
  borderRadius: '18px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  width: '450px',
  textAlign: 'left',
  border: '1px solid #b3ffb3',
  position: 'relative',
};

const checkListStyle = {
  listStyle: 'none',
  padding: 0,
  marginTop: '25px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px 30px',
};

const checkListItemStyle = {
  color: '#555',
  fontSize: '14px',
  fontWeight: 500,
  width: '45%',
};

const serviceGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '35px',
    justifyContent: 'space-between',
};

const serviceBoxStyle = {
    padding: '10px 5px',
    border: '1px solid #d0d0d0',
    borderRadius: '8px',
    textAlign: 'center',
    width: '29%', 
    fontSize: '13px',
    fontWeight: 600,
    color: '#333',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px', 
};


const logoContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', 
    gap: '20px 30px',
    marginTop: '35px',
};

const logoBox = {
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    height: '50px',
};


function SelectServicesCard() {
  return (
    <div style={cardStyle}>
      <h2 style={{ fontSize: '24px', margin: '0 0 10px 0', fontWeight: 700, color: '#333' }}>Select Services for Your Deal</h2>
      <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px' }}>
        Choose individual services like escrow payments, or legal contracts to complete your business transactions.
      </p>

      <ul style={checkListStyle}>
        <li style={checkListItemStyle}><span style={{color: '#007bff', marginRight: '5px'}}>✓</span> Payments & Escrow</li>
        <li style={checkListItemStyle}><span style={{color: '#007bff', marginRight: '5px'}}>✓</span> Legal</li>
        <li style={checkListItemStyle}><span style={{color: '#007bff', marginRight: '5px'}}>✓</span> Finance</li>
        <li style={checkListItemStyle}><span style={{color: '#007bff', marginRight: '5px'}}>✓</span> Insurance</li>
        <li style={checkListItemStyle}><span style={{color: '#007bff', marginRight: '5px'}}>✓</span> Verification & Assessment</li>
      </ul>

      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <button className="white-button" style={{ padding: '10px 20px', backgroundColor: '#f0fff0' }}>View Services</button>
      </div>

      <div style={serviceGridStyle}>
        <div style={serviceBoxStyle}>Due Diligence</div>
        <div style={serviceBoxStyle}>Legal</div>
        <div style={serviceBoxStyle}>Insurance</div>
        <div style={serviceBoxStyle}>Finance</div>
        <div style={serviceBoxStyle}>Payments</div>
        <div style={serviceBoxStyle}>Escrow</div>
      </div>

      {/* Logos Section */}
      <div style={logoContainerStyle}>
        {/* Row 1, Column 1 (Hidden box for alignment) */}
        <div style={{...logoBox, visibility: 'hidden', border: 'none', boxShadow: 'none'}}></div> 

        {/* Row 1, Column 2 - Dropbox Sign */}
        <div style={{...logoBox, borderColor: '#ccc'}}>
             Dropbox <span style={{color: '#007bff'}}>Sign</span>
        </div>

        {/* Row 2, Column 1 - Swoop */}
        <div style={{...logoBox, borderColor: '#ccc'}}>
            <span style={{color: '#007bff', fontSize: '20px'}}>Swoop</span>
        </div>
        
        {/* Row 2, Column 2 - Rubicon */}
        <div style={{...logoBox, borderColor: '#ccc'}}>
             <span style={{color: '#ff4d4d', fontSize: '20px'}}>RUBICON</span>
        </div>

        {/* Row 3, Column 1 - FlippaPay */}
        <div style={{...logoBox, borderColor: '#ccc'}}>
            <span style={{color: '#007bff', fontSize: '20px'}}>FlippaPay</span>
        </div>

        {/* Row 3, Column 2 - Escrow.com */}
        <div style={{...logoBox, borderColor: '#ccc'}}>
            <span style={{color: '#00cc00', fontSize: '20px'}}>Escrow.com</span>
        </div>

      </div>
      
      <p style={{ fontSize: '12px', color: '#888', textAlign: 'center', marginTop: '30px' }}>
        Powered by DropBox Sign, Rubicon, Swoop, FlippaPay, etc.
      </p>
    </div>
  );
}

export default SelectServicesCard;