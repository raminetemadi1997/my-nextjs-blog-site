import React from "react";
import Title from "./Title";
import Link from "next/link";

interface ICategory {
   status?:boolean,
   message?:string,
    data: {
      id: number;
      name: string;
      slug: string;
      extra?: unknown;
    };
}

interface ISideBarItemsProps {
  status?:boolean,
  message?:string,
  className?: string;
  data: ICategory[];
  title?: string;
}

const SidebarItem = ({ className, data, title }: ISideBarItemsProps) => {

  return (
    <div className={className || "SidebarItem"}>
      <Title title={title} />
      <ul className="bg-[#e4e4e4]/20 rounded-lg py-2 space-y-2">
        {data.map((item) => (
          <li
            key={item.data.id}
            className={`hover:bg-[#e4e4e4]/50 group cursor-pointer transition relative before:content-[''] before:absolute before:right-2 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#6A6F7380] before:rounded-full pr-2`}
          >
            <Link
              href={item.data.slug || "#"}
              title={item.data.name}
              className="block mx-4 text-[#253A57B2] py-2 group-last:border-b-0 border-b border-border/80"
            >
              {item.data.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarItem;
