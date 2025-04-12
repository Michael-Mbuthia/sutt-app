import React from "react";
import { Link } from "react-router-dom";

function Girls() {
  return (
    <>
      <div>
        <h2>Girls</h2>
        <button style={{ margin: "5px" }}>
          <Link to="/admin/under-18/Girls/Girlspooling">Pools</Link>
        </button>
        <button style={{ margin: "5px" }}>
          <Link to="/admin/under-18/Girls/GirlsKnockout">Knockout</Link>
        </button>
      </div>
    </>
  );
}

export default Girls;
