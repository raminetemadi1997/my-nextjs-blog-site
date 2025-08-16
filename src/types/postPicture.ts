export interface IPostPictureProps {
  indexArray: IPostPictureVariants;
  indexWeb: IPostPictureVariants;
  directory?: string;
  currentImage: string;
  width: number;
  height: number;
  alt:string
}

export interface IPostPictureVariants {
  large: string;
  "large_1.5x": string;
  large_2x: string;
  medium: string;
  "medium_1.5x": string;
  medium_2x: string;
  samll: string;
  "samll_1.5": string;
  samll_2x: string;
  original: string;
}
