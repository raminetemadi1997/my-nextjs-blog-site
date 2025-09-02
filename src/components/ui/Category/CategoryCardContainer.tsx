import React from "react";
import Sort from "./Sort";
import Pagination from "./Pagination";
import ImagePost from "../Public/ImagePost";
import Banner from "../Banner/Banner";
import MySwiper from "@/components/MySwiper";
import { ICategoryData } from "@/types/Category/Category";

export default async function CategoryCardContainer({
  extra,
  statusControl,
}: Pick<ICategoryData, "extra" | "statusControl">) {
  const { posts, banners } = extra;
  const { bannerStatus } = statusControl;

  const swiperData = (items: typeof banners.data.footerBanner) =>
    items.map((item) => (
      <Banner
        key={item.name}
        indexWeb={item.image.indexWeb}
        indexArray={item.image.indexArray}
        height={634}
        width={1028}
        alt={item.imageAlt}
        href={item.link}
        text={item.name}
      />
    ));

  return (
    <div className="md:bg-white bg-[#F2F2F2] md:p-0 p-2 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <Sort />
        <div className="flex items-center gap-1.5 md:text-sm text-xs text-gray-700">
          <span className="font-bold">{posts?.data.length || 0}</span>
          <span>مطلب موجود است.</span>
        </div>
      </div>

      <div className={`grid md:grid-cols-3 grid-cols-1 gap-2`}>
        {posts?.data.map((item) => (
          <ImagePost
            key={item.data.content.id}
            content={item.data.content}
            user={item.data.extra.user}
          />
        ))}

        {bannerStatus === 1 && banners?.data.middleBanner?.length > 0 && (
          <div className="col-span-3">
            {banners.data.middleBanner.length > 1 ? (
              <MySwiper
                slides={swiperData(banners.data.middleBanner)}
                col={1}
                gap={0}
              />
            ) : (
              swiperData(banners.data.middleBanner)[0]
            )}
          </div>
        )}
      </div>
      {bannerStatus === 1 &&
        banners?.data.footerBanner?.length > 0 &&
        (banners.data.footerBanner.length > 1 ? (
          <MySwiper
            slides={swiperData(banners.data.footerBanner)}
            col={1}
            gap={0}
          />
        ) : (
          swiperData(banners.data.footerBanner)[0]
        ))}
      {posts?.last_page && posts?.last_page > 1 && (
        <Pagination
          currentPage={posts?.current_page}
          totalPages={posts?.total}
        />
      )}
    </div>
  );
}
