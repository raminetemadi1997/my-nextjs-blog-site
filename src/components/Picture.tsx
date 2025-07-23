import { PictureProps } from "@/types/picture";

const Picture = ({
  alt,
  fallbackSrc,
  height,
  width,
  webpSrc,
  sizes,
  imageClassName
}: PictureProps) => {
  return (
    <picture className="block">
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading="lazy"
        className={`${imageClassName} mx-auto` || "image mx-auto"}
      />
    </picture>
  );
};

export default Picture;
