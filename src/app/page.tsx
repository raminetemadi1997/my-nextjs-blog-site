import Layout from "@/components/responsive/Layout";
import MobileLayout from "@/components/responsive/MobileLayout";
import BannerContainer from "@/components/ui/Banner/BannerContainer";
import Carousel from "@/components/ui/Carousel";
import HomeContent from "@/components/ui/Home/HomeContent";
import MobileBannerContainer from "@/components/ui/Mobile/MobileBannerContainer";
import MobileCarousel from "@/components/ui/Mobile/MobileCarousel";
import { handlerApi } from "@/services/handlerApi";
import { responsiveValues } from "@/utils/responsive";

const Home = async () => {
  const isMobile = await responsiveValues();
  const data = await handlerApi("home");

  const bannerVisible = !!(
    data.data.content.banners.status &&
    (data.data.content.banners.data.topBanner ||
      data.data.content.banners.data.middleBanner ||
      data.data.content.banners.data.sideBanners.length > 0)
  );

  if (isMobile) {
    return (
      <MobileLayout>
        <></>
      </MobileLayout>
    );
  }

  return (
    <Layout>
      {isMobile ? (
        <>
          <MobileBannerContainer />
          <MobileCarousel />
        </>
      ) : (
        <>
          {bannerVisible && (
            <BannerContainer
              topBanner={data.data.content.banners.data.topBanner}
              middleBanner={data.data.content.banners.data.middleBanner}
              sideBanners={data.data.content.banners.data.sideBanners}
            />
          )}
          {data.data.content.selectedPosts.status && (
            <Carousel {...data.data.content.selectedPosts} />
          )}
        </>
      )}

      <HomeContent
        allCategories={data.data.content.allCategories}
        recentlyPosts={data.data.content.recentlyPosts}
        selectedCategories={data.data.content.selectedCategories}
      />
    </Layout>
  );
};

export default Home;
