"use client";
import Picture from "@/components/Picture";
import React from "react";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import MySwiper from "@/components/MySwiper";
import { SpecialBox } from "@/types/Post/Post";

export default function Article({ items }: Pick<SpecialBox , 'items'>) {
   
  const swiperData = items.map((item) => {
    return (
      <article key={item.id} className="relative overflow-hidden w-fit rounded-md">
        {item.title && (
          <div className="absolute top-0 p-4 bg-[linear-gradient(to_bottom,#000000cc_0%,#00000080_30%,#00000040_70%,#00000000_100%)] bg-blend-multiply w-full text-white">
            {item.title}
          </div>
        )}
        {item.image && (
          <Picture
            indexWeb={item.image.indexWeb}
            indexArray={item.image.indexArray}
            currentImage={item.image.currentImage}
            width={320}
            height={320}
          />
        )}
        {item.body && (
          <motion.div
            initial={{ bottom: "-95%" }}
            whileHover={{ bottom: "0%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-full h-full p-2 space-y-3 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-md shadow-lg"
            style={{ bottom: "-95%" }}
          >
            <div className="h-1 w-12 bg-white rounded-full mx-auto"></div>

            <motion.div
              transition={{ duration: 0.3 }}
              className="p-1 text-sm text-white leading-relaxed text-justify origin-top overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full"
              style={{ maxHeight: "95%" }}
            >
              {parse(item.body)}
            </motion.div>
          </motion.div>
        )}
      </article>
    );
  });

  
  
  return (
    <div>
      <MySwiper slides={swiperData} col={3} gap={15} />
    </div>
  );
}
