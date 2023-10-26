import { motion } from "framer-motion";

export default function HamburgerBtn({isOpen, handleToggleMenu}) {
  return (
    <div className="flex w-full aspect-square">
      <div 
        className="m-auto text-center w-6 aspect-square relative" 
        onClick={handleToggleMenu}
      >
        <motion.div 
          className="h-1 w-full bg-custom-black absolute top-0"
          animate={{
            rotate: isOpen ? "45deg" : 0,
            top: isOpen ? "39%" : 0,
            left: isOpen ? "-6%" : 0,
            width: isOpen ? "120%" : "100%"
          }}
        ></motion.div>
        <motion.div 
          className="h-1 w-[62%] bg-custom-black absolute top-[50%] origin-left"
          style={{translateY: "-50%"}}
          animate={{scaleX: isOpen ? 0 : 1}}
        ></motion.div>
        <motion.div 
          className="h-1 w-full bg-custom-black absolute bottom-0"
          animate={{
            rotate: isOpen ? "-45deg" : 0,
            bottom: isOpen ? "43%" : 0,
            left: isOpen ? "-6%" : 0,
            width: isOpen ? "120%" : "100%"
          }}
        ></motion.div>
      </div>
    </div>
  );
}
