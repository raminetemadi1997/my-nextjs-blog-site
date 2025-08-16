import React from "react";
import { PostData } from "@/types/Post/Post";
import PostBanner from "./PostBanner";

export default function PostBannerContainer({
content
}: PostData) {
  return (
    <section className="py-8 md:bg-[#e4e4e4]/50">
      <PostBanner
        {...content}
        className='w-fit mx-auto'
      />
    </section>
  );
}
