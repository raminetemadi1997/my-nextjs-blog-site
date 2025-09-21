import { IHomeProps } from "@/types/Home/Home";
import React from "react";
import HomeContent from "@/components/desktop/home/HomeContent";
import BannerContainer from "../mobile/home/BannerContainer";
import Carousel from "../desktop/home/Carousel";
import { responsiveValues } from "@/utils/responsive";
import MobileLayout from "../mobile/public/Layout";
import Slogan from "../mobile/home/Slogan";
import Layout from "../desktop/public/Layout";
import MobileCarousel from "../mobile/home/Carousel";
import CardBox from "../mobile/public/CardBox";
import Title from "../public/Title";
import Card from "../mobile/public/Card";
import Categories from "../mobile/home/Categories";

export default async function HomeTemplate({
  content,
}: Pick<IHomeProps, "content">) {
  const isMobile = await responsiveValues();

  const bannerVisible = content.banners && content.banners.status;
  const selectedPostsVisible =
    content.selectedPosts && content.selectedPosts.status;

    
  if (isMobile) {
    const recentlyPostsVisible =
      content?.recentlyPosts.status && content?.recentlyPosts.data.length > 0;
    const selectedCategoriesVisible =
      content?.selectedCategories && content?.selectedCategories.status;
    return (
      <MobileLayout>
        {bannerVisible && <Slogan {...content.banners.data} />}
        {selectedPostsVisible && <MobileCarousel {...content.selectedPosts} />}
        {recentlyPostsVisible && (
          <CardBox>
            <Title title="پست های اخیر" />
            <div className="space-y-4">
              {content?.recentlyPosts.data.map((item, i) => (
                <Card
                  {...item.data.content}
                  {...item.data.extra}
                  key={`card_item_${item.data.content.id}_${i}`}
                />
              ))}
            </div>
            {content?.recentlyPosts.data.length > 6 && (
              <div className="text-center my-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#253A57] text-white rounded-md"
                >
                  عناوین بیشتر
                </button>
              </div>
            )}
          </CardBox>
        )}

        {selectedCategoriesVisible &&
          content.selectedCategories.data.map(
            (item) =>
              item.data.extra.posts.length > 0 && (
                <Categories key={item.data.id} {...item} bottomTitle="مشاهده همه عناوین" bottomSlug="#" />
              )
          )}
      </MobileLayout>
    );
  }

  return (
    <Layout>
      {bannerVisible && <BannerContainer {...content.banners.data} />}

      {selectedPostsVisible && <Carousel {...content.selectedPosts} />}

      <HomeContent
        allCategories={content.allCategories}
        recentlyPosts={content.recentlyPosts}
        selectedCategories={content.selectedCategories}
      />
    </Layout>
  );
}
