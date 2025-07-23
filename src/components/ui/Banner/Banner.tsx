"use client";
import { PictureProps } from "@/types/picture";
import Picture from "../../Picture";
import Link from "next/link";
import styles from "./Banner.module.css";

interface IBannerProps extends PictureProps {
  text?: string;
  className?: string;
  href?: string;
}

const Banner = ({
  height,
  width,
  alt,
  fallbackSrc,
  webpSrc,
  sizes,
  className,
  text,
  imageClassName,
  href,
}: IBannerProps) => {
  const wrapperClass = `${className || "banner block"} overflow-hidden relative`;

  const content = (
    <>
      <Picture
        alt={alt}
        fallbackSrc={fallbackSrc}
        webpSrc={webpSrc}
        height={height}
        width={width}
        sizes={sizes}
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
