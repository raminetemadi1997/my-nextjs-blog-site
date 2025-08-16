import { Slash , House } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IBreadcrumbProps {
  post_name: string | undefined;
  category_name: string;
  category_slug: string;
}

const Breadcrumb = ({
  post_name,
  category_name,
  category_slug,
}: IBreadcrumbProps) => {
  return (
    <div className="flex items-center gap-1 border-b border-gray-200 pb-2">
      <div>
        <Link href="/" title="خانه" className="text-[#7A7A7A] text-sm">
          <House size={16} color="#000000" />
        </Link>
      </div>
      <Slash size={16} strokeWidth={0.5} />
      <div>
        <Link href={category_slug} title={category_name} className="text-[#7A7A7A] text-sm">
          {category_name}
        </Link>
      </div>

      <Slash size={16} strokeWidth={0.5} />
      <div className='text-[#253A57B2] text-sm'>{post_name}</div>
    </div>
  );
};

export default Breadcrumb;
