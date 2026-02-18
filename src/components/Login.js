import React from "react";

export default function Login({ setScreen }) {
  return (
    <div>
      <h2 className="title">Signin to your PopX account</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <label className="label">Email Address</label>
      <input className="input" placeholder="Enter email address" />

      <label className="label">Password</label>
      <input
        className="input"
        placeholder="Enter password"
        type="password"
      />

      <button
        className="btn"
        style={{ background: "#ccc" }}
        onClick={() => setScreen("account")}
      >
        Login
      </button>
    </div>
  );
}