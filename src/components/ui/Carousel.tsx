"use client";
import MySwiper from "@/components/MySwiper";

import Card from "./Card/Card";
import Title from "./Title";
import Container from "../Container";

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

const Carousel = () => {
  return (
    <section className="py-4 space-y-4">
      <Container>
        <Title title="مقاله‌های منتخب"  buttonText="مشاهده همه عناوین" href="/" />
      </Container>
      {
        ss.length > 0&&
      <MySwiper slides={ss} col={5} gap={20} />
      }
      <div className="text-center border rounded-md px-4 py-2 w-fit mx-auto text-[#7D7D7DCC] border-[#7D7D7DCC] md:hidden block">
        مشاهده همه عناوین
      </div>
    </section>
  );
};

export default Carousel;
