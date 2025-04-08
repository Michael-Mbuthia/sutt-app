import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Singles from "../categories/Singles";
import Doubles from "../categories/Doubles";
import Under18 from "../categories/Under18";
import FamilyEvent from "../categories/FamilyEvent";

function handleSingles() {
  <Singles />;
}

function Categories() {
  return (
    <div>
      <button onClick={handleSingles()}>Singles</button>
      <h1>Categories</h1>
      <ul>
        <li>
          <Link to="/admin/singles">Singles</Link>
        </li>
        <li>
          <Link to="/admin/doubles">Doubles</Link>
        </li>
        <li>
          <Link to="/admin/under18">Under 18</Link>
        </li>
        <li>
          <Link to="/admin/family-event">Family Event</Link>
        </li>
      </ul>

      {/* Define routes for the categories */}
      <Routes>
        <Route path="/singles" element={<Singles />} />
        <Route path="/doubles" element={<Doubles />} />
        <Route path="/under18" element={<Under18 />} />
        <Route path="/family-event" element={<FamilyEvent />} />
      </Routes>
    </div>
  );
}

export default Categories;
