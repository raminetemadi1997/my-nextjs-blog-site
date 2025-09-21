import { ICategoryData } from "@/types/Category/Category";
import CardBox from "../public/CardBox";

import Card from "../public/Card";
import Pagination from "@/components/public/category/Pagination";
import Banner from "@/components/mobile/public/Banner";
import Swiper from "@/components/public/Swiper";
import SidebarItem from "@/components/public/SidebarItem";
import RecentlyPosts from "@/components/public/RecentlyPosts";
import Sort from "@/components/public/category/Sort";

export default function Content(
  props: Pick<ICategoryData, "content" | "extra" | "statusControl">
) {
  const { extra, statusControl } = props;

  const swiperData =
    statusControl.bannerStatus == 1 &&
    extra.banners.data.middleBanner.map((item) => (
      <Banner
        key={item.name}
        indexWeb={item.mobileImage.indexWeb}
        indexArray={item.mobileImage.indexArray}
        currentImage={item.mobileImage.currentImage}
        width={1280}
        height={568}
        text={item.name}
        alt={item.mobileImageAlt}
        href={item.link}
      />
    ));
  return (
    <section className="space-y-4">
      <CardBox padding={0}>
        <div className="px-2">
          <Sort />
        </div>
        <div className="space-y-4">
          {extra.posts.data.map((item) => (
            <div key={item.data.content.id} className="px-2">
              <Card {...item.data.content} {...item.data.extra} />
            </div>
          ))}
          {statusControl?.bannerStatus == 1 && (
            <div className="py-2 bg-white">
              {extra.banners.data.middleBanner.length > 1 ? (
                <Swiper slides={swiperData || []} col={1} gap={0} />
              ) : (
                swiperData
              )}
            </div>
          )}
        </div>
      </CardBox>

      {statusControl?.bannerStatus == 1 &&
        (extra.banners.data.footerBanner.length > 1 ? (
          <Swiper slides={swiperData || []} col={1} gap={0} />
        ) : (
          swiperData
        ))}

      {extra.posts?.last_page && extra.posts?.last_page > 1 && (
        <Pagination
          currentPage={extra.posts?.current_page}
          totalPages={extra.posts?.total}
        />
      )}

      <div className="px-2">

      {extra.allCategories && extra.allCategories.data.length > 0 && (
              <SidebarItem title="دسته بندی ها" {...extra.allCategories} />
            )}

            {statusControl?.bannerStatus == 1 && (
              <>
                {extra.banners.data.sidebarBanner.length > 1 ? (
                  <Swiper slides={swiperData || []} col={1} gap={0} />
                ) : (
                  swiperData
                )}
              </>
            )}

            {extra.recentlyPosts && extra.recentlyPosts.data.length > 0 && (
              <RecentlyPosts title="پست های محبوب" {...extra.recentlyPosts} />
            )}

      </div>
    </section>
  );
}
