export interface PictureProps {
  alt: string;
  webpSrc: string;
  fallbackSrc: string;
  width: number;
  height: number;
  sizes?: string;
  imageClassName?: string;
}