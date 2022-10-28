import React from "react";
import { Routes as Routing, Route } from "react-router-dom";
import Home from "./Home/index";

export default function Routes() {
  return (
    <Routing>
      <Route path="/" element={<Home />} />
    </Routing>
  );
}
