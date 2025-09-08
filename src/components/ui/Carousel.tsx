"use client";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MySwiper from "@/components/MySwiper";
import Title from "./Title";
import Container from "../Container";
import CoverPost from "./Public/CoverPost";
import { SelectedPosts } from "@/types/Home/Home";


const Carousel = ({ data }: Pick<SelectedPosts , 'data'>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center">
        <Skeleton width={662} height={40} className="mb-4 mx-auto" />
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton key={idx} width={301} height={425} borderRadius={12} />
          ))}
        </div>
      </div>
    );
  }

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

      {slides.filter(Boolean).length > 0 && (
        <MySwiper slides={slides} col={5} gap={8} />
      )}

      <div className="text-center border rounded-md px-4 py-2 w-fit mx-auto text-[#7D7D7DCC] border-[#7D7D7DCC] md:hidden block">
        مشاهده همه عناوین
      </div>
    </section>
  );
};

export default Carousel;
