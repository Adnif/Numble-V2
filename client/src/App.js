import React from "react";
import { Routes, Route } from "react-router-dom";

import Game from "./components/Game";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
