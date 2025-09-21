import React from "react";
import { IPostContent } from "@/types/Post/Post";
import PostBanner from "./PostBanner";

export default function PostBannerContainer({
image,
imageAlt,
slug,
name
}: Pick<IPostContent , 'image' | 'imageAlt' | 'slug' | 'name'>) {
  return (
    <section className="py-8 md:bg-[#e4e4e4]/50">
      <PostBanner
        {...{image , imageAlt , slug , name}}
        className='w-fit mx-auto'
        imgClassName="md:w-auto w-full"
      />
    </section>
  );
}
