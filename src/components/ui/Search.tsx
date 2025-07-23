"use client";
import { motion, AnimatePresence } from "motion/react";
import { SearchIcon, X } from "lucide-react";

import { useEffect, useState } from "react";

const Search = () => {
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
        <SearchIcon className="w-7 h-7 md:w-5 md:h-5 md:text-[#a1a2a7] text-[#253A57]" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-full h-screen backdrop-blur-md bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_100%)] bottom-0 flex items-center justify-center p-4 fixed top-0 right-0 "
          >
            
            <motion.div
              transition={{
                duration: 0.4,
              }}
              className=" w-2xl relative"
            >
                <button className="cursor-pointer absolute -left-3 top-2 p-1 bg-red-600 hover:bg-red-700 rounded-full" onClick={() => setIsOpen(false)}>
              <X size={20} color="#ffffff"/>
            </button>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                جستجو کنید
              </label>
              <input
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              ></input>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Search;
