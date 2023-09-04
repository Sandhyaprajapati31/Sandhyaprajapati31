import React from "react";
import Abc from "./Abc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Super from "./pages/Super";
import Expense from "./Report/Expense";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Abc />} />
        <Route path="/Super" element={<Super />} />
        <Route path="/Expense" element={<Expense />} />
      </Routes>
    </Router>
  );
}

export default App;
