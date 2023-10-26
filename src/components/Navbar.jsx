import { useState } from "react";
import { motion } from "framer-motion";
import MainLogo from "./common/MainLogo";
import HamburgerBtn from "./common/HamburgerBtn";

const liStyle = "text-[18px] leading-4 text-custom-black relative";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="h-auto w-full bg-custom-white">
    
      <div className="flex p-[18px] md:p-[48px] justify-between items-center relative">
        <div className="w-12 md:hidden">
          <HamburgerBtn isOpen={isOpen} handleToggleMenu={handleToggleMenu}/>
        </div>
        <h1 className="text-xl md:text-3xl font-bold md:w-full md:text-center">白頭翁不吃小米</h1>
        <div className="w-12 md:absolute md:right-0 md:translate-x-[50%] md:w-[97px] drop-shadow-md">
          <MainLogo />
        </div>
      </div>

      <motion.div
        className="origin-top overflow-hidden md:overflow-visible"
        initial={{height: 0}}
        animate={{height: isOpen ? "auto" : 0}}
        transition={{type: "spring", damping: 22, stiffness: 200}}
      >
        <ul className="text-center flex flex-col items-center gap-[21.74px] mt-4 mb-12">
          <li className={`${liStyle} text-custom-brown py-1 w-fit nav-selected`}>
            白頭翁的特性
          </li>
          <li className={`${liStyle}`}>白頭翁的故事</li>
          <li className={`${liStyle}`}>白頭翁的美照</li>
          <li className={`${liStyle}`}>白頭翁的危機</li>
        </ul>
      </motion.div>

    </nav>
  );
}
