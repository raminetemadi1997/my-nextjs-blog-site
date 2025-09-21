import Container from "@/components/public/Container";
import Sidebar from "../../public/Sidebar";
import SidebarItem from "../../public/SidebarItem";
import HomeCardContainer from "./HomeCardContainer";
import SelectedCategories from "./SelectedCategories";
import { IHomeContent } from "@/types/Home/Home";



export default async function HomeContent( props : Pick<IHomeContent ,'allCategories' | 'recentlyPosts' | 'selectedCategories'>) {
  const { allCategories ,recentlyPosts ,selectedCategories} = props

  const allCategoriesVisible = allCategories && allCategories.status

  const recentlyPostsVisible = recentlyPosts && recentlyPosts.status

  const selectedCategoriesVisible = selectedCategories && selectedCategories.status


  return (
    <section className="bg-white px-0">
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
