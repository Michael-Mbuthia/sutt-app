import React from "react";
import { Link } from "react-router-dom";

const Singles = () => {
  return (
    <div>
      <h1>Singles</h1>
      <div>
        <button style={{ margin: "5px" }}>
          <Link to="/singles/men">Men</Link>
        </button>

        <button style={{ margin: "5px" }}>
          <Link to="/singles/ladies">Ladies</Link>
        </button>
      </div>
    </div>
  );
};

export default Singles;
