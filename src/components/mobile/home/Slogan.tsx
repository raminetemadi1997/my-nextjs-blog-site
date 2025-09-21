import Container from "@/components/public/Container";
import Swiper from "@/components/public/Swiper";
import Banner from "@/components/mobile/public/Banner";
import { IBannerData } from "@/types/Home/Home";

export default function Slogan({middleBanner , sideBanners ,topBanner}:IBannerData) {


  const combineSlides = [...sideBanners , middleBanner]


  const swiperData = combineSlides.map((item , i) => (
    <Banner
      key={`slides_${item.id}_${i}`}
      indexWeb={item.image.indexWeb}
      indexArray={item.image.indexArray}
      currentImage={item.image.currentImage}
      width={1280}
      height={568}
      text={item.title}
      alt={item.imageAlt}
      href={item.link}
    />
  ));
  

  return (
    <section className="md:py-8 py-4">
      <Container>
        <div className="grid-cols-3 auto-rows-[100px] gap-2">
          {topBanner && (
              <Banner
                indexWeb={topBanner.image.indexWeb}
                indexArray={topBanner.image.indexArray}
                alt={topBanner.imageAlt}
                href={topBanner.link}
                height={1024}
                width={1024}
                imageClassName="object-cover w-full h-full"
              />
            )}
          
          <div className="col-span-3 row-span-5">
            <Swiper col={1} gap={5} slides={swiperData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
