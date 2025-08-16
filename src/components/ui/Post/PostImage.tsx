import { ImageObject, PostContentFull } from '@/types/Post/Post'
import React from 'react'
const imageBackend = process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL;



type CombineImage = ImageObject & PostContentFull & {
  width: number;
  height: number;
};

export default function PostImage({currentImage ,indexArray ,indexWeb , imageAlt , width , height}:CombineImage) {
  if (!indexWeb) return null; 
  if (!indexArray) return null; 

  const buildSrcSet = (paths: Partial<{
    large: string;
    "large_1.5x": string;
    large_2x: string;
    medium: string;
    "medium_1.5x": string;
    medium_2x: string;
    samll: string;
    "samll_1.5": string;
    samll_2x: string;
  }>) =>
    [
      paths.large ? `${imageBackend}/${paths.large} 1x` : null,
      paths["large_1.5x"] ? `${imageBackend}/${paths["large_1.5x"]} 1.5x` : null,
      paths.large_2x ? `${imageBackend}/${paths.large_2x} 2x` : null,
      paths.medium ? `${imageBackend}/${paths.medium} 1x` : null,
      paths["medium_1.5x"] ? `${imageBackend}/${paths["medium_1.5x"]} 1.5x` : null,
      paths.medium_2x ? `${imageBackend}/${paths.medium_2x} 2x` : null,
      paths.samll ? `${imageBackend}/${paths.samll} 1x` : null,
      paths["samll_1.5"] ? `${imageBackend}/${paths["samll_1.5"]} 1.5x` : null,
      paths.samll_2x ? `${imageBackend}/${paths.samll_2x} 2x` : null,
    ]
      .filter(Boolean)
      .join(", ");

  function getMimeTypeFromFilename(filename: string): string {
    if (filename.endsWith(".png")) return "image/png";
    if (filename.endsWith(".jpg") || filename.endsWith(".jpeg"))
      return "image/jpeg";
    if (filename.endsWith(".webp")) return "image/webp";
    return "image/jpeg";
  }

  const currentSrc = indexArray[currentImage as keyof typeof indexArray];
  const currentType = getMimeTypeFromFilename(currentSrc);

  return (
    <picture className="block">
      <source srcSet={buildSrcSet(indexWeb)} type="image/webp" />
      <source srcSet={buildSrcSet(indexArray)} type={currentType} />

      <img
        src={`${imageBackend}/${currentSrc}`}
        alt={imageAlt || "تصویر" }
        title={imageAlt || "تصویر" }
        width={width}
        height={height}
      />
    </picture>
  );
}

