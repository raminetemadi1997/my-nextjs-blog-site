import Container from "@/components/Container";
import React from "react";
import Banner from "../Banner/Banner";
import { ICategoryBanner } from "@/types/Category/Category";


export default function CategoryBannerContainer({image , imageAlt , link , name} : ICategoryBanner) {
  
  
  return (
    <section className="py-8 md:bg-[#e4e4e4]/50">
      <Container>
        <Banner
         indexWeb={image.indexWeb}
         indexArray={image.indexArray}
         currentImage={image.currentImage}
         width={1276}
         height={568}
         text={name}
         alt={imageAlt}
         href={link}
        />
        
      </Container>
    </section>
  );
}
