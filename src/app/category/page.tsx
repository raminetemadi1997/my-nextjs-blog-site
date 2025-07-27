import type { Metadata } from "next";
import Carousel from "@/components/ui/Carousel";
import CategoryBannerContainer from "@/components/ui/Category/CategoryBannerContainer";
import CategoryContent from "@/components/ui/Category/CategoryContent";
import { responsiveValues } from "@/utils/responsive";
import MobileCarousel from "@/components/ui/Mobile/MobileCarousel";
import Sidebar from "@/components/ui/Sidebar";
import SidebarItem from "@/components/ui/Sidebar/SidebarItem";
import Banner from "@/components/ui/Banner/Banner";

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

      {isMobile && (
        <div>
          <Sidebar>
            <SidebarItem title="دسته بندی ها" />
            <Banner
              webpSrc="/images/test_image.webp"
              fallbackSrc="/images/test_image.png"
              alt="بنر"
              height={1024}
              width={1024}
              imageClassName="object-cover w-full h-full rounded-md"
              href="/"
            />
            <SidebarItem title="محبوب ترین مقاله ها" />
          </Sidebar>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
