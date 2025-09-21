import Breadcrumb from "@/components/public/Breadcrumb";
import Picture from "@/components/public/Picture";
import BodyContent from "@/components/public/post/BodyContent";
import Comment from "@/components/public/post/Comment";
import SpecialBoxConianer from "@/components/public/post/SpecialBox/SpecialBoxConianer";
import Tags from "@/components/public/post/Tags";
import Published from "@/components/public/Published";
import Swiper from "@/components/public/Swiper";
import Banner from "@/components/mobile/public/Banner";
import RecentlyPosts from "@/components/public/RecentlyPosts";
import Sidebar from "@/components/public/Sidebar";
import SidebarItem from "@/components/public/SidebarItem";
import { IPostData } from "@/types/Post/Post";
import React from "react";


type TMobilePostContentProps = Pick<IPostData, "content" | "statusControl" | "extra"> & {
  mobile ?: boolean
}

export default function MobilePostContent({
  content,
  extra,
  statusControl,
  mobile = false,
}: TMobilePostContentProps) {
  const { banners, recentlyPosts, allCategories, user, categoryRelations } =
    extra;
  const { commentStatus, specialBoxStatus, bannerStatus } = statusControl;

  
  
  const swiperData = (
    items: typeof banners.data.footerBanner,
    size: { w: number; h: number }
  ) =>
    bannerStatus == 1 &&
    items.map((item) => (
      <Banner
        key={item.name}
        indexWeb={item.mobileImage.indexWeb}
        indexArray={item.mobileImage.indexArray}
        height={size.h}
        width={size.w}
        alt={item.mobileImageAlt}
        href={item.link}
        text={item.name}
      />
    ));
  return (
    

      <section className="bg-white md:px-0 px-2">
        <div className="md:grid grid-cols-4 gap-8">
          <div className="col-span-3 space-y-4">
            <Breadcrumb
              category_name={content.name}
              category_slug={extra.category.slug}
              post_name={content.name}
            />

            <div className="user-section grid grid-cols-2 gap-y-4 items-center">
              <div className="flex gap-4 items-center">
                <Picture
                  indexWeb={user.image.indexWeb}
                  indexArray={user.image.indexArray}
                  alt={user.fullName}
                  width={30}
                  height={30}
                  currentImage={user.image.currentImage}
                  imageClassName="rounded-full"
                />
                <div className="md:text-sm text-xs text-[#A1A2A7] truncate">
                  {user.fullName}
                </div>
              </div>
              <div className="place-items-end">
                <Published persianDate={content.persianDate} />
              </div>
              <div className="md:text-sm text-xs text-[#A1A2A7]">
                زمان مطالعه مورد نیاز: {content.readingTime} دقیقه
              </div>
            </div>

            {bannerStatus === 1 &&
              (banners.data.headerBanner?.length > 1 ? (
                <Swiper
                  slides={
                    swiperData(banners.data.headerBanner, {
                      w: 1028,
                      h: 634,
                    }) || []
                  }
                  col={1}
                  gap={0}
                />
              ) : (
                swiperData(banners.data.headerBanner, { w: 1028, h: 634 })
              ))}

            {content.body && (
              <BodyContent
                body={content}
                middleBanner={
                  bannerStatus == 1 &&
                  (banners.data.middleBanner?.length > 1 ? (
                    <Swiper
                      slides={
                        swiperData(banners.data.middleBanner, {
                          w: 1028,
                          h: 634,
                        }) || []
                      }
                      col={1}
                      gap={0}
                    />
                  ) : (
                    swiperData(banners.data.middleBanner, { w: 1028, h: 634 })
                  ))
                }
              />
            )}

            {bannerStatus === 1 &&
              (banners.data.footerBanner?.length > 1 ? (
                <Swiper
                  slides={
                    swiperData(banners.data.footerBanner, {
                      w: 1028,
                      h: 634,
                    }) || []
                  }
                  col={1}
                  gap={0}
                />
              ) : (
                swiperData(banners.data.footerBanner, { w: 1028, h: 634 })
              ))}

            {specialBoxStatus && <SpecialBoxConianer {...extra} mobile={mobile} />}
            {categoryRelations && <Tags {...extra} />}
            {commentStatus && <Comment postSlug={content.postSlug} />}
          </div>

          <Sidebar>
            {allCategories?.status && allCategories.data?.length > 0 && (
              <SidebarItem
                title="دسته بندی ها"
                data={allCategories.data}
                className="pt-2"
              />
            )}
            {bannerStatus == 1 &&
              (banners.data.sidebarBanner?.length > 1 ? (
                <Swiper
                  slides={
                    swiperData(banners.data.sidebarBanner, {
                      w: 1028,
                      h: 634,
                    }) || []
                  }
                  col={1}
                  gap={0}
                />
              ) : (
                swiperData(banners.data.sidebarBanner, { w: 1028, h: 634 })
              ))}
            {recentlyPosts?.status && recentlyPosts.data?.length > 0 && (
              <RecentlyPosts title="آخرین مقالات" {...recentlyPosts} />
            )}
          </Sidebar>
        </div>
      </section>

    
  );
}
