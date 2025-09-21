import Link from "next/link";
import Title from "./Title";
import { IRecentlyPosts } from "@/types/Home/Home";




type IRecentlyPostsProps = IRecentlyPosts & {
  title?: string;
  className?: string;
}
export default function RecentlyPosts({
  data,
  title,
  className,
}: IRecentlyPostsProps) {

  
  return (
    <div className={className || "SidebarItem"}>
      <Title title={title} />
      <ul className="bg-[#e4e4e4]/20 rounded-lg py-2 space-y-2">
        {data.map((item) => (
          <li
            key={item.data.content.id}
            className={`hover:bg-[#e4e4e4]/50 group cursor-pointer transition relative before:content-[''] before:absolute before:right-2 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#6A6F7380] before:rounded-full pr-2`}
          >
            <Link
              href={item.data.content.slug}
              title={item.data.content.name}
              className="block mx-4 text-[#253A57B2] py-2 group-last:border-b-0 border-b border-border/80"
            >
              {item.data.content.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
