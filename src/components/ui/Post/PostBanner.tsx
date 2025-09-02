import Link from "next/link";
import React from "react";
import styles from "../Banner/Banner.module.css";
import { IPostContent } from "@/types/Post/Post";
import PostImage from "./PostImage";

type CombinedBanner = IPostContent & {
  className?: string;
};

export default function PostBanner({
  image,
  imageAlt,
  slug,
  name,
  className,
}: Pick<CombinedBanner, "image" | "imageAlt" | "slug" | "name" | "className">) {
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
