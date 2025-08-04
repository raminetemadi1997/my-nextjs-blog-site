import BannerContainer from "@/components/ui/Banner/BannerContainer";
import Carousel from "@/components/ui/Carousel";
import HomeContent from "@/components/ui/Home/HomeContent";
import MobileBannerContainer from "@/components/ui/Mobile/MobileBannerContainer";
import MobileCarousel from "@/components/ui/Mobile/MobileCarousel";
import { responsiveValues } from "@/utils/responsive";





const Home = async () => {
  const isMobile = await responsiveValues();



  return (
    <>
      {isMobile ? (
        <>
          <MobileBannerContainer />
          <MobileCarousel />
        </>
      ) : (
        <>
          <BannerContainer />

          <Carousel />
        </>
      )}

      <HomeContent />
    </>
  );
};

export default Home;
