import { IPictureProps } from "@/types/picture";
const imageBackend = process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL;

const Picture = ({
  indexArray,
  indexWeb,
  alt,
  height,
  width,
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

  return (
    <picture className="block">
      <source srcSet={buildSrcSet(indexWeb)} type="image/webp" />

      <source
        srcSet={buildSrcSet(indexArray)}
        type={`image/${imageFormatPNG ? "png" : "jpeg"}`}
      />

      <img
        src={`${imageBackend}/${indexArray.original}`}
        alt={alt}
        title={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </picture>
  );
};

export default Picture;
