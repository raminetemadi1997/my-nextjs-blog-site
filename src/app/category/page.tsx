
import type { Metadata } from "next";
import Carousel from "@/components/ui/Carousel";
import CategoryBannerContainer from "@/components/ui/Category/CategoryBannerContainer";
import CategoryContent from "@/components/ui/Category/CategoryContent";

export const metadata: Metadata = {
  title: "دسته بندی",
};

const CategoryPage = () => {
  return (
    <>
      <CategoryBannerContainer />
      <CategoryContent/>
      <Carousel />
    </>
  );
};

export default CategoryPage;
