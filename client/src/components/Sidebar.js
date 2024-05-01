import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Assume you create a corresponding CSS for styling

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/model-analysis">Model Analysis</Link>
        </li>
        <li>
          <Link to="/chatbot">Chatbot</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
