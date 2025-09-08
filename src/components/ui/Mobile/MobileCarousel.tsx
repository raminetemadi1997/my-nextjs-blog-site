"use client";


import Container from "@/components/Container";
import Title from "../Title";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";



export default function MobileCarousel() {
  const [isMounted, setIsMounted] = useState(true);

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
    <section className="py-4 space-y-4">
      <Container>
        <Title
          title="مقاله‌های منتخب"
          buttonText="مشاهده همه عناوین"
          href="/"
        />
      </Container>
      {/* {ss.length > 0 && <MySwiper slides={ss} col={1.5} gap={20} />} */}
      <div className="text-center border rounded-md px-4 py-2 w-fit mx-auto text-[#7D7D7DCC] border-[#7D7D7DCC] md:hidden block">
        مشاهده همه عناوین
      </div>
    </section>
  );
}
