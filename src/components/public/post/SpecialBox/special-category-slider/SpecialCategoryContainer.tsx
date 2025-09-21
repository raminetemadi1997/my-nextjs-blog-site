
import Swiper from "@/components/public/Swiper";
import React from "react";
import SpecialCategory from "./SpecialCategory";
import { SpecialBox } from "@/types/Post/Post";


type TSpecialCategoryContainerProps = Pick<SpecialBox , 'items'> & {
  mobile ?: boolean
}

export default function SpecialCategoryContainer({
  items,
  mobile
}: TSpecialCategoryContainerProps) {

  const swiperData = items.map((item) => (
    <SpecialCategory key={item.id} {...item} />
  ));

  return <Swiper slides={swiperData} col={mobile ? 2.5 : 5} gap={15} />;
}
