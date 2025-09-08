export interface IIndexV {
  indexArray: IIndex
  directory: string
  currentImage: string
  indexWeb: IIndex
}

export interface IIndex {
   original: string
  double_ratio?: string
  triple_ratio?: string
  large?: string
  "large_1.5x"?: string
  large_2x?: string
  medium?: string
  "medium_1.5x"?: string
  medium_2x?: string
  samll?: string
  "samll_1.5"?: string
  samll_2x?: string
  "samll_1.5x"?: string
}

