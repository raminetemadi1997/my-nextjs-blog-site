"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useId } from "react";

import "react-loading-skeleton/dist/skeleton.css";

import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MySwiperProps {
  slides: React.ReactNode[];
  className?: string;
  col: number;
  gap: number;
  pagination?: boolean;
  autoplay?: boolean;
  rows?: number;
  type ?:string
}

const MySwiper = ({
  slides,
  className,
  col,
  gap,
  pagination,
  autoplay,
  rows = 1,
  type
}: MySwiperProps) => {
  const uniqueId = useId();

  const prevClass = `swiper-button-prev-${uniqueId}`;
  const nextClass = `swiper-button-next-${uniqueId}`;

  return (
    <div dir="rtl" className={`${type == "circular" ? "circular": "relative group"}`}>
      <div
        className={`${nextClass} h-[130px] absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer p-2 bg-black/80 shadow hover:bg-black rounded-r-xl hidden group-hover:flex items-center`}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </div>
      <div
        className={`${prevClass} h-[130px] absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer p-2 bg-black/80 shadow hover:bg-black rounded-l-xl hidden group-hover:flex items-center`}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, Grid]}
        spaceBetween={gap}
        slidesPerView={col}
        loop={slides.length > col}
        autoplay={autoplay ? { delay: 2500 } : false}
        pagination={pagination ? { clickable: true } : false}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        className={className}
        breakpoints={{
          0: {
            slidesPerView: col || 1.5,
          },
          640: {
            slidesPerView: col,
          },
        }}
        grid={{
          rows: rows,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="py-1">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
