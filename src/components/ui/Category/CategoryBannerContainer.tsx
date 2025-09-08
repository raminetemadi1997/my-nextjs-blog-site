import Container from "@/components/Container";
import React from "react";
import Banner from "../Banner/Banner";
import { ICategoryBannerData } from "@/types/Category/Category";
import MySwiper from "@/components/MySwiper";

export default function CategoryBannerContainer({
  headerBanner,
}: Pick<ICategoryBannerData, "headerBanner">) {
  
  
  const swiperData = headerBanner.map((item) => (
    <Banner
      key={item.name}
      indexWeb={item.image.indexWeb}
      indexArray={item.image.indexArray}
      currentImage={item.image.currentImage}
      width={1280}
      height={568}
      text={item.name}
      alt={item.imageAlt}
      href={item.link}
    />
  ));

  return (
    <section className="py-8 md:bg-[#e4e4e4]/50">
      <Container>
        {headerBanner.length > 1 ? (
          <MySwiper slides={swiperData} gap={0} col={1} />
        ) : (
          swiperData
        )}
      </Container>
    </section>
  );
}
