"use client";
import Container from "@/components/Container";
import Banner from "./Banner";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";

import MySwiper from "@/components/MySwiper";

const BannerContainer = () => {
   const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);
  

   if (!isClient) return null;




const data = [
  <Banner
    key="1"
    webpSrc="/images/test_image.webp"
    fallbackSrc="/images/test_image.png"
    alt="بنر"
    height={1024}
    width={1024}
    text="سری جدید دوربین های آیمو"
  />,
  <Banner
    key="2"
    webpSrc="/images/test_image.webp"
    fallbackSrc="/images/test_image.png"
    alt="بنر"
    height={1024}
    width={1024}
  />,
  <Banner
    key="3"
    webpSrc="/images/test_image.webp"
    fallbackSrc="/images/test_image.png"
    alt="بنر"
    height={1024}
    width={1024}
  />,
];



  return (
    <section className="py-8 md:bg-[#e4e4e4]/50">
      <Container>
        <div className="grid grid-cols-3 auto-rows-[100px] md:gap-4 gap-2">
          <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="md:col-span-2 col-span-3 row-span-1 md:rounded-xl rounded-none"
            imageClassName="object-cover w-full h-full"
            href="/"
          />
          {isMobile ? (
            <div className="col-span-3">

              <MySwiper 
                col={1}
                gap={0}
                slides={data}
              />
            </div>
          ) : (
            <>
              <Banner
                webpSrc="/images/test_image.webp"
                fallbackSrc="/images/test_image.png"
                alt="بنر"
                height={1024}
                width={1024}
                className="row-span-3 rounded-xl"
                imageClassName="object-cover w-full h-full"
                href="/"
              />
              <Banner
                webpSrc="/images/test_image.webp"
                fallbackSrc="/images/test_image.png"
                alt="بنر"
                height={1024}
                width={1024}
                className="col-span-2 row-span-5 rounded-xl"
                imageClassName="object-cover w-full h-full"
                href="/"
              />
              <Banner
                webpSrc="/images/test_image.webp"
                fallbackSrc="/images/test_image.png"
                alt="بنر"
                height={1024}
                width={1024}
                className="row-span-3 rounded-xl"
                imageClassName="object-cover w-full h-full"
                href="/"
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BannerContainer;
