import React from "react";
import Card from "../Card/Card";
import Sort from "./Sort";
import Banner from "../Banner/Banner";
import Pagination from "./Pagination";

export default function CategoryCardContainer() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Sort />
        <div className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-200">
          <span className="font-bold">144</span>
          <span>مطلب موجود است.</span>
        </div>
      </div>

      <div className={`grid grid-cols-3 gap-4`}>
        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
    و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
        />
        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
    و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
        />
        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
    و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
        />
        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
    و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
        />
      <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="col-span-3"
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
