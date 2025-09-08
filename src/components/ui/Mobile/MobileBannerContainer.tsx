import Container from "@/components/Container";
// import Banner from "../Banner/Banner";
// import MySwiper from "@/components/MySwiper";


export default function MobileBannerContainer() {

  


  // const data = [
  //   <Banner
  //     key="1"
  //     webpSrc="/images/test_image.webp"
  //     fallbackSrc="/images/test_image.png"
  //     alt="بنر"
  //     height={1024}
  //     width={1024}
  //     text="سری جدید دوربین های آیمو"
  //   />,
  //   <Banner
  //     key="2"
  //     webpSrc="/images/test_image.webp"
  //     fallbackSrc="/images/test_image.png"
  //     alt="بنر"
  //     height={1024}
  //     width={1024}
  //   />,
  //   <Banner
  //     key="3"
  //     webpSrc="/images/test_image.webp"
  //     fallbackSrc="/images/test_image.png"
  //     alt="بنر"
  //     height={1024}
  //     width={1024}
  //   />,
  // ];

  return (
    <section className="py-8">
      <Container>
        <div className="grid-cols-3 auto-rows-[100px] gap-2">
          {/* <Banner
            webpSrc="/images/test_image.webp"
            fallbackSrc="/images/test_image.png"
            alt="بنر"
            height={1024}
            width={1024}
            className="col-span-3 row-span-1 rounded-none"
            imageClassName="object-cover w-full h-full"
            href="/"
          /> */}
          
          <div className="col-span-3 row-span-5">
            {/* <MySwiper col={1} gap={5} slides={data} /> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
