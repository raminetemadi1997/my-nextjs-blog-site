"use client";
import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SpecialBox } from "@/types/Post/Post";
import SingleVideo from "../SingleVideo";
import MySwiper from "@/components/MySwiper";

interface ModalProps extends Pick<SpecialBox, "items"> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  shownIndex: number;
}

export default function VideoModal({
  isOpen,
  onClose,
  items,
  shownIndex,
}: ModalProps) {
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

  const swiperData = () =>
    items.map((item) => (
      <SingleVideo key={item.id} items={items} width={768} height={699} />
    ));

  const [index, setIndex] = useState<number>(shownIndex);

  return (
    <div className="w-full">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 bg-opacity-50 z-40 top-0 right-0 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full w-full">
                <div className="h-10 flex items-center justify-center px-4 relative">
                  <X
                    color="#ffffff"
                    onClick={onClose}
                    className="cursor-pointer absolute right-2.5"
                  />
                  {swiperData().length > 1 && (
                    <div className="flex gap-4">
                      {Array.from({ length: swiperData().length }).map(
                        (_, i) => (
                          <div
                            key={i}
                            className={`h-0.5 ${
                              index == i ? "bg-white" : "bg-border/80"
                            } w-32 rounded-b-sm`}
                          ></div>
                        )
                      )}
                    </div>
                  )}
                </div>

                <div className="w-auto relative mx-auto max-w-3xl flex items-center h-[calc(100vh-40px)]">
                  <div className="w-full">
                    <MySwiper
                      loop={false}
                      slides={swiperData()}
                      col={1}
                      gap={1}
                      initialSlide={index}
                      type="circular"
                      onMovement={(i) => {
                        setIndex(i);
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
