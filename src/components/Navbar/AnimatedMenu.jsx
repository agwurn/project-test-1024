import { motion } from "framer-motion";

export default function AnimatedMenu({ children, isOpen }) {
  return (
    <motion.div
      className="origin-top overflow-hidden md:overflow-visible"
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "auto" : 0 }}
      transition={{ type: "spring", damping: 22, stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
}
