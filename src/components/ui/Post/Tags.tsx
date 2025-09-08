import {IPostExtra } from "@/types/Post/Post";
import Link from "next/link";
import React from "react";

export default function Tags({ categoryRelations }: Pick<IPostExtra , 'categoryRelations'>) {
  
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#7A7A7A]">برچسب ها:</div>
      <div className="flex items-center gap-2">
        {categoryRelations.map((item) => (
          <Link href={item.slug} title={item.name} key={`tag-${item.id}`} className="text-xs text-[#7A7A7A] bg-[#E4E4E480] p-2 block rounded-sm hover:bg-[#e4e4e4c7]">{item.name}</Link>
        ))}
      </div>
    </div>
  );
}
