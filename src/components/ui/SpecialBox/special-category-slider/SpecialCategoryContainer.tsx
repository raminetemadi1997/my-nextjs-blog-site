import MySwiper from "@/components/MySwiper";
import { ISpecialProps } from "@/types/Post/SpecialBox";
import React from "react";
import SpecialCategory from "./SpecialCategory";

export default function SpecialCategoryContainer({
  items,
}: Pick<ISpecialProps, "items">) {
  const swiperData = items.map((item) => (
    <SpecialCategory key={item.id} {...item} />
  ));

  return <MySwiper slides={swiperData} col={5} gap={15} />;
}
