import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}
