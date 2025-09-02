export type TSpecial = ISpecialProps[]

type ContentType =
  | "image_slider"
  | "category"
  | "custom_brand"
  | "paragraph"
  | "faq"
  | "product"
  | "single_video"
  | "video"
  | "video_content"
  | "post"
  | "first_content"
  | "second_content"
  | "third_content"
  | "progress"
  | "accordion";

export interface ISpecialProps {
  id: number
  content_type: ContentType
  title: string 
  title_status: number
  image: Image
  image_alt?: string
  items: ISpecialItems[]
  cover_position?: number
  product_slider_id?: number
  cover?: Cover
  type?: number
  auto_play?: number
  show_mode?: number
  video_position?: number
}

export interface Image {
  indexArray: IndexArray
  indexWeb: IndexWeb
  directory: string
  currentImage: string
}

export interface IndexArray {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface ISpecialItems {
  id: number
  image?: Image2
  mobile_image?: MobileImage
  image_alt?: string
  mobile_alt?: string
  link?: string
  category_id?: number
  slug?: string
  name?: string
  title?: string
  description?: string
  height?: string
  question?: string
  answer?: string
  product_id?: number
  product_slug?: string
  category_slug?: string
  batch?: any[]
  alt_name?: string
  marketable?: number
  type?: number
  price?: number
  colors?: Color[]
  discount: any
  new_product?: number
  video_path?: string
  poster?: string
  structure_status?: number
  data_structure?: string
  product?: Product
  body?: string
  bg_color?: string
  border_color?: string
  image_position?: number
  text_color?: string
  btn_text?: string
  percentage?: number
}

export interface Image2 {
  indexArray: IndexArray2
  indexWeb: IndexWeb2 
  directory: string
  currentImage: string
}

export interface IndexArray2 {
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

export interface IndexWeb2 {
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

export interface MobileImage {
  indexArray: IndexArray3
  indexWeb: IndexWeb3
  directory: string
  currentImage: string
}

export interface IndexArray3 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb3 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface Color {
  id: number
  attribute_name: string
  attribute_value: string
  color_code: string
  price_increase: number
  price: number
  final_price: number
  discount: any[]
}

export interface Product {
  name: string
  image: string
  url: string
}

export interface Cover {
  image: Image3
  image_alt: string
  mobile_image: MobileImage2
  mobile_image_alt: string
  link: string
}

export interface Image3 {
  indexArray: IndexArray4
  indexWeb: IndexWeb4
  directory: string
  currentImage: string
}

export interface IndexArray4 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb4 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MobileImage2 {
  indexArray: IndexArray5
  indexWeb: IndexWeb5
  directory: string
  currentImage: string
}

export interface IndexArray5 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb5 {
  original: string
  double_ratio: string
  triple_ratio: string
}
