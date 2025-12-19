// src/components/SelectServicesCard.js
import React from "react";

export default function SelectServicesCard() {
  return (
    <div
      style={{
        backgroundColor: "#ddf7eb",
        padding: "72px 80px 80px",
        borderRadius: 15,
        width: 760,
        minHeight: 520,
        border: "2px solid #dde1e1ff",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 10,
          marginTop: -40,
          textAlign: "center",
          color: "#020617",
        }}
      >
        Select Services for Your Deal
      </h2>

      <p
        style={{
          color: "#010711e6",
          fontWeight:400,
          textAlign: "center",
          lineHeight: 1.6,
          fontSize: 18,
          marginBottom: 25,
          marginTop: 0,
        }}
      >
        Choose individual services like escrow payments, or legal contracts to
        complete your business transactions.
      </p>

  <div
  style={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 18,
  }}
>
  <span>
    <span style={{ color: "#00dbafff", marginRight: 4 }}>✓</span>
    <span style={{ color: "#5b5959" }}>Payments &amp; Escrow</span>
  </span>

  <span>
    <span style={{ color: "#00dbafff", marginRight: 4 }}>✓</span>
    <span style={{ color: "#5b5959" }}>Legal</span>
  </span>

  <span>
    <span style={{ color: "#00dbafff", marginRight: 4 }}>✓</span>
    <span style={{ color: "#5b5959" }}>Finance</span>
  </span>

  <span>
    <span style={{ color: "#00dbafff", marginRight: 4 }}>✓</span>
    <span style={{ color: "#5b5959" }}>Insurance</span>
  </span>

  <span>
    <span style={{ color: "#00dbafff", marginRight: 4 }}>✓</span>
    <span style={{ color: "#5b5959" }}>Verification &amp; Assessment</span>
  </span>
</div>

      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <button
          style={{
            padding: "11px 30px",
            borderRadius: 100,
            border: "1px solid #2781cfff",
            backgroundColor: "#ddf7eb",
            color: "#2781cfff",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            marginTop: 15,
            marginBottom: 30,
          }}
        >
          View Services
        </button>
      </div>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* top row: */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10, 
          }}
        >
          <div style={tileStyle}>
            <div style={tileTitle}>Due Diligence</div>
            <div style={tileLine} />
            <div style={tileLine} />
          </div>

          <div style={tileStyle}>
            <div style={tileTitle}>Legal</div>
            <div style={tileLine} />
            <div style={tileLine} />
            <div style={tileLogo}>Dropbox Sign</div>
          </div>

          <div style={tileStyle}>
            <div style={tileTitle}>Insurance</div>
            <div style={tileLine} />
              <div style={tileLine} />
            <div style={tileLogo}>RUBICON</div>
          </div>
        </div>

        {/* bottom row:*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 10,
            transform: "translateX(-5px)", // left/right shift adjust
          }}
        >
 
          <div style={tileStyle}>
            <div style={tileTitle}>Finance</div>
            <div style={tileLine} />
            <div style={tileLine} />
            <div style={tileLogo}>Swoop</div>
          </div>


          <div style={tileStyle}>
            <div style={tileTitle}>Payments</div>
            <div style={tileLine} />
            <div style={tileLine} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginTop: 6,
              }}
            >
              <span style={tileLogo}>FlippaPay</span>
              <span style={tileLogo}>Escrow.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* tile styles– */

const tileStyle = {
  backgroundColor: "#fcfcfcff",
  borderRadius: 12,
  padding: "16px 22px",
  border: "1px solid #ffffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minWidth: 160, 
  minHeight: 110,
};

const tileTitle = {
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 4,
};

const tileLine = {
  height: 2,
  backgroundColor: "#e5e7eb",
  borderRadius: 999,
  marginBottom: 8,
};

const tileLogo = {
  fontSize: 12,
  fontWeight: 600,
  color: "#111827",
};
