"use client";
import { ISpecialProps } from "@/types/Post/SpecialBox";

import Banner from "../Banner/Banner";
import MySwiper from "@/components/MySwiper";

export default function ImageSlider({
  content_type,
  id,
  items,
}: ISpecialProps) {

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
      <MySwiper slides={swiperData} col={1} gap={0} />
    </div>
  );
}
