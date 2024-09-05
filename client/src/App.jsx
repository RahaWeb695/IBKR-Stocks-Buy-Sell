import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import StockData from "./pages/StockData/StockData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stock-data" element={<StockData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
