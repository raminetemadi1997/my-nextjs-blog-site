"use client";


import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Title from "../../public/Title";
import Container from "../../public/Container";
import CoverPost from "../../public/CoverPost";
import { SelectedPosts } from "@/types/Home/Home";
import dynamic from "next/dynamic";


const Swiper = dynamic(() => import("@/components/public/Swiper"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: 5}).map((_, idx) => (
          <Skeleton key={idx} width={301} height={415.51} borderRadius={4} />
        ))}
      </div>
    </div>
  ),
});


const Carousel = ({ data }: Pick<SelectedPosts , 'data'>) => {
  const slides = data.map((item) => {
    const content = item.data?.content;
    const user = item.data?.extra?.user;

    if (!content || !user) return null;

    return <CoverPost key={item.data.content.id} user={item.data.extra.user} {...item.data.content} />;
  });

  return (
    <section className="py-4 space-y-4">
      <Container>
        <Title
          title="مقاله‌های منتخب"
          buttonText="مشاهده همه عناوین"
          href="/"
        />
      </Container>

      {slides.length > 0 && (
        <Swiper slides={slides} col={5} gap={8} />
      )}

      <div className="text-center border rounded-md px-4 py-2 w-fit mx-auto text-[#7D7D7DCC] border-[#7D7D7DCC] md:hidden block">
        مشاهده همه عناوین
      </div>
    </section>
  );
};

export default Carousel;
