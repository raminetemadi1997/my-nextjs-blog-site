"use client";
import { IPictureProps } from "@/types/picture";
import Picture from "../../Picture";
import Link from "next/link";
import styles from "./Banner.module.css";

interface IBannerProps extends IPictureProps {
  text?: string;
  className?: string;
  href?: string;
}

const Banner = ({
  height,
  width,
  alt,
  indexArray,
  indexWeb,
  className,
  text,
  imageClassName,
  href,
}: IBannerProps) => {
  const wrapperClass = `${className || "banner block"} overflow-hidden relative`;

  const content = (
    <>
      <Picture
        indexWeb={indexWeb}
        indexArray={indexArray}
        width={width}
        height={height}
        alt={alt}
        imageClassName={imageClassName}
      />
      {text && <div className={styles.title_style}>{text}</div>}
    </>
  );

  const InnerContent = <div className={wrapperClass}>{content}</div>;

  return href ? (
    <Link href={href} className={wrapperClass}>
      {content}
    </Link>
  ) : (
    InnerContent
  );
};

export default Banner;
