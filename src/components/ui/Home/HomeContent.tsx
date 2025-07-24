
import Container from "@/components/Container";
import Sidebar from "../Sidebar";
import SidebarItem from "../Sidebar/SidebarItem";
import Banner from "../Banner/Banner";

import HomeCardContainer from "./HomeCardContainer";



export default function HomeContent() {


  return (
    <section className="md:bg-white bg-[#F2F2F2] md:px-0 px-2">
      <Container>
        <div className={`md:grid grid-cols-4 gap-8`}>
          <div className={`col-span-3 space-y-8`}>
            <HomeCardContainer title="پست های اخیر"  />
          </div>
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
        </div>
      </Container>
    </section>
  )
}
