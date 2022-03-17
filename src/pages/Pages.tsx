import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";
import { SectionCuisine } from "./SectionCuisine/SectionCuisine";

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<SectionCuisine />} />
    </Routes>
  );
}
