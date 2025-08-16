export interface PictureProps {
  alt: string;
  webpSrc: string;
  fallbackSrc: string;
  width: number;
  height: number;
  sizes?: string;
  imageClassName?: string;
}

export interface IPictureProps {
  indexArray: IImageVariants;
  indexWeb: IImageVariants;
  alt?:string,
  width:number,
  height:number,
  imageClassName?: string,
  currentImage?:string
}

export interface IImageVariants {
  original:string,
  double_ratio:string,
  triple_ratio:string
}
