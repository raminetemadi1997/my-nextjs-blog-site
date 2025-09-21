import Swiper from "@/components/public/Swiper";
import Title from "@/components/public/Title";
import CoverPost from "@/components/public/CoverPost";
import { ISelectedCategoriesData } from "@/types/Home/Home";
import Link from "next/link";
import React from "react";

type TSelectedCategoriesProps = Pick<ISelectedCategoriesData, "data"> & {
  bottomTitle?: string;
  bottomSlug?: string;
};

export default function Categories(props: TSelectedCategoriesProps) {
  const { data, bottomSlug, bottomTitle } = props;

  const slides = data.extra.posts.map((item) => {
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

  return (
    <div id={`selected_category_${data.id}`} className="space-y-4 pb-4 px-2">
      {data.name && (
        <Title title={data.name} href={data.slug} buttonText={data.name} />
      )}
      <div className={`grid grid-cols-1 gap-2`}>
        <Swiper slides={slides} col={1.5} gap={8} />
      </div>
      {bottomTitle && (
        <Link
          href={bottomSlug || "#"}
          title={bottomTitle}
          className="text-center block"
        >
          <button
            type="button"
            className="px-4 py-2 border border-border rounded-md text-gray-400"
          >
            {bottomTitle}
          </button>
        </Link>
      )}
    </div>
  );
}
