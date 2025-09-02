"use client";

import { ISpecialProps } from "@/types/Post/SpecialBox";
import { useState } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import { ChevronDown, ChevronLeft } from "lucide-react";

export default function Paragraph({ items, content_type, id }: ISpecialProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  
  function getMaxHeight(
    itemHeight?: number,
    defaultHeight = 150
  ): string | number {
    if (!itemHeight) return "auto";
    return defaultHeight > itemHeight ? defaultHeight : itemHeight;
  }

  const toggleItem = (itemId: number) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div id={`${content_type}_${id}`} className="space-y-4">
      {items.map((item) => {
        const maxHeight = getMaxHeight(Number(item.height), 150);
        const isExpanded = expandedItems.includes(item.id);

        return (
          <div key={item.id} id={`${item.id}`} className="space-y-2 pb-4">
            <div className="flex items-center justify-between">
              <div className="text-[#555555] text-lg">{item.title}</div>
              {item.link && (
                <Link
                  href={item.link}
                  title={item.title}
                  className="text-blue-600 hover:text-blue-700 text-base flex items-center gap-2"
                >
                  <div>مشاهده بیشتر</div>
                  <ChevronLeft size={16} />
                </Link>
              )}
            </div>

            <div
              className="text-[#2C2C2C] leading-8 text-justify overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isExpanded ? "none" : maxHeight,
              }}
            >
              {parse(item.description || "")}
            </div>

            {maxHeight !== "auto" && (
              <div className="flex justify-center">
                <div
                  className={`cursor-pointer p-2 bg-gray-100 rounded-full hover:shadow transition-transform duration-200`}
                  onClick={() => toggleItem(item.id)}
                >
                  <ChevronDown
                    className={`transform transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
