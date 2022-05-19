import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../src/app.css";
import SwapMain from "../components/pages/swap/SwapMain";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SwapMain/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;