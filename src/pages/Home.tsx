import { SectionPopular } from "../components/SectionPopular/SectionPopular";
import { SectionVeggie } from "../components/SectionVeggie/SectionVeggie";

import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionVeggie />
      <SectionPopular />
    </motion.div>
  );
}
