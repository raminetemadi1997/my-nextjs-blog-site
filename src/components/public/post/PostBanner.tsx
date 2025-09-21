import Link from "next/link";
import React from "react";
import styles from "@/styles/Banner.module.css";
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
      {name && <div className={styles.title_style}>{name}</div>}
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
