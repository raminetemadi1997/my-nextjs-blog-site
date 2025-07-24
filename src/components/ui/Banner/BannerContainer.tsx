import Container from "@/components/Container";
import Banner from "./Banner";

const BannerContainer = () => {
  return (
    <section className="py-8 bg-[#e4e4e4]/50">
      <Container>
        <div className="grid grid-cols-3 auto-rows-[100px] gap-4">
          <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="col-span-2 row-span-1 rounded-xl"
            imageClassName="object-cover w-full h-full"
            href="/"
          />
          <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="row-span-3 rounded-xl"
            imageClassName="object-cover w-full h-full"
            href="/"
          />
          <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="col-span-2 row-span-5 rounded-xl"
            imageClassName="object-cover w-full h-full"
            href="/"
          />
          <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="row-span-3 rounded-xl"
            imageClassName="object-cover w-full h-full"
            href="/"
          />
        </div>
      </Container>
    </section>
  );
};

export default BannerContainer;
