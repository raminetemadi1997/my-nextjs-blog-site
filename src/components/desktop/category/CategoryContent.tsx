import Container from "@/components/public/Container";
import Title from "../../public/category/Title";
import CategoryCardContainer from "./CategoryCardContainer";
import Sidebar from "../../public/Sidebar";
import SidebarItem from "../../public/SidebarItem";
import Banner from "../../mobile/public/Banner";
import { ICategoryData } from "@/types/Category/Category";
import RecentlyPosts from "../../public/RecentlyPosts";
import Swiper from "@/components/public/Swiper";

export default async function CategoryContent(
  props: Pick<ICategoryData, "content" | "extra" | "statusControl">
) {
  const { content, extra, statusControl } = props;

  const swiperData = statusControl.bannerStatus == 1 && extra.banners.data.sidebarBanner.map((item) => (
    <Banner
      key={item.name}
      indexWeb={item.image.indexWeb}
      indexArray={item.image.indexArray}
      currentImage={item.image.currentImage}
      width={1280}
      height={568}
      text={item.name}
      alt={item.imageAlt}
      href={item.link}
    />
  ));

  return (
    <section>
      <Container>
        <div className={`md:grid grid-cols-4 gap-8`}>
          <div className={`md:col-span-3 col-span-4 md:space-y-8 space-y-4`}>
            <Title title={content?.name} />
            <CategoryCardContainer {...props} />
          </div>
          <Sidebar>
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
          </Sidebar>
        </div>
      </Container>
    </section>
  );
}
