import React from "react";
import SpecialCard from "./SpecialCard";
import MySwiper from "@/components/MySwiper";
import { SpecialBox } from "@/types/Post/Post";

export default function SpecialCardContainer({
  items,
}: Pick<SpecialBox, "items">) {
  const swiperData = items.map((item) => (
    <SpecialCard key={item.id} {...item} />
  ));

  return <MySwiper slides={swiperData} gap={15} col={4} />;
}
