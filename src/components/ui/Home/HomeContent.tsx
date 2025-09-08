import Container from "@/components/Container";
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import HomeCardContainer from "./HomeCardContainer";
import SelectedCategories from "./SelectedCategories";
import { IHomeContent } from "@/types/Home/Home";

export default async function HomeContent(props: Pick<IHomeContent ,'allCategories' | 'recentlyPosts' | 'selectedCategories'>) {
  const { allCategories ,recentlyPosts ,selectedCategories} = props

  const allCategoriesVisible = allCategories && allCategories.status

  const recentlyPostsVisible = recentlyPosts && recentlyPosts.status

  const selectedCategoriesVisible = selectedCategories && selectedCategories.status


  return (
    <section className="md:bg-white bg-[#F2F2F2] md:px-0 px-2">
      <Container>
        <div className="md:grid grid-cols-4 gap-8">
          <div className="col-span-3 space-y-8">
            {recentlyPostsVisible && (
              <HomeCardContainer
                title="پست های اخیر"
                slug="/recently-post"
                buttonText="مشاهده بیشتر"
                bottomTitle='مشاهده مقالات بیشتر'
                bottomSlug="/"
                recentlyPosts={recentlyPosts}
              />
            )}

            {selectedCategoriesVisible && selectedCategories.data.map((item) => (
              item.data.extra.posts.length > 0 &&
              <SelectedCategories key={item.data.id} {...item} />
            ))}
          </div>

          {allCategoriesVisible && (
              <Sidebar>
                {allCategories.data.length > 0 && (
                  <SidebarItem {...allCategories} title="همه دسته بندی ها" />
                )}
              </Sidebar>
          )}
        </div>
      </Container>
    </section>
  );
}
