import { ICategoryData } from "@/types/Category/Category";
import React from "react";
import CategoryBannerContainer from "../desktop/category/CategoryBannerContainer";
import CategoryContent from "../desktop/category/CategoryContent";
import { responsiveValues } from "@/utils/responsive";
import MobileLayout from "../mobile/public/Layout";
import Layout from "../desktop/public/Layout";
import Slogan from "../mobile/category/Slogan";
import Content from "../mobile/category/Content";
import Title from "../public/category/Title";

export default async function CategoryTemplate(
  props: Pick<ICategoryData, "content" | "extra" | "statusControl">
) {
  const isMobile = await responsiveValues();
  const { extra, statusControl , content } = props;

  const topBannerVisible =
    statusControl.bannerStatus == 1 &&
    extra.banners.data.headerBanner?.length > 0;

  if (isMobile) {
    return (
      <MobileLayout>
        {topBannerVisible && <Slogan {...extra.banners.data} />}
        {content.name && <Title title={content.name} />}
        {extra.posts.data.length > 0 && (
          <Content {...props} />
        )}
      </MobileLayout>
    );
  }
  return (
    <Layout>
      {topBannerVisible && <CategoryBannerContainer {...extra.banners.data} />}
      <CategoryContent {...props} />
    </Layout>
  );
}
