import type { Metadata } from "next";
import Carousel from "@/components/ui/Carousel";
import CategoryBannerContainer from "@/components/ui/Category/CategoryBannerContainer";
import CategoryContent from "@/components/ui/Category/CategoryContent";
import { responsiveValues } from "@/utils/responsive";
import MobileCarousel from "@/components/ui/Mobile/MobileCarousel";

export const metadata: Metadata = {
  title: "دسته بندی",
};

const CategoryPage = async () => {
  const isMobile = await responsiveValues();
  return (
    <>
      <CategoryBannerContainer />
      <CategoryContent />
      {isMobile ? <MobileCarousel /> : <Carousel />}
    </>
  );
};

export default CategoryPage;
