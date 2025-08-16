import Container from "@/components/Container";
import Banner from "./Banner";
import { IPictureProps } from "@/types/picture";

export interface IBannerProps {
  topBanner: IBannerData;
  middleBanner: IBannerData;
  sideBanners: IBannerData[];
}

interface IBannerData {
  id: number;
  title: string;
  image: IPictureProps;
  imageAlt: string;
  link: string;
}

const BannerContainer = ({
  middleBanner,
  topBanner,
  sideBanners,
}: IBannerProps) => {

  return (
    <section className="py-8 bg-[#e4e4e4]/50">
      <Container>
        <div className="grid grid-cols-3 auto-rows-[100px] gap-1">

          <div className="col-span-2 row-span-1">
            {topBanner && (
              <Banner
                indexWeb={topBanner.image.indexWeb}
                indexArray={topBanner.image.indexArray}
                alt={topBanner.imageAlt}
                href={topBanner.link}
                height={1024}
                width={1024}
                imageClassName="object-cover w-full h-full rounded-tr-md"
              />
            )}
          </div>

          <div className="row-span-3">
            {sideBanners[0] && (
              <Banner
                indexWeb={sideBanners[0].image.indexWeb}
                indexArray={sideBanners[0].image.indexArray}
                alt={sideBanners[0].imageAlt}
                href={sideBanners[0].link}
                height={1024}
                width={1024}
                imageClassName="object-cover w-full h-full rounded-tl-md"
              />
            )}
          </div>

          <div className="col-span-2 row-span-5">
            {middleBanner && (
              <Banner
                indexWeb={middleBanner.image.indexWeb}
                indexArray={middleBanner.image.indexArray}
                alt={middleBanner.imageAlt}
                href={middleBanner.link}
                height={1024}
                width={1024}
                imageClassName="object-cover w-full h-full rounded-br-md"
              />
            )}
          </div>

          <div className="row-span-3">
            {sideBanners[1] && (
              <Banner
                indexWeb={sideBanners[1].image.indexWeb}
                indexArray={sideBanners[1].image.indexArray}
                alt={sideBanners[1].imageAlt}
                href={sideBanners[1].link}
                height={1024}
                width={1024}
                imageClassName="object-cover w-full h-full rounded-bl-md"
              />
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default BannerContainer;
