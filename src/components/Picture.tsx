import { IImageIndexRatio } from "@/types/Category/Category";
import { IPictureProps } from "@/types/picture";
const imageBackend = process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL;

const Picture = ({
  indexArray,
  indexWeb,
  alt,
  height,
  width,
  imageClassName,
  currentImage
}: IPictureProps) => {
  const buildSrcSet = (paths: {
    original: string;
    double_ratio: string;
    triple_ratio: string;
  }) =>
    `${imageBackend}/${paths.original} 1x, ` +
    `${imageBackend}/${paths.double_ratio} 2x, ` +
    `${imageBackend}/${paths.triple_ratio} 3x`;

  const imageFormatPNG = indexArray.original.endsWith(".png");

    const currentSrc = indexArray[currentImage as keyof IImageIndexRatio];
    
    

  return (
    <picture className="block">
      <source srcSet={buildSrcSet(indexWeb)} type="image/webp" />

      <source
        srcSet={buildSrcSet(indexArray)}
        type={`image/${imageFormatPNG ? "png" : "jpeg"}`}
      />

      <img
        src={`${imageBackend}/${currentSrc}`}
        alt={alt}
        title={alt}
        width={width}
        height={height}
        loading="lazy"
        className={imageClassName}
      />
    </picture>
  );
};

export default Picture;
