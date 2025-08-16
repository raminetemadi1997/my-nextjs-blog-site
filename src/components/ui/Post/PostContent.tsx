import Container from "@/components/Container";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import { ApiData, BannerItem } from "@/types/Post/Post";
import User from "../Public/User";
import Published from "../Public/Published";
import BodyContent from "./BodyContent";
// import { responsiveValues } from "@/utils/responsive";
import SidebarItem from "../Sidebar/SidebarItem";
import Sidebar from "../Sidebar";
import RecentlyPosts from "./RecentlyPosts";
import Tags from "./Tags";
import Banner from "../Banner/Banner";

export default async function PostContent({ content, extra }: ApiData) {
  // const isMobile = await responsiveValues();
  const { banners, recentlyPosts, allCategories, category, user, categoryRelations } = extra;

  const hasBanner = (sectionKey: keyof typeof banners.data) =>
    banners?.status && banners?.data?.[sectionKey]?.length > 0;

    const recentlyPostsAvailable = recentlyPosts?.status && recentlyPosts?.data?.length > 0;
  const allCategoriesAvailable = allCategories?.status && allCategories?.data?.length > 0;

  

  return (
    <section className="md:bg-white bg-[#F2F2F2] md:px-0 px-2">
      <Container>
        <div className="md:grid grid-cols-4 gap-8">
          <div className="col-span-3 space-y-8">
            <Breadcrumb
              category_name={category.name}
              category_slug={category.slug}
              post_name={content.name}
            />
            <div className="user-section flex items-center justify-between">
              <div className="flex gap-4 items-center">
                {(content.persianDate || user) && (
                  <>
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
                  </>
                )}
              </div>
              <div className="md:text-sm text-xs text-[#A1A2A7]">
                زمان مطالعه مورد نیاز: {content.readingTime} دقیقه
              </div>
            </div>
            {hasBanner("headerBanner") &&
              extra?.banners.data.headerBanner.map(
                ({ image, link, name, imageAlt }: BannerItem, i) => (
                  <Banner
                    key={i}
                    indexWeb={image.indexWeb}
                    indexArray={image.indexArray}
                    currentImage={image.currentImage}
                    alt={imageAlt}
                    width={1028}
                    height={634}
                    text={name}
                    href={link}
                  />
                )
              )}
            {content.body && (
              <BodyContent
                body={content}
                middleBanner={
                  hasBanner("middleBanner") &&
                  extra?.banners.data.middleBanner.map(
                    ({ image, link, name, imageAlt }: BannerItem, i) => (
                      <Banner
                        key={i}
                        indexWeb={image.indexWeb}
                        indexArray={image.indexArray}
                        currentImage={image.currentImage}
                        alt={imageAlt}
                        width={1028}
                        height={634}
                        text={name}
                        href={link}
                      />
                    )
                  )
                }
              />
            )}
            {hasBanner("footerBanner") &&
              extra?.banners.data.footerBanner.map(
                ({ image, link, name, imageAlt }: BannerItem, i) => (
                  <Banner
                    key={i}
                    indexWeb={image.indexWeb}
                    indexArray={image.indexArray}
                    currentImage={image.currentImage}
                    alt={imageAlt}
                    width={1028}
                    height={634}
                    text={name}
                    href={link}
                  />
                )
              )}
            {categoryRelations && <Tags data={categoryRelations} />}
          </div>

          <div>
            <Sidebar>
              {allCategoriesAvailable  && (
                <SidebarItem
                  title="دسته بندی ها"
                  data={allCategories.data}
                  className="pt-2"
                />
              )}

              {hasBanner("sidebarBanner") &&
                extra?.banners.data.sidebarBanner.map(
                  ({ image, link, name, imageAlt }: BannerItem, i) => (
                    <Banner
                      key={i}
                      indexWeb={image.indexWeb}
                      indexArray={image.indexArray}
                      currentImage={image.currentImage}
                      alt={imageAlt}
                      width={380}
                      height={303}
                      text={name}
                      href={link}
                    />
                  )
                )}

              {recentlyPostsAvailable  && (
                <RecentlyPosts
                  title="پست های محبوب"
                  data={recentlyPosts.data}
                />
              )}

              
            </Sidebar>
          </div>
        </div>
      </Container>
    </section>
  );
}
