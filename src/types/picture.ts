export interface PictureProps {
  alt: string;
  webpSrc: string;
  fallbackSrc: string;
  width?: number;
  height?: number;
  sizes?: string;
  imageClassName?: string;
}

export interface IPictureProps {
  indexArray: IImageVariants;
  indexWeb: IImageVariants;
  alt?: string;
  width: number;
  height: number;
  imageClassName?: string;
  currentImage?: string;
}

export interface IImageVariants {
  large?: string;
  "large_1.5x"?: string;
  large_2x?: string;
  medium?: string;
  "medium_1.5x"?: string;
  medium_2x?: string;
  samll?: string;
  "samll_1.5"?: string;
  samll_2x?: string;
  original: string;
  double_ratio?: string;
  triple_ratio?: string;
  "samll_1.5x"?: string;
}
