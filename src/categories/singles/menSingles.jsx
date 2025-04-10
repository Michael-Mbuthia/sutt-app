import React from "react";
import { Link } from "react-router-dom";

function menSingles() {
  return (
    <>
      <div>
        <h2>Men's singles</h2>
        <button style={{ margin: "5px" }}>
          <Link to="/admin/singles/menSingles/menPooling">Pools</Link>
        </button>

        <button style={{ margin: "5px" }}>
          <Link to="/admin/singles/menSingles/menKnockout">Knockout</Link>
        </button>
      </div>
    </>
  );
}

export default menSingles;
