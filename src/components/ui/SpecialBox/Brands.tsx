import MySwiper from "@/components/MySwiper";
import Picture from "@/components/Picture";
import { ISpecialProps } from "@/types/Post/SpecialBox";
import Link from "next/link";
import React from "react";

const Brands = ({ items }: ISpecialProps) => {
  const swiperData = items.map((item) => {
    return (
      <Link
        href={item.link || "#"}
        title={item.title}
        key={item.id}
        id={`slide_${item.id}`}
        className="block relative bg-white w-full py-3 rounded-md border border-border group overflow-hidden"
      >
        <div className="text-sm text-center">{item.title}</div>

        {item.image && (
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 w-full h-full top-0 transition flex items-center justify-center">
            <Picture
              indexWeb={item.image.indexWeb}
              indexArray={item.image.indexArray}
              currentImage={item.image.currentImage}
              width={75}
              height={75}
            />
          </div>
        )}
      </Link>
    );
  });

  return (
    <div className="p-4 rounded-md bg-gray-100 line-clamp-1">
      <MySwiper slides={swiperData} rows={2} col={6} gap={10} type="circular" />
    </div>
  );
};

export default Brands;
