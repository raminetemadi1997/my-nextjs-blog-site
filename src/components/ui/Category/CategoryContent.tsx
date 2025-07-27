import Container from "@/components/Container";
import CategoryTitle from "./CategoryTitle";
import CategoryCardContainer from "./CategoryCardContainer";
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import Banner from "../Banner/Banner";
import { responsiveValues } from "@/utils/responsive";

export default async function CategoryContent() {
  const isMobile = await responsiveValues();
  return (
    <section>
      <Container>
        <div className={`md:grid grid-cols-4 gap-8`}>
          <div className={`md:col-span-3 col-span-4 space-y-8`}>
            <CategoryTitle title="دوربین مدار بسته" />
            <CategoryCardContainer />
          </div>
          {
            !isMobile &&
            (
              <div>
                <Sidebar>
                  <SidebarItem title="دسته بندی ها" />
                  <Banner
                    webpSrc="/images/test_image.webp"
                    fallbackSrc="/images/test_image.png"
                    alt="بنر"
                    height={1024}
                    width={1024}
                    imageClassName="object-cover w-full h-full rounded-md"
                    href="/"
                  />
                  <SidebarItem title="محبوب ترین مقاله ها" />
                </Sidebar>
              </div>

            )
          }
        </div>
      </Container>
    </section>
  );
}
