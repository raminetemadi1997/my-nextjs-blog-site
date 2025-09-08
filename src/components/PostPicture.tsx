import { IIndex, IIndexV } from "@/types/Image/IndexVariants";
const imageBackend = process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL;

type TCombined = IIndexV & {
  width: number;
  height: number;
  alt: string;
};

const PostPicture = ({
  indexWeb,
  indexArray,
  currentImage,
  width,
  height,
  alt,
}: TCombined) => {

  const buildSrcSet = (paths: IIndex) => {
  const get1_5x = (keyBase: string) =>
    paths[`${keyBase}_1.5x` as keyof IIndex] ??
    paths[`${keyBase}_1.5` as keyof IIndex] ??
    "";

  return (
    `${imageBackend}/${paths.large} 1x, ` +
    `${imageBackend}/${get1_5x("large")} 1.5x, ` +
    `${imageBackend}/${paths.large_2x} 2x, ` +
    `${imageBackend}/${paths.medium} 1x, ` +
    `${imageBackend}/${get1_5x("medium")} 1.5x, ` +
    `${imageBackend}/${paths.medium_2x} 2x, ` +
    `${imageBackend}/${paths.samll} 1x, ` +
    `${imageBackend}/${get1_5x("small")} 1.5x, ` +
    `${imageBackend}/${paths.samll_2x} 2x`
  );
};


  function getMimeTypeFromFilename(filename: string): string {
    if (filename.endsWith(".png")) return "image/png";
    if (filename.endsWith(".jpg") || filename.endsWith(".jpeg"))
      return "image/jpeg";
    if (filename.endsWith(".webp")) return "image/webp";
    return "image/jpeg";
  }
  if (!indexWeb || !indexArray) return null;

  const currentSrc = indexArray[currentImage as keyof IIndex] ?? "";
  const currentType = getMimeTypeFromFilename(currentSrc);

  return (
    <picture className="block">
      <source srcSet={buildSrcSet(indexWeb)} type="image/webp" />
      <source srcSet={buildSrcSet(indexArray)} type={currentType} />

      <img
        src={`${imageBackend}/${currentSrc}`}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
        loading="lazy"
        title={alt}
      />
    </picture>
  );
};

export default PostPicture;
