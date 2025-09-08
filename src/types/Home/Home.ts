export interface IHomeResponseApi {
  data: IHomeProps
}

export interface IHomeProps {
  message: string
  status: boolean
  content: IHomeContent
  meta: unknown[]
  statusControl: StatusControl4
  extra: unknown[]
}

export interface IHomeContent {
  banners: Banners
  selectedPosts: SelectedPosts
  recentlyPosts: IRecentlyPosts
  selectedCategories: SelectedCategories
  allCategories: AllCategories
}

export interface Banners {
  status: boolean
  message: string
  data: IBannerData
}

export interface IBannerData {
  topBanner: TopBanner
  middleBanner: MiddleBanner
  sideBanners: SideBanner[]
}

export interface TopBanner {
  id: number
  title: string
  link: string
  image: Image
  imageAlt: string
  mobileImage: unknown
  mobileImageAlt: unknown
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

export interface MiddleBanner {
  id: number
  title: string
  link: string
  image: Image2
  imageAlt: string
  mobileImage: unknown
  mobileImageAlt: unknown
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

export interface SideBanner {
  id: number
  title: string
  link: string
  image: Image3
  imageAlt: string
  mobileImage: unknown
  mobileImageAlt: unknown
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

export interface SelectedPosts {
  status: boolean
  message: string
  data: ISelectedPostsData[]
}

export interface ISelectedPostsData {
  status: boolean
  message: string
  data: ISelectedPostsInnerData
}

export interface ISelectedPostsInnerData {
  content: Content2
  meta: unknown[]
  statusControl: StatusControl
  extra: Extra
}

export interface Content2 {
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
  summary?:string
}

export interface Cover {
  indexArray: IndexArray4
  directory: string
  currentImage: string
  indexWeb: IndexWeb4
}

export interface IndexArray4 {
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

export interface IndexWeb4 {
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

export interface StatusControl {
  status: number
  isAllowed: boolean
}

export interface Extra {
  postCategory: PostCategory
  user: User
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
  image: Image4
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

export interface IRecentlyPosts {
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
  content: Content3
  meta: unknown[]
  statusControl: StatusControl2
  extra: Extra2
}

export interface Content3 {
  id: number
  name: string
  altName: string
  cover: Cover2
  coverAlt: string
  slug: string
  postSlug: string
  publishedAt: string
  createdAt: string
  persianDate: string
}

export interface Cover2 {
  indexArray: IndexArray6
  directory: string
  currentImage: string
  indexWeb: IndexWeb6
}

export interface IndexArray6 {
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

export interface IndexWeb6 {
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
  image: Image5
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

export interface SelectedCategories {
  status: boolean
  message: string
  data: ISelectedCategoriesData[]
}

export interface ISelectedCategoriesData {
  status: boolean
  message: string
  data: Data5
}

export interface Data5 {
  id: number
  name: string
  slug: string
  extra: Extra3
}

export interface Extra3 {
  posts: Post[]
}

export interface Post {
  status: boolean
  message: string
  data: Data6
}

export interface Data6 {
  content: Content4
  meta: unknown[]
  statusControl: StatusControl3
  extra: Extra4
}

export interface Content4 {
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
  indexArray: IndexArray8
  directory: string
  currentImage: string
  indexWeb: IndexWeb8
}

export interface IndexArray8 {
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

export interface IndexWeb8 {
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

export interface Extra4 {
  postCategory: PostCategory3
  user: User3
}

export interface PostCategory3 {
  id: number
  name: string
  slug: string
}

export interface User3 {
  id: number
  slug: string
  fullName: string
  image: Image6
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

export interface AllCategories {
  status: boolean
  message: string
  data: IAllCategoriesData[]
}

export interface IAllCategoriesData {
  status: boolean
  message: string
  data: Data7
}

export interface Data7 {
  id: number
  name: string
  slug: string
  extra: unknown[]
}

export interface StatusControl4 {
  status: number
  isAllowed: boolean
}
