import React from "react";
import { Link } from "react-router-dom";
function Under18() {
  return (
    <div>
      <h1>Under 18</h1>
      <button style={{ margin: "5px" }}>
        <Link to="/admin/under-18/Boys">Boys</Link>
      </button>

      <button style={{ margin: "5px" }}>
        <Link to="/admin/under-18/Girls">Girls</Link>
      </button>
    </div>
  );
}

export default Under18;
