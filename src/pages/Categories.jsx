import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <button style={{ margin: "5px" }}>
        <Link to="singles">Singles </Link>
      </button>
      <button style={{ margin: "5px" }}>
        <Link to="doubles">Doubles </Link>
      </button>
      <button style={{ margin: "5px" }}>
        <Link to="under18">Under 18 </Link>
      </button>
      <button style={{ margin: "5px" }}>
        <Link to="family-event">Family Event </Link>
      </button>
    </div>
  );
}

export default Categories;
