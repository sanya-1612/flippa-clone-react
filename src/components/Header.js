import React from 'react';
// Import icons from lucide-react library
import { Search, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <div style={{ width: '100%', fontFamily: 'times new roman' }}>
      
      {/* 1. TOP DARK BLUE ROW: Logo on left, Search and Auth pushed to the right */}
      <div style={{ 
        backgroundColor: '#012b51ff', 
        padding: '12px 60px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' // This pushes Logo to left and the rest to right
      }}>
        
        {/* Logo and Browse section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Flippa.</span>
          <span style={{ color: 'white', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Browse <ChevronDown size={14} />
          </span>
        </div>
        
        {/* Container for Search and Auth - both pushed to the right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {/* Search Bar Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ position: 'relative', width: '700px', display: 'flex', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder="Search Thousands of Websites & Businesses" 
                style={{ 
                  width: '100%', 
                  padding: '10px 45px 10px 15px', 
                  borderRadius: '6px', 
                  border: 'none', 
                  outline: 'none',
                  fontSize: '14px' 
                }} 
              />
              {/* Blue search icon inside input */}
              <Search 
                size={18} 
                color="#094b85ff" 
                style={{ position: 'absolute', right: '12px', cursor: 'pointer' }} 
              />
            </div>

            {/* Dark circular search icon outside input */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              height: '35px',
              minWidth: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Search size={18} color="white" />
            </div>
          </div>

          {/* Auth Links (Log In/Sign Up) */}
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            alignItems: 'center', 
            color: '#b9dbf9ff', 
            fontSize: '14px', 
            fontWeight: '500'
          }}>
            <span style={{ cursor: 'pointer' }}>Log In</span>
            <span style={{ cursor: 'pointer' }}>Sign Up</span>
          </div>
        </div>
      </div>

      {/* 2. LIGHT NAV ROW: Navigation links and rounded action buttons */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '10px 60px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid #e2e8f0' 
      }}>
        <nav style={{ display: 'flex', gap: '22px', color: '#2781cfff', fontSize: '13px', fontWeight: '500' }}>
          <span style={{ cursor: 'pointer' }}>Meet our Brokers</span>
          <span style={{ cursor: 'pointer' }}>Insights</span>
          <span style={{ cursor: 'pointer' }}>Buyer Mandates</span>
          <span style={{ cursor: 'pointer' }}>Deal Sourcing</span>
          <span style={{ cursor: 'pointer' }}>Why Flippa</span>
          <span style={{ cursor: 'pointer' }}>Blog</span>
          <span style={{ cursor: 'pointer' }}>Pricing</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px', cursor: 'pointer' }}>Services <ChevronDown size={12} /></span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px', cursor: 'pointer' }}>Resources <ChevronDown size={12} /></span>
          <span style={{ cursor: 'pointer' }}>Events</span>
        </nav>

        {/* Pill-shaped buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ 
            padding: '10px 50px',
            minWidth: '180px', 
            fontSize: '13px', 
            color: '#2781cfff', 
            border: '1px solid #2781cfff', 
            borderRadius: '25px', 
            backgroundColor: 'white',
            cursor: 'pointer',
            fontWeight: '700'
          }}>
            Get a Free Valuation
          </button>
          <button style={{ 
            padding: '10px 80px', 
            minWidth: '180px',
            fontSize: '13px', 
            backgroundColor: '#1a2dd6ff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '25px', 
            cursor: 'pointer',
            fontWeight: '700'
          }}>
            Sell Now
          </button>
        </div>
      </div>

    </div>
  );
}