import React from "react";
import { Link } from "react-router-dom";

function menSingles() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/admin/singles">Pools</Link>
          </li>
          <li>
            <Link to="/admin/doubles">Knockout</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default menSingles;
