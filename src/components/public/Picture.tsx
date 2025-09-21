
import { IndexVariants } from "@/types/Image/RatioVariants";
import { IImageVariants, IPictureProps } from "@/types/picture";
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
  const buildSrcSet = (paths: IImageVariants) =>
  [
    `${imageBackend}/${paths.original} 1x`,
    paths.double_ratio && `${imageBackend}/${paths.double_ratio} 2x`,
    paths.triple_ratio && `${imageBackend}/${paths.triple_ratio} 3x`,
  ]
    .filter(Boolean) 
    .join(", ");


    

  const imageFormatPNG = indexArray?.original?.endsWith(".png");

    const currentSrc =indexArray && indexArray[currentImage as keyof IndexVariants];
    
    

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
