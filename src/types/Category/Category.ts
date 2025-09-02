export interface ICategoryApi {
  data: ICategoryData
  type: string
}

export interface ICategoryData {
  message: string
  status: boolean
  content: Content
  meta: Meta
  statusControl: StatusControl
  extra: ICategoryExtra
}

export interface Content {
  id: number
  name: string
  enName: string
  slug: string
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
}

export interface ICategoryExtra {
  pinPosts: any[]
  posts: Posts
  banners: Banners
  relatedPosts: any[]
  products: any
  allCategories: AllCategories
  recentlyPosts: RecentlyPosts
  popularPosts: any[]
}

export interface Posts {
  current_page: number
  data: Daum[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: Link[]
  next_page_url: any
  path: string
  per_page: number
  prev_page_url: any
  to: number
  total: number
}

export interface Daum {
  status: boolean
  message: string
  data: Data2
}

export interface Data2 {
  content: Content2
  meta: any[]
  statusControl: StatusControl2
  extra: Extra2
}

export interface Content2 {
  id: number
  name: string
  altName: string
  image: Image
  summary: string
  imageAlt: string
  slug: string
  postSlug: string
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

export interface StatusControl2 {
  status: number
  isAllowed: boolean
}

export interface Extra2 {
  postCategory: PostCategory
  user: User
  commentsCount: number
}

export interface PostCategory {
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
  indexArray: IndexArray2
  indexWeb: IndexWeb2
  directory: string
  currentImage: string
}

export interface IndexArray2 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb2 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface Link {
  url?: string
  label: string
  active: boolean
}

export interface Banners {
  status: boolean
  message: string
  data: ICategoryBannerData
}

export interface ICategoryBannerData {
  headerBanner: HeaderBanner[]
  sidebarBanner: SidebarBanner[]
  middleBanner: MiddleBanner[]
  footerBanner: FooterBanner[]
}

export interface HeaderBanner {
  name: string
  link: string
  image: Image3
  imageAlt: string
  mobileImage: MobileImage
  mobileImageAlt: string
}

export interface Image3 {
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

export interface MobileImage {
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

export interface SidebarBanner {
  name: string
  link: string
  image: Image4
  imageAlt: string
  mobileImage: MobileImage2
  mobileImageAlt: string
}

export interface Image4 {
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

export interface MobileImage2 {
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

export interface MiddleBanner {
  name: string
  link: string
  image: Image5
  imageAlt: string
  mobileImage: MobileImage3
  mobileImageAlt: string
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

export interface MobileImage3 {
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

export interface FooterBanner {
  name: string
  link: string
  image: Image6
  imageAlt: string
  mobileImage: MobileImage4
  mobileImageAlt: string
}

export interface Image6 {
  indexArray: IndexArray9
  indexWeb: IndexWeb9
  directory: string
  currentImage: string
}

export interface IndexArray9 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface IndexWeb9 {
  original: string
  double_ratio: string
  triple_ratio: string
}

export interface MobileImage4 {
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

export interface AllCategories {
  status: boolean
  message: string
  data: Daum2[]
}

export interface Daum2 {
  status: boolean
  message: string
  data: Data4
}

export interface Data4 {
  id: number
  name: string
  slug: string
  extra: any[]
}

export interface RecentlyPosts {
  status: boolean
  message: string
  data: Daum3[]
}

export interface Daum3 {
  status: boolean
  message: string
  data: Data5
}

export interface Data5 {
  content: Content3
  meta: any[]
  statusControl: StatusControl3
  extra: Extra3
}

export interface Content3 {
  id: number
  name: string
  altName: string
  cover: Cover
  coverAlt: string
  slug: string
  postSlug: string
  publishedAt: string
  createdAt: string
  persianDate: string
}

export interface Cover {
  indexArray: IndexArray11
  directory: string
  currentImage: string
  indexWeb: IndexWeb11
}

export interface IndexArray11 {
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

export interface IndexWeb11 {
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

export interface StatusControl3 {
  status: number
  isAllowed: boolean
}

export interface Extra3 {
  postCategory: PostCategory2
  user: User2
}

export interface PostCategory2 {
  id: number
  name: string
  slug: string
}

export interface User2 {
  id: number
  slug: string
  fullName: string
  image: Image7
}

export interface Image7 {
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
