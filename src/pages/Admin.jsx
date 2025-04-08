import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Categories from "./Categories";

const Admin = () => {
  return (
    <div className="admin">
      <h2>Admin Mode</h2>
      <Categories />
    </div>
  );
};

export default Admin;
