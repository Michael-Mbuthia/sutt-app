import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Viewer from "./pages/Viewer";
import "./App.css";
import Nav from "./Nav";
import Singles from "./categories/singles/Singles";
import Doubles from "./categories/doubles/Doubles";
import Under18 from "./categories/under-18/Under18";
import FamilyEvent from "./categories/family/FamilyEvent";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        /* Admin routes */
        <Route path="/admin/" element={<Admin />} />
        <Route path="/admin/singles" element={<Singles />} />
        <Route path="/admin/doubles" element={<Doubles />} />
        <Route path="/admin/under18" element={<Under18 />} />
        <Route path="/admin/family-event" element={<FamilyEvent />} />
        {/* Add other admin routes here */}
        {/* Viewer routes */}
        <Route path="/viewer/*" element={<Viewer />} />
      </Routes>
    </div>
  );
}

export default App;
