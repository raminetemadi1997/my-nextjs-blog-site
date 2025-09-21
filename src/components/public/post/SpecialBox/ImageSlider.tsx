"use client";


import Banner from "../../../mobile/public/Banner";
import Swiper from "@/components/public/Swiper";
import { SpecialBox } from "@/types/Post/Post";

export default function ImageSlider({
  content_type,
  id,
  items,
}: Pick<SpecialBox , 'items' | 'content_type' | 'id'>) {

  const swiperData = items.map((item) => {
    return (
      item.image && (
        <Banner
          key={item.id}
          indexWeb={item.image?.indexWeb}
          indexArray={item.image.indexArray}
          width={1024}
          height={214}
        />
      )
    );
  });

  return (
    <div id={`${content_type}_${id}`} className="space-y-4">
      <Swiper slides={swiperData} col={1} gap={0} />
    </div>
  );
}
