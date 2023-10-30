import { motion } from "framer-motion";
import { useState } from "react";

export default function MainLogo() {
  const [hovered, setHovered] = useState(false);

  const handleHoverStart = () => {
    setHovered(true);
  };
  const handleHoverEnd = () => {
    setHovered(false);
  };

  return (
    <motion.div
      className={`border bg-white w-full aspect-square rounded-full relative`}
      whileHover={{ scale: 1.1, rotate: "5deg" }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.div
        className="bg-gray-800 absolute top-[25%] left-[25%] w-[49%] h-[46%] rounded-tl-[64%] rounded-tr-[34%] rounded-br-[50%]"
        animate={{ scaleY: hovered ? 1.1 : 1 }}
      >
        <motion.div
          className="bg-white absolute top-[19%] left-0 w-full h-[60%] rounded-tl-[69%] rounded-tr-[23%] rounded-br-[47%]"
          animate={{ height: hovered ? "61%" : "60%" }}
        >
          <div className="bg-gray-800 absolute top-[32%] left-[57%] w-[19%] aspect-square rounded-full"></div>
          <motion.div
            className="bg-gray-800 absolute top-[19%] left-[94%] w-[25%] h-[22%] rounded-tr-[99%] rotate-[-10deg]"
            animate={{ translateX: hovered ? 1.5 : 0 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
