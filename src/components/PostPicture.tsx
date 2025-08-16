import { IPostPictureProps, IPostPictureVariants } from "@/types/postPicture";
const imageBackend = process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL;

const PostPicture = ({
    indexWeb,
    indexArray,
    currentImage,
    width,
    height,
    alt
}:IPostPictureProps) => {
     const buildSrcSet = (paths: {
    large: string;
    "large_1.5x": string;
    large_2x: string;
    medium: string;
    "medium_1.5x": string;
    medium_2x: string;
    samll: string;
    "samll_1.5": string;
    samll_2x: string;
  }) =>
    `${imageBackend}/${paths.large} 1x, ` +
    `${imageBackend}/${paths["large_1.5x"]} 1.5x, ` +
    `${imageBackend}/${paths.large_2x} 2x, ` +
    `${imageBackend}/${paths.medium} 1x, ` +
    `${imageBackend}/${paths["medium_1.5x"]} 1.5x, ` +
    `${imageBackend}/${paths.medium_2x} 2x, ` +
    `${imageBackend}/${paths.samll} 1x, ` +
    `${imageBackend}/${paths["samll_1.5"]} 1.5x, ` +
    `${imageBackend}/${paths.samll_2x} 2x`;


    function getMimeTypeFromFilename(filename: string): string {
    if (filename.endsWith(".png")) return "image/png";
    if (filename.endsWith(".jpg") || filename.endsWith(".jpeg"))
      return "image/jpeg";
    if (filename.endsWith(".webp")) return "image/webp";
    return "image/jpeg";
  }

    const currentSrc = indexArray[currentImage as keyof IPostPictureVariants];
  const currentType = getMimeTypeFromFilename(currentSrc);

    return (
        <picture className="block">
      <source srcSet={buildSrcSet(indexWeb)} type="image/webp" />
      <source srcSet={buildSrcSet(indexArray)} type={currentType} />

      <img
        src={`${imageBackend}/${currentSrc}`}
        alt={alt || "تصویر"}
        width={width}
        height={height}
        className="w-full"
        loading="lazy"
        title={alt || "تصویر"}
      />
    </picture>
    );
};

export default PostPicture;