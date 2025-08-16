export interface IRatioV {
  indexArray: IndexArray
  indexWeb: IndexWeb
  directory: string
  currentImage: string
}

interface IndexArray {
  original: string
  double_ratio: string
  triple_ratio: string
}

interface IndexWeb {
  original: string
  double_ratio: string
  triple_ratio: string
}
