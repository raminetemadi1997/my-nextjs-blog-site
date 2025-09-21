"use client";
import Container from "@/components/public/Container";
import Swiper from "@/components/public/Swiper";
import CoverPost from "@/components/public/CoverPost";
import Title from "@/components/public/Title";
import { SelectedPosts } from "@/types/Home/Home";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function Carousel({ data }: Pick<SelectedPosts, "data">) {
  const [isMounted, setIsMounted] = useState(true);

  const slides = data.map((item) => {
    const content = item.data?.content;
    const user = item.data?.extra?.user;

    if (!content || !user) return null;

    return (
      <CoverPost
        key={item.data.content.id}
        user={item.data.extra.user}
        {...item.data.content}
      />
    );
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isMounted) {
    return (
      <div>
        <Skeleton width={243} height={40} className="mb-4" />
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 2 }).map((_, idx) => (
            <Skeleton key={idx} width={243} height={376} borderRadius={12} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-4 space-y-4 px-2">
      <Container>
        <Title title="مقاله‌های منتخب" />
        {slides.filter(Boolean).length > 0 && (
          <Swiper slides={slides} col={1.5} gap={8} />
        )}
      </Container>
    </section>
  );
}
