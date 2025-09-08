"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";
import "react-loading-skeleton/dist/skeleton.css";
import { SpecialBox } from "@/types/Post/Post";
import VideoModal from "./modals/VideoModal";
import { getJsonLd } from "@/utils/videoStructure";

// داینامیک کردن کامپوننت Swiper برای هر دو حالت
const MySwiperSimple = dynamic(() => import("@/components/MySwiper"), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-4 gap-4">
      <Skeleton height={160} />
      <Skeleton height={160} />
      <Skeleton height={160} />
      <Skeleton height={160} />
    </div>
  ),
});

const MySwiperInsta = dynamic(() => import("@/components/MySwiper"), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-10 gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} height={84} width={84} circle />
      ))}
    </div>
  ),
});

export default function SpecialVideo({
  items,
  show_mode,
}: Pick<SpecialBox, "items" | "show_mode">) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalIndex , setModalIndex] = useState<number>(0)


  const shownHandler =(showParam : number)=>{
    setIsModalOpen(true)
    setModalIndex(showParam)
  }

  
  const prepareVideos = () => {
    return items.map((item , i) => {
      const structure = item.structure_status === 1 ? getJsonLd(item.data_structure) : null;

      const node =
        show_mode === 0 ? (
          <div key={item.id} className="space-y-1" onClick={()=>shownHandler(i)}>
            <div className="rounded-md overflow-hidden bg-black py-4 cursor-pointer">
              <picture>
                <source srcSet={item.poster} type="image/jpeg" />
                <img
                  src={item.poster}
                  alt={item.title}
                  title={item.title}
                  width={227}
                  height={128}
                />
              </picture>
            </div>
            <div className="text-sm text-center line-clamp-1">{item.title}</div>
          </div>
        ) : (
          <div key={item.id} className="flex items-center flex-col gap-1" onClick={()=>shownHandler(i)}>
            <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 cursor-pointer flex justify-center items-center">
              <div className="rounded-full overflow-hidden bg-black w-20 h-20 border-2 border-white">
                <picture>
                  <source srcSet={item.poster} type="image/jpeg" />
                  <img
                    src={item.poster}
                    alt={item.title}
                    title={item.title}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
            <div className="text-xs text-center line-clamp-1">{item.title}</div>
          </div>
        );

      return { node, structure };
    });
  };

  const videos = prepareVideos();

  return (
    <>
      {show_mode === 0 ? (
        <MySwiperSimple slides={videos.map((v) => v.node)} col={4} gap={15} />
      ) : (
        <MySwiperInsta slides={videos.map((v) => v.node)} col={9} gap={15} />
      )}

      {videos.map(
        (v, i) =>
          v.structure &&
          parse(`<script type="application/ld+json" key="${i}">${v.structure}</script>`)
      )}

      {isModalOpen && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="مودال کنترل‌شده"
          items={items}
          shownIndex={modalIndex}
        >
          
        </VideoModal>
      )}
    </>
  );
}
