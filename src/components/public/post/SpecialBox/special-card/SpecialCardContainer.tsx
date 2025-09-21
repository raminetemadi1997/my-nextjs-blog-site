import React from "react";
import SpecialCard from "./SpecialCard";
import Swiper from "@/components/public/Swiper";
import { SpecialBox } from "@/types/Post/Post";

type TSpecialCardContainerProps = Pick<SpecialBox, "items"> & {
  mobile ?: boolean
}

export default function SpecialCardContainer({
  items,
  mobile
}: TSpecialCardContainerProps) {
  const swiperData = items.map((item) => (
    <SpecialCard key={item.id} {...item} />
  ));

  return <Swiper slides={swiperData} gap={15} col={mobile ? 1.5 : 4} />;
}
