import { ISpecialItems } from "@/types/Post/SpecialBox";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostPicture from "@/components/PostPicture";
import { priceGenerator } from "@/utils/priceGenerator";

type TSpecialCardProps = Pick<
  ISpecialItems,
  | "name"
  | "product_id"
  | "slug"
  | "new_product"
  | "image"
  | "image_alt"
  | "colors"
  | "price"
  | "discount"
  | "marketable"
  | "alt_name"
  | "type"
>;

export default function SpecialCard({
  name,
  product_id,
  slug,
  new_product,
  image,
  image_alt,
  alt_name,
  colors,
  type,
  marketable,
  price,
  discount,
}: TSpecialCardProps) {
  return (
    <article id={`card_${product_id}`}>
      <Link
        href={slug || "#"}
        title={name}
        className="space-y-4 border border-border rounded-md block p-2 bg-white"
      >
        <div>
          <div className="h-10 flex justify-between items-center">
            <div>
              {new_product == 1 && (
                <Image
                  src="/images/new.png"
                  alt="جدید"
                  title="جدید"
                  width={35}
                  height={24}
                />
              )}
            </div>
          </div>

          <div className="relative">
            {image && (
              <PostPicture
                indexWeb={image?.indexWeb}
                indexArray={image?.indexArray}
                currentImage={image?.currentImage}
                directory={image.directory}
                width={210}
                height={210}
                alt={image_alt || "کارت"}
              />
            )}
            {colors && colors?.length > 0 && (
              <div className="absolute top-2 right-0 space-y-1">
                {colors.map((item) => (
                  <div
                    key={item.id}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color_code }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-sm line-clamp-1">{alt_name || name}</div>

        <div>{priceGenerator({ type, marketable, price, discount })}</div>
      </Link>
    </article>
  );
}
