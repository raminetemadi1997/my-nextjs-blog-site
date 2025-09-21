import Container from "@/components/public/Container";
import React from "react";
import Breadcrumb from "../../public/Breadcrumb";
import { IPostData } from "@/types/Post/Post";
import User from "../../public/User";
import Published from "../../public/Published";
import BodyContent from "../../public/post/BodyContent";
import SidebarItem from "../../public/SidebarItem";
import Sidebar from "../../public/Sidebar";
import RecentlyPosts from "../../public/RecentlyPosts";
import Tags from "../../public/post/Tags";
import Banner from "../../mobile/public/Banner";

import SpecialBoxConianer from "../../public/post/SpecialBox/SpecialBoxConianer";
import Swiper from "@/components/public/Swiper";
import Comment from "@/components/public/post/Comment";

export default async function PostContent({
  content,
  extra,
  statusControl,
}: Pick<IPostData, "content" | "statusControl" | "extra">) {
  const { banners, recentlyPosts, allCategories, user, categoryRelations  } =
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
        indexWeb={item.image.indexWeb}
        indexArray={item.image.indexArray}
        height={size.h}
        width={size.w}
        alt={item.imageAlt}
        href={item.link}
        text={item.name}
      />
    ));
    
  return (
    <section className="bg-white md:px-0 px-2">
      <Container>
        <div className="md:grid grid-cols-4 gap-8">
          <div className="col-span-3 space-y-8">
            <Breadcrumb
              category_name={content.name}
              category_slug={extra.category.slug}
              post_name={content.name}
            />

            <div className="user-section flex items-center justify-between">
              <div className="flex gap-4 items-center">
                {user && (
                  <User
                    fullName={user.fullName}
                    image={user.image}
                    id={user.id}
                  />
                )}
                {content.persianDate && (
                  <Published persianDate={content.persianDate} />
                )}
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
                  bannerStatus == 1 && (banners.data.middleBanner?.length > 1 ? (
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
                  )
                )}
              />
            )}

            {bannerStatus === 1 &&( banners.data.footerBanner?.length > 1 ? (
              <Swiper
                slides={
                  swiperData(banners.data.footerBanner, { w: 1028, h: 634 }) ||
                  []
                }
                col={1}
                gap={0}
              />
            ) : (
              swiperData(banners.data.footerBanner, { w: 1028, h: 634 })
            ))}

            {specialBoxStatus && <SpecialBoxConianer {...extra} />}
            {categoryRelations && <Tags {...extra}/>}
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
            {bannerStatus == 1 && (banners.data.sidebarBanner?.length > 1 ? (
              <Swiper
                slides={
                  swiperData(banners.data.sidebarBanner, { w: 1028, h: 634 }) ||
                  []
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
      </Container>
    </section>
  );
}
