import Layout from "@/components/responsive/Layout";
import { ICategoryData } from "@/types/Category/Category";
import React from "react";
import CategoryBannerContainer from "./CategoryBannerContainer";
import CategoryContent from "./CategoryContent";

export default function Category(props: Pick <ICategoryData , 'content' | 'extra' | 'statusControl'>) {
  const {extra ,statusControl} = props
  return (
    <Layout>
      {statusControl.bannerStatus == 1 &&
        extra.banners.data.headerBanner?.length > 0 && (
          <CategoryBannerContainer {...extra.banners.data} />
        )}
      <CategoryContent {...props}/>
    </Layout>
  );
}
