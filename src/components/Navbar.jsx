import { useState } from "react";
import { motion } from "framer-motion";
import MainLogo from "./common/MainLogo";
import HamburgerBtn from "./common/HamburgerBtn";

const liStyle = "text-[18px] leading-4 text-custom-black";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <navbar className="h-auto bg-custom-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="flex p-[18px] justify-between items-center">
        <div className="w-12">
          <HamburgerBtn isOpen={isOpen} handleToggleMenu={handleToggleMenu}/>
        </div>
        <h1 className="text-xl font-bold">白頭翁不吃小米</h1>
        <div className="w-12">
          <MainLogo />
        </div>
      </div>

      <motion.div
        className="origin-top overflow-hidden"
        initial={{height: 0}}
        animate={{height: isOpen ? "auto" : 0}}
        transition={{type: "spring", damping: 12, stiffness: 60}}
      >
        <ul className="w-full text-center flex flex-col gap-[21.74px] mt-4 mb-12">
          <li className={`${liStyle} text-custom-brown underline`}>
            白頭翁的特性
          </li>
          <li className={`${liStyle}`}>白頭翁的故事</li>
          <li className={`${liStyle}`}>白頭翁的美照</li>
          <li className={`${liStyle}`}>白頭翁的危機</li>
        </ul>
      </motion.div>
    </navbar>
  );
}
