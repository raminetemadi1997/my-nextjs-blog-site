"use client";
import MySwiper from "@/components/MySwiper";
import Card from "../Card/Card";
import Container from "@/components/Container";
import Title from "../Title";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ss = [
  <Card
    key="1"
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
  />,
  <Card
    key="2"
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
    created_date="2 ساعت پیش"
    author_image_alt="مسلم زمانی ارفعی"
  />,
  <Card
    key="3"
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
    created_date="3 ساعت پیش"
    author_image_alt="مسلم زمانی ارفعی"
  />,
  <Card
    key="4"
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
    created_date="4 ساعت پیش"
    author_image_alt="مسلم زمانی ارفعی"
  />,
  <Card
    key="5"
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
    created_date="5 ساعت پیش"
    author_image_alt="مسلم زمانی ارفعی"
  />,
  <Card
    key="6"
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
    created_date="6 ساعت پیش"
    author_image_alt="مسلم زمانی ارفعی"
  />,
];

export default function MobileCarousel() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isMounted) {
    return (
      <div>
        <Skeleton width={243} height={40} className="mb-4" />
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 2 }).map((_, idx) => (
            <Skeleton key={idx} width={243} height={376} borderRadius={12} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-4 space-y-4">
      <Container>
        <Title
          title="مقاله‌های منتخب"
          buttonText="مشاهده همه عناوین"
          href="/"
        />
      </Container>
      {ss.length > 0 && <MySwiper slides={ss} col={1.5} gap={20} />}
      <div className="text-center border rounded-md px-4 py-2 w-fit mx-auto text-[#7D7D7DCC] border-[#7D7D7DCC] md:hidden block">
        مشاهده همه عناوین
      </div>
    </section>
  );
}
