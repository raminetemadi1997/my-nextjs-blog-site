import BannerContainer from "@/components/ui/Banner/BannerContainer";
import Carousel from "@/components/ui/Carousel";
import HomeContent from "@/components/ui/Home/HomeContent";
import MobileBannerContainer from "@/components/ui/Mobile/MobileBannerContainer";
import { responsiveValues } from "@/utils/responsive";

const Home = async () => {
  const isMobile = await responsiveValues();
  return (
    <>
      {isMobile ? <MobileBannerContainer /> : <BannerContainer />}

      <Carousel />

      <HomeContent />
    </>
  );
};

export default Home;
