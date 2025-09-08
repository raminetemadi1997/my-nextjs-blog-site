import MySwiper from "@/components/MySwiper";
import React from "react";
import SpecialCategory from "./SpecialCategory";
import { SpecialBox } from "@/types/Post/Post";

export default function SpecialCategoryContainer({
  items,
}: Pick<SpecialBox , 'items'>) {
  const swiperData = items.map((item) => (
    <SpecialCategory key={item.id} {...item} />
  ));

  return <MySwiper slides={swiperData} col={5} gap={15} />;
}
