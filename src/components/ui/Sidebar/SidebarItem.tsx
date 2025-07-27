import React from "react";
import Title, { ITitleProps } from "../Title";
import Link from "next/link";


interface ISidebarItemProps extends ITitleProps {
  key?: string;
}

interface ISidebarProps {
  id: string;
  name: string;
  href: string;
 
}

const data: ISidebarProps[] = [
  {
    id: "1",
    name: "راهنمای نصب و سیم کشی آیفون تصویری تابا",
    href: "/",
    
  },
  { id: "2", name: "دوربین مداربسته", href: "/" },
  { id: "3", name: "جک درب پارکینگ", href: "/" },
  { id: "4", name: "کرکره برقی", href: "/" },
];

const SidebarItem = ({ buttonText, title, href }: ISidebarItemProps) => {
  return (
    <div>
      <Title title={title} buttonText={buttonText} href={href} />
      <ul className="bg-[#e4e4e4]/20 rounded-lg py-2 space-y-2">
        {data.map(({ href, id, name }: ISidebarProps) => (
          <li
            key={id}
            className={`hover:bg-[#e4e4e4]/50 group cursor-pointer transition relative before:content-[''] before:absolute before:right-2 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#6A6F7380] before:rounded-full pr-2`}
          >
            <Link
              href={href}
              title={name}
              className="block mx-4 text-[#253A57B2] py-2 group-last:border-b-0 border-b border-border/80"
            >
             
                {name}
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarItem;
