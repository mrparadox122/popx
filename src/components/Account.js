import React from "react";

export default function Account() {
  return (
    <div>
      <h3 className="title">Account Settings</h3>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <h4>Marry Doe</h4>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="subtitle" style={{ marginTop: 20 }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
        Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}