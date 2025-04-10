import React from "react";
import { Link } from "react-router-dom";
import Admin from "./Admin";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the 2025 SUTT</h1>
      <Link to="/admin">Get started</Link>
    </div>
  );
};

export default Home;
