

export interface IPostApi {
  data: IPostData
  type: string
}

export interface IPostData {
  message: string
  status: boolean
  content: IPostContent
  meta: Meta
  statusControl: StatusControl
  extra: Extra
}

export interface IPostContent {
  id: number
  name: string
  enName: string
  summary: string
  body: string
  image: Image
  imageAlt: string
  cover: Cover
  coverAlt: string
  view: number
  slug: string
  postSlug: string
  readingTime: number
  publishedAt: string
  createdAt: string
  persianDate: string
}

export interface Image {
  indexArray: IndexArray
  directory: string
  currentImage: string
  indexWeb: IndexWeb
}

export interface IndexArray {
  original: string
  large: string
  "large_1.5x": string
  large_2x: string
  medium: string
  "medium_1.5x": string
  medium_2x: string
  samll: string
  "samll_1.5x": string
  samll_2x: string
}

export interface IndexWeb {
  original: string
  large: string
  "large_1.5x": string
  large_2x: string
  medium: string
  "medium_1.5x": string
  medium_2x: string
  samll: string
  "samll_1.5x": string
  samll_2x: string
}

export interface Cover {
  indexArray: IndexArray2
  directory: string
  currentImage: string
  indexWeb: IndexWeb2
}

export interface IndexArray2 {
  large: string
  "large_1.5x": string
  large_2x: string
  medium: string
  "medium_1.5x": string
  medium_2x: string
  samll: string
  "samll_1.5": string
  samll_2x: string
  original: string
}

export interface IndexWeb2 {
  large: string
  "large_1.5x": string
  large_2x: string
  medium: string
  "medium_1.5x": string
  medium_2x: string
  samll: string
  "samll_1.5": string
  samll_2x: string
  original: string
}

export interface Meta {
  title: string
  description: string
}

export interface StatusControl {
  status: number
  isAllowed: boolean
  relatedPostStatus: number
  bannerStatus: number
  productStatus: number
  indexStatus: number
  specialBoxStatus: number
  commentStatus: number
}

export interface Extra {
  category: Category
  user: User
  tags: any[]
  categoryRelations: CategoryRelation[]
  specialBox: SpecialBox[]
  relatedPosts: any[]
  popularPosts: any[]
  allCategories: AllCategories
  recentlyPosts: RecentlyPosts
  banners: Banners
  products: any[]
}

export interface Category {
  id: number
  name: string
  slug: string
}

export interface User {
  id: number
  slug: string
  fullName: string
  image: Image2
}

export interface Image2 {
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

export interface CategoryRelation {
  id: number
  name: string
  slug: string
}

export interface SpecialBox {
  id: number
  content_type: string
  title: string
  title_status: number
  image?: Image3
  image_alt?: string
  items: Item[]
  cover_position?: number
  product_slider_id?: number
  cover?: Cover2
  type?: number
  auto_play?: number
  show_mode?: number
  video_position?: number
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

export interface Item {
  id: number
  image?: Image4
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
  brand_id?: number
}

export interface Image4 {
  indexArray: IndexArray5
  directory: string
  currentImage: string
  indexWeb: IndexWeb5
}

export interface IndexArray5 {
  large?: string
  "large_1.5x"?: string
  large_2x?: string
  medium?: string
  "medium_1.5x"?: string
  medium_2x?: string
  samll?: string
  "samll_1.5"?: string
  samll_2x?: string
  original: string
  double_ratio?: string
  triple_ratio?: string
  "samll_1.5x"?: string
}

export interface IndexWeb5 {
  large?: string
  "large_1.5x"?: string
  large_2x?: string
  medium?: string
  "medium_1.5x"?: string
  medium_2x?: string
  samll?: string
  "samll_1.5"?: string
  samll_2x?: string
  original: string
  double_ratio?: string
  triple_ratio?: string
  "samll_1.5x"?: string
}

export interface MobileImage {
  indexArray: IndexArray6
  indexWeb: IndexWeb6
  directory: string
  currentImage: string
}

export interface IndexArray6 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb6 {
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

export interface Cover2 {
  image: Image5
  image_alt: string
  mobile_image: MobileImage2
  mobile_image_alt: string
  link: string
}

export interface Image5 {
  indexArray: IndexArray7
  indexWeb: IndexWeb7
  directory: string
  currentImage: string
}

export interface IndexArray7 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb7 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MobileImage2 {
  indexArray: IndexArray8
  indexWeb: IndexWeb8
  directory: string
  currentImage: string
}

export interface IndexArray8 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb8 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface AllCategories {
  status: boolean
  message: string
  data: Daum[]
}

export interface Daum {
  status: boolean
  message: string
  data: Data2
}

export interface Data2 {
  id: number
  name: string
  slug: string
  extra: any[]
}

export interface RecentlyPosts {
  status: boolean
  message: string
  data: Daum2[]
}

export interface Daum2 {
  status: boolean
  message: string
  data: Data3
}

export interface Data3 {
  content: Content2
  meta: any[]
  statusControl: StatusControl2
  extra: Extra2
}

export interface Content2 {
  id: number
  name: string
  altName: string
  cover: Cover3
  coverAlt: string
  slug: string
  postSlug: string
  publishedAt: string
  createdAt: string
  persianDate: string
}

export interface Cover3 {
  indexArray: IndexArray9
  directory: string
  currentImage: string
  indexWeb: IndexWeb9
}

export interface IndexArray9 {
  large: string
  "large_1.5x": string
  large_2x: string
  medium: string
  "medium_1.5x": string
  medium_2x: string
  samll: string
  "samll_1.5": string
  samll_2x: string
  original: string
}

export interface IndexWeb9 {
  large: string
  "large_1.5x": string
  large_2x: string
  medium: string
  "medium_1.5x": string
  medium_2x: string
  samll: string
  "samll_1.5": string
  samll_2x: string
  original: string
}

export interface StatusControl2 {
  status: number
  isAllowed: boolean
}

export interface Extra2 {
  postCategory: PostCategory
  user: User2
}

export interface PostCategory {
  id: number
  name: string
  slug: string
}

export interface User2 {
  id: number
  slug: string
  fullName: string
  image: Image6
}

export interface Image6 {
  indexArray: IndexArray10
  indexWeb: IndexWeb10
  directory: string
  currentImage: string
}

export interface IndexArray10 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb10 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface Banners {
  status: boolean
  message: string
  data: Data4
}

export interface Data4 {
  headerBanner: HeaderBanner[]
  sidebarBanner: SidebarBanner[]
  middleBanner: MiddleBanner[]
  footerBanner: FooterBanner[]
}

export interface HeaderBanner {
  name: string
  link: string
  image: Image7
  imageAlt: string
  mobileImage: MobileImage3
  mobileImageAlt: string
}

export interface Image7 {
  indexArray: IndexArray11
  indexWeb: IndexWeb11
  directory: string
  currentImage: string
}

export interface IndexArray11 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb11 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MobileImage3 {
  indexArray: IndexArray12
  indexWeb: IndexWeb12
  directory: string
  currentImage: string
}

export interface IndexArray12 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb12 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface SidebarBanner {
  name: string
  link: string
  image: Image8
  imageAlt: string
  mobileImage: MobileImage4
  mobileImageAlt: string
}

export interface Image8 {
  indexArray: IndexArray13
  indexWeb: IndexWeb13
  directory: string
  currentImage: string
}

export interface IndexArray13 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb13 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MobileImage4 {
  indexArray: IndexArray14
  indexWeb: IndexWeb14
  directory: string
  currentImage: string
}

export interface IndexArray14 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb14 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MiddleBanner {
  name: string
  link: string
  image: Image9
  imageAlt: string
  mobileImage: MobileImage5
  mobileImageAlt: string
}

export interface Image9 {
  indexArray: IndexArray15
  indexWeb: IndexWeb15
  directory: string
  currentImage: string
}

export interface IndexArray15 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb15 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MobileImage5 {
  indexArray: IndexArray16
  indexWeb: IndexWeb16
  directory: string
  currentImage: string
}

export interface IndexArray16 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb16 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface FooterBanner {
  name: string
  link: string
  image: Image10
  imageAlt: string
  mobileImage: MobileImage6
  mobileImageAlt: string
}

export interface Image10 {
  indexArray: IndexArray17
  indexWeb: IndexWeb17
  directory: string
  currentImage: string
}

export interface IndexArray17 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb17 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MobileImage6 {
  indexArray: IndexArray18
  indexWeb: IndexWeb18
  directory: string
  currentImage: string
}

export interface IndexArray18 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb18 {
  original: string
  double_ratio: string
  triple_ratio: string
}
