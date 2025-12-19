import React from "react";
import { Search, ChevronDown } from "lucide-react";

export default function BuySellCard() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#e9eefc 0%,#e9eefc 60%,#dde7ff 100%)",
        padding: "40px 60px 40px",
        borderRadius: 15,
        width: 760,
        minHeight: 520,
        border: "2px solid #dde1e1ff",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top text + buttons */}
      <div>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 10,
            marginTop: -8,
            textAlign: "center",
            color: "#020617",
          }}
        >
          Buy &amp; Sell End-to-End
        </h2>

        <p
          style={{
            color: "#010711e6",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.5,
            fontSize: 18,
            marginBottom: 25,
          }}
        >
          List, connect, and sell your business with end-to-end advisory
          through Flippa&apos;s global marketplace.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          {/* 1 point */}
          <span>
            <span style={{ color: "#00dbafff", marginRight: 6 }}>✓</span>
            <span style={{ color: "#5b5959" }}>
              425,000 AI Buyer Matches Weekly
            </span>
          </span>

          {/* 2 point */}
          <span>
            <span style={{ color: "#00dbafff", marginRight: 6 }}>✓</span>
            <span style={{ color: "#5b5959" }}>
              Expert Advisory &amp; Brokerage
            </span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 18,
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          <button
            style={{
              minWidth: 170,
              padding: "10px 24px",
              borderRadius: 999,
              border: "1px solid #2781cfff",
              background:
                "linear-gradient(180deg,#e9eefc 0%,#e9eefc 60%,#dde7ff 100%)",
              color: "#2781cfff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Browse Businesses
          </button>
          <button
            style={{
              minWidth: 150,
              padding: "10px 24px",
              borderRadius: 999,
              border: "none",
              backgroundColor: "#2e25ddff",
              color: "#b9dbf9ff",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sell Now
          </button>
        </div>
      </div>

      {/* Inner card fully expanded */}
      <div
        style={{
          flexGrow: 1,
          marginTop: 15,
          marginBottom: -40,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          border: "1px solid #11121216",
          padding: "30px 40px 10px",
          boxShadow: "50 26px 60px rgba(7, 7, 7, 0.33)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* tiny three dots */}
        <div style={{ display: "flex", gap: 6, marginBottom: 30 }}>
          {["#e5e7eb", "#e5e7eb", "#e5e7eb"].map((c, i) => (
            <span
              key={i}
              style={{
                width: 8,
                height: 8,
                marginTop: -15,
                borderRadius: "50%",
                backgroundColor: c,
              }}
            />
          ))}
        </div>

        {/* header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#6b7280",
            fontSize: 18,
            marginBottom: 20,
          }}
        >
          <Search size={20} color="#0202029e" />
          <span style={{ fontWeight: 700, fontSize: 14 }}>
            Businesses for sale
          </span>
        </div>

        {/* list rows occupy rest */}
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 0,
            marginTop: 10,
          }}
        >
          {[
            {
              dotColor: "#22c55e",
              title: "Ecommerce | Beauty",
              meta: "3x | 3.9x",
              price: "USD 1,500,000",
              showLine: true,
            },
            {
              dotColor: "#0ea5e9",
              title: "SaaS | AI Business",
              meta: "4x | 13x",
              price: "€965,000",
              showLine: true,
            },
            {
              dotColor: "#ef4444",
              title: "YouTube | Sports",
              meta: "2x | 9x",
              price: "AUD 480,000",
              showLine: true,
            },
          ].map((row) => (
            <div
              key={row.title}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 5,
                backgroundColor: "#ffffffff",
                padding: "10px 14px",
                boxSizing: "border-box",
                width: "100%",
                height: "260%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* left: image + dot + text */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center", // vertical center align
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 53,
                      height: 50,
                      borderRadius: 5,
                      backgroundColor: "#edededff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#01010eff",
                      fontSize: 18,
                     
                    }}
                  ></div>

                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          backgroundColor: row.dotColor,
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                          color: "#11182794",
                        }}
                      >
                        {row.title}
                      </span>
                    </div>

                    {row.showLine && (
                      <div
                        style={{
                          position: "absolute",
                          left: 24,
                          right: 8,
                          top: 22,
                          height: 2,
                          backgroundColor: "#e5e7eb",
                          borderRadius: 999,
                        }}
                      />
                    )}

                    <div
                      style={{
                        fontSize: 12,
                        color: "#9ca3af",
                        marginTop: row.showLine ? 8 : 4,
                        marginLeft: 24,
                      }}
                    >
                      {row.meta}
                    </div>
                  </div>
                </div>

                {/* right: price + button */}
                <div
                  style={{
                    textAlign: "right",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "#1118278d",
                    }}
                  >
                    {row.price}
                  </div>
                  <div
                    style={{
                      width: 110,
                      height: 30,
                      borderRadius: 8,
                      backgroundColor: "#ecf5fdf9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0b0b6ec4",
                      fontSize: 10,
                      fontWeight: 800,
                    }}
                  >
                    View Listing
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
