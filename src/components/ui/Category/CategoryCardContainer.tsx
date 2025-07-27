import React from "react";
import Card from "../Card/Card";
import Sort from "./Sort";
import Banner from "../Banner/Banner";
import Pagination from "./Pagination";
import MobileCard from "../Mobile/MobileCard";
import { responsiveValues } from "@/utils/responsive";


const cardData = Array(9).fill({
  webpSrc: "/images/test_image.webp",
  fallbackSrc: "/images/test_image.png",
  alt: "بنر",
  height: 1024,
  width: 1024,
  text: "نصب سریع دوربین های مداربسته بیسیم داهوا و اسفیورد",
  author_name: "مسلم زمانی ارفعی",
  author_image_webp: "/images/test_image.webp",
  author_image_fallbackSrc: "/images/test_image.png",
  created_date: "1 ساعت پیش",
  author_image_alt: "مسلم زمانی ارفعی",
});

export default async function CategoryCardContainer() {
  const isMobile = await responsiveValues();
  return (
    <div className="md:bg-white bg-[#F2F2F2] md:p-0 p-2">
      <div className="flex items-center justify-between mb-4">
        <Sort />
        <div className="flex items-center gap-1.5 md:text-sm text-xs text-gray-700 dark:text-gray-200">
          <span className="font-bold">144</span>
          <span>مطلب موجود است.</span>
        </div>
      </div>

      <div className={`grid md:grid-cols-3 grid-cols-1 gap-4`}>
        {cardData.map((card, index) =>
          isMobile ? (
            <MobileCard key={index} {...card} />
          ) : (
            <Card key={index} {...card} />
          )
        )}
      <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="md:col-span-3 col-span-1"
            imageClassName="object-cover w-full h-full"
            href="/"
          />
      </div>
      <Pagination
      currentPage={1}
        totalPages={12}
      />
    </div>
  );
}
