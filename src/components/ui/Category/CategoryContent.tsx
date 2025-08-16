import Container from "@/components/Container";
import CategoryTitle from "./CategoryTitle";
import CategoryCardContainer from "./CategoryCardContainer";
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import Banner from "../Banner/Banner";

import { ICategoryBanner, ICategoryData } from "@/types/Category/Category";
import RecentlyPosts from "../Post/RecentlyPosts";

export default async function CategoryContent({
  content,
  extra,
  statusControl,
}: ICategoryData) {
  const hasBanner = (sectionKey: keyof typeof extra.banners.data) =>
    extra.banners?.status && extra.banners?.data?.[sectionKey]?.length > 0;
  const allCategoriesAvailable =
    extra.allCategories.status && extra.allCategories.data.length > 0;
  const recentlyPostsAvailable =
    extra.recentlyPosts?.status && extra.recentlyPosts?.data?.length > 0;

  return (
    <section>
      <Container>
        <div className={`md:grid grid-cols-4 gap-8`}>
          <div className={`md:col-span-3 col-span-4 md:space-y-8 space-y-4`}>
            <CategoryTitle title={content.name} />
            <CategoryCardContainer {...extra} />
          </div>
          <Sidebar>
            {allCategoriesAvailable && (
              <SidebarItem title="دسته بندی ها" {...extra.allCategories} />
            )}

            {statusControl.bannerStatus == 1 &&
              hasBanner("sidebarBanner") &&
              extra.banners.data.sidebarBanner.map(
                ({ image, link, name, imageAlt }: ICategoryBanner, i) => (
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

            {recentlyPostsAvailable && (
              <RecentlyPosts title="پست های محبوب" {...extra.recentlyPosts} />
            )}
          </Sidebar>
        </div>
      </Container>
    </section>
  );
}
