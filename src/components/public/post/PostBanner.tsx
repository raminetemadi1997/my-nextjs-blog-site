import Link from "next/link";
import React from "react";
import { IPostContent } from "@/types/Post/Post";
import PostImage from "./PostImage";

type CombinedBanner = IPostContent & {
  className?: string;
  imgClassName?:string
};

export default function PostBanner({
  image,
  imageAlt,
  slug,
  name,
  className,
  imgClassName
}: Pick<CombinedBanner, "image" | "imageAlt" | "slug" | "name" | "className" | "imgClassName">) {
  const wrapperClass = `${
    className || "banner"
  } overflow-hidden relative block`;

  const content = (
    <>
      <PostImage
        indexWeb={image?.indexWeb}
        indexArray={image?.indexArray}
        currentImage={image?.currentImage}
        directory={image?.directory}
        imageAlt={imageAlt}
        width={308}
        height={308}
        imgClassName={imgClassName}
      />
      {name && <div className="absolute bottom-0 w-full p-8 text-white text-base bg-gradient-to-t from-black/80 via-black/50 to-black/0 bg-blend-multiply">{name}</div>}
    </>
  );

  const InnerContent = <div className={wrapperClass}>{content}</div>;

  return slug ? (
    <Link href={slug} className={wrapperClass}>
      {content}
    </Link>
  ) : (
    InnerContent
  );
}
