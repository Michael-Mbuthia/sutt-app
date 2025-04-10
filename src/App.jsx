import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./App.css";
import Nav from "./Nav";
import Singles from "./categories/singles/Singles";
import Doubles from "./categories/doubles/Doubles";
import Under18 from "./categories/under-18/Under18";
import FamilyEvent from "./categories/family/FamilyEvent";
import MenSingles from "./categories/singles/menSingles";
import LadiesSingles from "./categories/singles/ladiesSingles";
import MensPools from "./categories/singles/pools/menPooling";
import MensKnockout from "./categories/singles/knockout/mensKnockout";

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
        <Route path="/admin/singles/menSingles" element={<MenSingles />} />
        <Route
          path="/admin/singles/ladiesSingles"
          element={<LadiesSingles />}
        />
        <Route
          path="/admin/singles/menSingles/menPooling"
          element={<MensPools />}
        />
        <Route
          path="/admin/singles/menSingles/menKnockout"
          element={<MensKnockout />}
        />
        {/* Other routes */}
      </Routes>
    </div>
  );
}

export default App;
