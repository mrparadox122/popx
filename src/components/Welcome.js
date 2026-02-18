import React from "react";

export default function Welcome({ setScreen }) {
  return (
    <div>
      <h2 className="title">Welcome to PopX</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button
        className="btn btn-primary"
        onClick={() => setScreen("register")}
      >
        Create Account
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => setScreen("login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}