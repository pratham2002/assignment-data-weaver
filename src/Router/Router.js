import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBook from "../pages/AddBook";
import Error404Page from "../pages/Error404Page";
import Homepage from "../pages/Homepage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/edit" element={<Homepage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default Router;
