import BannerContainer from "@/components/ui/Banner/BannerContainer";
import Carousel from "@/components/ui/Carousel";
import HomeContent from "@/components/ui/Home/HomeContent";
import MobileBannerContainer from "@/components/ui/Mobile/MobileBannerContainer";
import MobileCarousel from "@/components/ui/Mobile/MobileCarousel";
import axios from "@/lib/axios";
import { responsiveValues } from "@/utils/responsive";

const Home = async () => {
  const isMobile = await responsiveValues();

  const data = await axios
    .get("/api/blog/home")
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      {isMobile ? (
        <>
          <MobileBannerContainer />
          <MobileCarousel />
        </>
      ) : (
        <>
          <BannerContainer
            topBanner={data.data.content.banners.data.topBanner}
            middleBanner={data.data.content.banners.data.middleBanner}
            sideBanners={data.data.content.banners.data.sideBanners}
          />

          <Carousel {...data.data.contentselectedPosts} />
        </>
      )}

      <HomeContent allCategories={data.data.content.allCategories} recentlyPosts={data.data.content.recentlyPosts}  selectedCategories={data.data.content.selectedCategories}/>
    </>
  );
};

export default Home;
