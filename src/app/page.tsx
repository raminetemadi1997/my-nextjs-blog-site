import Layout from "@/components/responsive/Layout";
import MobileLayout from "@/components/responsive/MobileLayout";
import BannerContainer from "@/components/ui/Banner/BannerContainer";
import Carousel from "@/components/ui/Carousel";
import HomeContent from "@/components/ui/Home/HomeContent";
import { handlerApi } from "@/services/handlerApi";
import { IHomeResponseApi } from "@/types/Home/Home";
import { responsiveValues } from "@/utils/responsive";

const Home = async () => {
  const isMobile = await responsiveValues();
  const data = (await handlerApi("home")) as IHomeResponseApi;

  const bannerVisible =
    data.data.content.banners && data.data.content.banners.status;

  const selectedPostsVisible =
    data.data.content.selectedPosts && data.data.content.selectedPosts.status;

  if (isMobile) {
    return (
      <MobileLayout>
        <></>
      </MobileLayout>
    );
  }

  return (
    <Layout>
      {bannerVisible && <BannerContainer {...data.data.content.banners.data} />}

      {selectedPostsVisible && (
        <Carousel {...data.data.content.selectedPosts} />
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
