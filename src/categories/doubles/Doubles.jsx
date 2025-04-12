import React from "react";
import { Link } from "react-router-dom";

function Doubles() {
  return (
    <>
      <div>
        <h1>Doubles</h1>
        <button>
          <Link to="/admin/doubles/menDoubles">Men</Link>
        </button>
        <button>
          <Link to="/admin/doubles/ladiesDoubles">Ladies</Link>
        </button>
      </div>
    </>
  );
}

export default Doubles;
