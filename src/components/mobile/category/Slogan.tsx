import Container from "@/components/public/Container";
import Swiper from "@/components/public/Swiper";
import Banner from "@/components/mobile/public/Banner";
import { ICategoryBannerData } from "@/types/Category/Category";
import React from "react";

export default function Slogan({
  headerBanner,
}: Pick<ICategoryBannerData, "headerBanner">) {
  const swiperData = headerBanner.map((item) => (
    <Banner
      key={item.name}
      indexWeb={item.mobileImage.indexWeb}
      indexArray={item.mobileImage.indexArray}
      currentImage={item.mobileImage.currentImage}
      width={375}
      height={250}
      text={item.name}
      alt={item.mobileImageAlt}
      href={item.link}
    />
  ));

  return (
    <section className="py-4">
      <Container>
        {headerBanner.length > 1 ? (
          <Swiper slides={swiperData} gap={0} col={1} />
        ) : (
          swiperData
        )}
      </Container>
    </section>
  );
}
