import React from "react";
import Sort from "./Sort";
import Pagination from "./Pagination";
import { ICategoryExtra } from "@/types/Category/Category";
import ImagePost from "../Public/ImagePost";

export default async function CategoryCardContainer({ posts }: ICategoryExtra) {
  return (
    <div className="md:bg-white bg-[#F2F2F2] md:p-0 p-2">
      <div className="flex items-center justify-between mb-4">
        <Sort />
        <div className="flex items-center gap-1.5 md:text-sm text-xs text-gray-700">
          <span className="font-bold">{posts?.data.length}</span>
          <span>مطلب موجود است.</span>
        </div>
      </div>

      <div className={`grid md:grid-cols-3 grid-cols-1 gap-2`}>
        {posts?.data.map((item) => {
          const content = item.data.content;
          const user = item.data.extra.user;

          return <ImagePost key={content.id} content={content} user={user} />;
        })}
      </div>
      {posts?.last_page && posts?.last_page > 1 && (
        <Pagination
          currentPage={posts?.current_page}
          totalPages={posts?.total}
        />
      )}
    </div>
  );
}
