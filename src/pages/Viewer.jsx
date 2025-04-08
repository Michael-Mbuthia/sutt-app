import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pooling from "./Pooling";
import Knockout from "./Knockout";

const Viewer = () => {
  return (
    <div className="viewer">
      <h2>Viewer Mode</h2>
      <nav>
        <ul>
          <li>
            <Link to="pooling">Pooling Stage</Link>
          </li>
          <li>
            <Link to="knockout">Knockout Stage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="pooling" element={<Pooling isAdmin={false} />} />
        <Route path="knockout" element={<Knockout isAdmin={false} />} />
      </Routes>
    </div>
  );
};

export default Viewer;
