import React from "react";

export default function Register({ setScreen }) {
  return (
    <div>
      <h2 className="title">Create your PopX account</h2>

      <label className="label">Full Name*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Phone number*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Email address*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Password*</label>
      <input className="input" placeholder="Marry Doe" type="password" />

      <label className="label">Company name</label>
      <input className="input" placeholder="Marry Doe" />

      <p className="label">Are you an Agency?*</p>
      <div style={{ marginBottom: 20 }}>
        <label>
          <input type="radio" name="agency" defaultChecked /> Yes
        </label>
        <label style={{ marginLeft: 20 }}>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => setScreen("account")}
      >
        Create Account
      </button>
    </div>
  );
}