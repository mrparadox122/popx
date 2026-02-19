import React from "react";

export default function Login({ setScreen }) {
  return (
    <div>
      <h2 className="title">Signin to your PopX account</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Email Address - Floating label field */}
      <div style={{ position: "relative", marginBottom: 16, marginTop: 8 }}>
        <span style={{
          position: "absolute",
          top: -10,
          left: 12,
          background: "#fff",
          paddingLeft: 4,
          paddingRight: 4,
          fontSize: 13,
          color: "#7c3aed",
          fontWeight: 600,
          zIndex: 1
        }}>
          Email Address
        </span>
        <input
          style={{
            width: "100%",
            padding: "14px 14px",
            border: "1.5px solid #ccc",
            borderRadius: 8,
            fontSize: 14,
            outline: "none",
            boxSizing: "border-box",
            color: "#333",
            background: "#fff"
          }}
          placeholder="Enter email address"
          type="email"
        />
      </div>

      {/* Password - Floating label field */}
      <div style={{ position: "relative", marginBottom: 24, marginTop: 8 }}>
        <span style={{
          position: "absolute",
          top: -10,
          left: 12,
          background: "#fff",
          paddingLeft: 4,
          paddingRight: 4,
          fontSize: 13,
          color: "#7c3aed",
          fontWeight: 600,
          zIndex: 1
        }}>
          Password
        </span>
        <input
          style={{
            width: "100%",
            padding: "14px 14px",
            border: "1.5px solid #ccc",
            borderRadius: 8,
            fontSize: 14,
            outline: "none",
            boxSizing: "border-box",
            color: "#333",
            background: "#fff"
          }}
          placeholder="Enter password"
          type="password"
        />
      </div>

      <button
        className="btn"
        style={{ background: "#b0b0b0", color: "#fff", fontSize: 16 }}
        onClick={() => setScreen("account")}
      >
        Login
      </button>
    </div>
  );
}
