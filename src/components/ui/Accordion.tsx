"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import parse from "html-react-parser";
import Picture from "../Picture";
import { SpecialBox } from "@/types/Post/Post";

export default function Accordion({ items }: Pick<SpecialBox , 'items'>) {
  const [isOpen, setIsOpen] = useState<number[]>([]);

  const toggleHandler = (id: number) => {
    setIsOpen((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-2">
      {items.map(
        (item) =>
          (item.description || item.answer) && (
            <div key={item.id} className="overflow-hidden bg-white">
              <button
                onClick={() => toggleHandler(item.id)}
                className="w-full flex items-center justify-between text-left text-base hover:bg-gray-100 transition cursor-pointer p-2 bg-gray-200/80 rounded-sm"
              >
                <span>{item.title || item.question}</span>
                <motion.div
                  animate={{ rotate: isOpen.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen.includes(item.id) && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden px-4"
                  >
                    {(item.description ||
                      item.answer) && (
                        <div className="py-3 text-gray-700 text-sm text-justify leading-8">
                          {parse(item.description || item.answer || "")}
                        </div>
                      )}

                    {item.image && (
                      <Picture
                        indexWeb={item.image?.indexWeb}
                        indexArray={item.image?.indexArray}
                        currentImage={item.image?.currentImage}
                        width={1024}
                        height={634}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
      )}
    </div>
  );
}
