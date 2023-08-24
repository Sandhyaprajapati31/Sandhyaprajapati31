import React from "react";
import Abc from "./Abc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Super from "./pages/Super";
import Incomes from "./Report/Incomes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Abc />} />
        <Route path="/Super" element={<Super />} />
        <Route path="/Incomes" element={<Incomes />} />
      </Routes>
    </Router>
  );
}

export default App;
