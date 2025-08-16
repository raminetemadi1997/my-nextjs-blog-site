import { Category } from "@/types/Post/Post";
import Link from "next/link";
import React from "react";

interface ITagsProps {
  data: Category[];
}
export default function Tags({ data }: ITagsProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-[#7A7A7A]">برچسب ها:</div>
      <div className="flex items-center gap-2">
        {data.map(({ id, name, slug }: Category) => (
          <Link href={slug} title={name} key={`tag-${id}`} className="text-xs text-[#7A7A7A] bg-[#E4E4E480] p-2 block rounded-sm hover:bg-[#e4e4e4c7]">{name}</Link>
        ))}
      </div>
    </div>
  );
}
