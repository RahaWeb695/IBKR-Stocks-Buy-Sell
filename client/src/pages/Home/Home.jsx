import { Link } from "react-router-dom";
import "./Home.css";

import React from "react";

const Home = () => {
  return (
    <div className="home-main-container">
      <h1>Welcome to IBKR Stock</h1>
      <Link
        className="link-container"
        to="/stock-data"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <button>Explore</button>
      </Link>
    </div>
  );
};

export default Home;
