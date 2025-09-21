"use client";
import { motion, AnimatePresence } from "motion/react";
import { MenuIcon, X } from "lucide-react";

import { useEffect, useState } from "react";
import Link from "next/link";
import {  Menus } from "@/types/setting/Setting";

const menuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};



const Menu = ({data} : Pick<Menus , 'data'>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  
  

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="z-20">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 cursor-pointer">
        <MenuIcon className="w-7 h-7 md:w-5 md:h-5 md:text-[#a1a2a7] text-[#253A57]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <button
              className="text-gray-500 text-xl absolute top-4 right-4 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            <nav className="mt-10 flex flex-col space-y-4">
              
              <Link href="#" className="text-lg text-gray-700 hover:text-black">
                خانه
              </Link>
              {
                data.map((item , i)=>(
                  <Link key={`menu_item_${item.id}_${i}`} href={`/${item.slug}`} className="text-lg text-gray-700 hover:text-black">
                  {item.name}
                  </Link>
                ))
              }
              
             
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
