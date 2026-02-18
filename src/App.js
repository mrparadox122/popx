import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  const renderScreen = () => {
    switch (screen) {
      case "login":
        return <Login setScreen={setScreen} />;
      case "register":
        return <Register setScreen={setScreen} />;
      case "account":
        return <Account setScreen={setScreen} />;
      default:
        return <Welcome setScreen={setScreen} />;
    }
  };

  return <div className="app-container">{renderScreen()}</div>;
}