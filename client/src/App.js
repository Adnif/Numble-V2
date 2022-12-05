import React from "react";
import { Routes, Route } from "react-router-dom";

import Game from "./components/Game";
import Menu from "./components/Menu";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}
