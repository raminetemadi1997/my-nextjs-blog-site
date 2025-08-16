import Container from "@/components/Container";
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import HomeCardContainer from "./HomeCardContainer";
import { responsiveValues } from "@/utils/responsive";
import { IAllCategoriesData, IRPData } from "@/types/HomeContent/RecentlyPosts";
import { ISCData } from "@/types/HomeContent/SelectedCategories";
import SelectedCategories from "./SelectedCategories";

interface IHomeContentProps {
  allCategories?: IAllCategoriesData;
  recentlyPosts?: IRPData;
  selectedCategories?: ISCData;
}

export default async function HomeContent({
  allCategories,
  recentlyPosts,
  selectedCategories,
}: IHomeContentProps) {
  const isMobile = await responsiveValues();

  const hasRecentPosts =
    recentlyPosts?.status &&
    Array.isArray(recentlyPosts.data) &&
    recentlyPosts.data.length > 0;

  const validSelectedCategories = selectedCategories?.status
    ? selectedCategories.data.filter(
        (item) => item.data?.extra?.posts && item.data.extra.posts.length > 0
      )
    : [];

  return (
    <section className="md:bg-white bg-[#F2F2F2] md:px-0 px-2">
      <Container>
        <div className="md:grid grid-cols-4 gap-8">
          <div className="col-span-3 space-y-8">
            {hasRecentPosts && (
              <HomeCardContainer
                {...recentlyPosts}
                title="پست های اخیر"
                slug="/recently-post"
                buttonText="مشاهده بیشتر"
              />
            )}

            {validSelectedCategories.map((item) => (
              <SelectedCategories key={item.data.id} {...item} />
            ))}
          </div>

          {!isMobile && allCategories?.status && (
            <div>
              <Sidebar>
                {allCategories.data.length > 0 && (
                  <SidebarItem {...allCategories} title="همه دسته بندی ها" />
                )}
              </Sidebar>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
