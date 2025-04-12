import React from "react";
import { Link } from "react-router-dom";

function Boys() {
  return (
    <>
      <div>
        <h2>Boys</h2>
        <button style={{ margin: "5px" }}>
          <Link to="/admin/under-18/Boys/Boyspooling">Pools</Link>
        </button>
        <button style={{ margin: "5px" }}>
          <Link to="/admin/under-18/Boys/Boysknockout">Knockout</Link>
        </button>
      </div>
    </>
  );
}

export default Boys;
