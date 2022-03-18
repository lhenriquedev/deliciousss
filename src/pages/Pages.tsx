import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from "./Home";
import { SectionCuisine } from "./SectionCuisine/SectionCuisine";
import { SectionSearched } from "./SectionSearched/SectionSearched";
import { RecipeDetails } from "./RecipeDetails/RecipeDetails";

export function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<SectionCuisine />} />
        <Route path="/searched/:search" element={<SectionSearched />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </AnimatePresence>
  );
}
