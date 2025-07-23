import Container from "@/components/Container";
import React from "react";
import Banner from "../Banner/Banner";

export default function CategoryBannerContainer() {
  return (
    <section className="py-8 bg-[#e4e4e4]/50">
      <Container>
        <Banner
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          imageClassName="object-cover h-[550px] rounded-xl"
          href="/"
        />
      </Container>
    </section>
  );
}
