import Picture from "@/components/public/Picture";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import { Plus } from "lucide-react";
import { SpecialBox } from "@/types/Post/Post";


type TSpecialContentProps =  Pick<SpecialBox , 'items' | 'content_type'>


export default function SpecialContent({ items, content_type  } : TSpecialContentProps) {
  if (content_type == "first_content") {
    return items.map((item) => (
      <div key={item.id} className="grid md:grid-cols-4 grid-cols-2 gap-4">
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
            <div className="mb-8 md:text-sm text-xs text-white">{item.title}</div>
          </div>
        </Link>
      </div>
    ));
  }

  if (content_type == "second_content") {
    return items.map((item) => (
      <div key={item.id} className="my-8">
        <div
          className={`w-full md:h-48 h-auto rounded-md relative md:space-y-0 space-y-4 ${
            item.image_position == 1 ? "md:flex block justify-end" : "right"
          }`}
        >
          {item.image_position == 1 && item.image && (
            <div className="md:absolute static right-0 md:top-1/2 md:-translate-y-1/2 md:block flex justify-center">
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
            className={`md:w-11/12 md:h-full h-48 w-full p-4 ${
              item.image_position == 1
                ? "md:pr-40 md:rounded-l-md rounded-md"
                : "md:pl-40 md:rounded-r-md rounded-md"
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
            <div className="md:absolute static left-0 md:top-1/2 md:-translate-y-1/2 md:block flex justify-center">
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
      <div key={item.id} className="md:my-32 my-8">
        <div
          className={`w-full rounded-md relative md:space-y-0 space-y-4 ${
            item.image_position == 1 ? "md:flex block justify-end" : "right"
          }`}
        >
          {item.image_position == 1 && item.image && (
            <div className="md:absolute static right-0 md:top-1/2 md:-translate-y-1/2">
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
            className={`md:w-3/4 w-full p-4  ${
              item.image_position == 1
                ? "md:pr-48 rounded-l-md rounded-md"
                : "md:pl-48 rounded-r-md rounded-md"
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
            <div className="md:absolute static left-0 md:top-1/2 md:-translate-y-1/2">
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
