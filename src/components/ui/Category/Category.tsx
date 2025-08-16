import Layout from "@/components/responsive/Layout";
import {ICategoryResponse } from "@/types/Category/Category";
import React from "react";
import CategoryBannerContainer from "./CategoryBannerContainer";
import CategoryContent from "./CategoryContent";


export default function Category({ data }: ICategoryResponse) {
  const headerBanner =
    data.statusControl.bannerStatus == 1 &&
    data.extra.banners &&
    data.extra.banners.data.headerBanner.length > 0;

  return (
    <Layout>
      {headerBanner && (
        <CategoryBannerContainer
          {...data.extra?.banners?.data.headerBanner[0]}
        />
      )}

      <CategoryContent
        content={data.content}
        extra={data.extra}
        message={data.message}
        meta={data.meta}
        status={data.status}
        statusControl={data.statusControl}
      />
    </Layout>
  );
}
