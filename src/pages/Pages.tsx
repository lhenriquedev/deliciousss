import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";

import Cuisine from "./Cuisine/Cuisine";

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
}
