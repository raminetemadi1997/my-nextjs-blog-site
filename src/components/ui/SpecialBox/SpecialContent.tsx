import Picture from "@/components/Picture";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import { Plus } from "lucide-react";
import { SpecialBox } from "@/types/Post/Post";

export default function SpecialContent({ items, content_type } : Pick<SpecialBox , 'items' | 'content_type'>) {
  if (content_type == "first_content") {
    return items.map((item) => (
      <div key={item.id} className="grid grid-cols-4 gap-4">
        <Link
          href={item.link || "#"}
          title={item.title}
          style={{ borderColor: item.border_color || "white" }}
          className="border h-60 rounded-md flex flex-col justify-end overflow-hidden bg-white"
        >
          <div
            className="h-3/5 rounded-t-lg relative flex items-end justify-center"
            style={{ backgroundColor: item.bg_color || "white" }}
          >
            {item.image && (
              <div className="rounded-full absolute left-1/2 -translate-x-1/2 -top-[50px]">
                <Picture
                  indexWeb={item.image.indexWeb}
                  indexArray={item.image.indexArray}
                  currentImage={item.image.currentImage}
                  width={100}
                  height={100}
                  alt={item.image_alt}
                />
              </div>
            )}
            <div className="mb-8 text-sm text-white">{item.title}</div>
          </div>
        </Link>
      </div>
    ));
  }

  if (content_type == "second_content") {
    return items.map((item) => (
      <div key={item.id} className="my-8">
        <div
          className={`w-full h-48 rounded-md relative ${
            item.image_position == 1 ? "flex justify-end" : "right"
          }`}
        >
          {item.image_position == 1 && item.image && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Picture
                indexWeb={item.image.indexWeb}
                indexArray={item.image.indexArray}
                currentImage={item.image.currentImage}
                width={217}
                height={217}
                alt={item.image_alt}
                imageClassName="rounded-full"
              />
            </div>
          )}

          <div
            className={`w-11/12 h-full p-4 ${
              item.image_position == 1
                ? "pr-40 rounded-l-md"
                : "pl-40 rounded-r-md"
            }`}
            style={{ backgroundColor: item.bg_color || "white" }}
          >
            {item.body && (
              <div className="text-gray-700 text-sm text-justify leading-8 h-full overflow-hidden">
                <div className="font-bold text-base">{item.title}</div>
                {parse(item.body)}
              </div>
            )}
          </div>

          {item.image_position == 0 && item.image && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Picture
                indexWeb={item.image.indexWeb}
                indexArray={item.image.indexArray}
                currentImage={item.image.currentImage}
                width={217}
                height={217}
                alt={item.image_alt}
                imageClassName="rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    ));
  }

  if (content_type == "third_content") {
    return items.map((item) => (
      <div key={item.id} className="my-32">
        <div
          className={`w-full rounded-md relative ${
            item.image_position == 1 ? "flex justify-end" : "right"
          }`}
        >
          {item.image_position == 1 && item.image && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <Picture
                indexWeb={item.image.indexWeb}
                indexArray={item.image.indexArray}
                currentImage={item.image.currentImage}
                width={420}
                height={420}
                alt={item.image_alt}
                imageClassName="rounded-full"
              />
            </div>
          )}

          <div
            className={`w-3/4 p-4  ${
              item.image_position == 1
                ? "pr-48 rounded-l-md"
                : "pl-48 rounded-r-md"
            }`}
            style={{ backgroundColor: item.bg_color || "white" }}
          >
            {item.body && (
              <div
                className="text-gray-700 text-sm text-justify leading-8 overflow-hidden h-[320px]"
                style={{ color: item.text_color }}
              >
                <div className="font-bold text-base">{item.title}</div>
                {parse(item.body)}
              </div>
            )}
            {item.link && (
              <div className="flex justify-end">
                <Link
                  href={item.link}
                  title={item.btn_text}
                  className="text-sm flex items-center gap-1"
                  style={{ color: item.text_color }}
                >
                  <Plus size={20} />
                  {item.btn_text}
                </Link>
              </div>
            )}
          </div>

          {item.image_position == 0 && item.image && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Picture
                indexWeb={item.image.indexWeb}
                indexArray={item.image.indexArray}
                currentImage={item.image.currentImage}
                width={420}
                height={420}
                alt={item.image_alt}
                imageClassName="rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    ));
  }
}
