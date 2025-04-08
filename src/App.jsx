import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Viewer from "./pages/Viewer";
import "./App.css";
import Nav from "./Nav";
import Singles from "./categories/Singles";
import Doubles from "./categories/Doubles";
import Under18 from "./categories/Under18";
import FamilyEvent from "./categories/FamilyEvent";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={<Admin />}>
          <Route path="singles" element={<Singles />} />
          <Route path="doubles" element={<Doubles />} />
          <Route path="under18" element={<Under18 />} />
          <Route path="family-event" element={<FamilyEvent />} />
          {/* Add other admin routes here */}
        </Route>

        {/* Viewer routes */}
        <Route path="/viewer/*" element={<Viewer />} />
      </Routes>
    </div>
  );
}

export default App;
