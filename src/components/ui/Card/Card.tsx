"use client";
import Link from "next/link";
import Picture from "../../Picture";
import styles from "./Card.module.css";
import { PictureProps } from "@/types/picture";
import { Clock4 } from "lucide-react";

interface ICardProps extends PictureProps {
  text: string;
  author_name: string;
  author_image_webp: string;
  author_image_fallbackSrc: string;
  author_image_alt?: string;
  created_date: string;
}

const Card = ({
  text,
  fallbackSrc,
  alt,
  height,
  webpSrc,
  width,
  author_name,
  created_date,
  author_image_fallbackSrc,
  author_image_webp,
  author_image_alt,
}: ICardProps) => {
  const createAuthor =
    author_name || created_date || author_image_fallbackSrc || author_image_webp
      ? true
      : false;

  return (
    <article className={`rounded-sm overflow-hidden ${styles.box}`}>
      <Link href="/">
        <Picture
          webpSrc={webpSrc}
          fallbackSrc={fallbackSrc}
          alt={alt}
          height={height}
          width={width}
          imageClassName="object-cover w-full h-full"
        />
        <div className="space-y-4 p-4">
          {text && <div className="text-[#6A6F73]">{text}</div>}

          {createAuthor && (
            <div className="grid grid-cols-4 place-items-center">
              <div className="flex items-center gap-1 col-span-2">
                <div>
                  {author_image_webp && author_image_fallbackSrc && (
                    <Picture
                      webpSrc={author_image_webp}
                      fallbackSrc={author_image_fallbackSrc}
                      alt={author_image_alt || "تصویر نویسنده"}
                      height={30}
                      width={30}
                      imageClassName="object-cover rounded-full"
                    />
                  )}
                </div>
                <div className="text-sm text-[#A1A2A7]">{author_name}</div>
              </div>
              {created_date && (
                <div className="flex items-center gap-1 col-span-2">
                  <Clock4 color="#a1a2a7" size={12} />
                  <div className="text-sm text-[#A1A2A7]">{created_date}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};

export default Card;
