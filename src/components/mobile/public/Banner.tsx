"use client";
import { IPictureProps } from "@/types/picture";
import Picture from "../../public/Picture";
import Link from "next/link";


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
  currentImage
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
        currentImage={currentImage}
      />
      {text && <div className="absolute bottom-0 w-full p-8 text-white text-base bg-gradient-to-t from-black/80 via-black/50 to-black/0 bg-blend-multiply">{text}</div>}
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
