import { useState } from "react";
import MainLogo from "./MainLogo";
import HamburgerBtn from "./HamburgerBtn";
import AnimatedMenu from "./AnimatedMenu";

const liStyle = "text-[18px] leading-4 text-custom-black relative";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-auto w-full bg-custom-white">
      
      <div className="flex p-[18px] md:p-[48px] justify-between items-center relative">
        <div className="w-12 md:hidden">
          <HamburgerBtn isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
        </div>
        <h1 className="text-xl md:text-3xl font-bold md:w-full md:text-center">
          白頭翁不吃小米
        </h1>
        <a
          href="/"
          className="w-12 md:absolute md:right-0 md:translate-x-[50%] md:w-[97px] drop-shadow-md"
        >
          <MainLogo />
        </a>
      </div>

      <AnimatedMenu isOpen={isOpen}>
        <ul className="text-center flex flex-col items-center gap-[21.74px] mt-4 mb-12">
          <li className={`${liStyle} nav-selected`}>
            <a href="#">白頭翁的特性</a>
          </li>
          <li className={`${liStyle}`}>
            <a href="#">白頭翁的故事</a>
          </li>
          <li className={`${liStyle}`}>
            <a href="#">白頭翁的美照</a>
          </li>
          <li className={`${liStyle}`}>
            <a href="#">白頭翁的危機</a>
          </li>
        </ul>
      </AnimatedMenu>
    </nav>
  );
}
