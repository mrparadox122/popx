import React from "react";

export default function Account() {
  return (
    <div>
      <h3 className="title">Account Settings</h3>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* Profile image with camera badge */}
        <div style={{ position: "relative", width: 80, height: 80 }}>
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
          />
          {/* Camera icon badge */}
          <div style={{
            position: "absolute",
            bottom: 2,
            right: 2,
            width: 24,
            height: 24,
            borderRadius: "50%",
            backgroundColor: "#6a11cb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "2px solid #fff"
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm7-13h-1.586l-1.707-1.707A1 1 0 0 0 15 .5H9a1 1 0 0 0-.707.293L6.586 2.5H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3zm-7 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </div>
        </div>
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