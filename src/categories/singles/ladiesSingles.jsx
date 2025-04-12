import React from "react";
import { Link } from "react-router-dom";

function ladiesSingles() {
  return (
    <>
      <div>
        <h1>Ladies Singles</h1>
        <button style={{ margin: "5px" }}>
          <Link to="/admin/singles/ladiesSingles/ladiesPooling">Pools</Link>
        </button>

        <button style={{ margin: "5px" }}>
          <Link to="/admin/singles/ladiesSingles/ladiesKnockout">Knockout</Link>
        </button>
      </div>
    </>
  );
}
export default ladiesSingles;
