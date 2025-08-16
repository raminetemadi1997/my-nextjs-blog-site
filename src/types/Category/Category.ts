
import { IRatioV } from "../Image/RatioVariants";

export interface ImageIndex {
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

export interface IImageIndexRatio {
  double_ratio: string;
  triple_ratio: string;
  original: string;
}

interface IImageRatio {
  indexArray: IImageIndexRatio;
  indexWeb: IImageIndexRatio;
  directory: string;
  currentImage: string;
}

export interface Image {
  indexArray: ImageIndex;
  indexWeb: ImageIndex;
  directory: string;
  currentImage: string;
}

export interface PostCategory {
  id: number;
  name: string;
  slug: string;
}

export interface User {
  id: number;
  slug: string;
  fullName: string;
  image: IRatioV;
}

export interface PostStatusControl {
  status: number;
  isAllowed: boolean;
}

export interface PostExtra {
  postCategory: PostCategory;
  user: User;
  commentsCount?: number;
}

export interface PostContent {
  id: number;
  name: string;
  altName?: string;
  image?: Image;
  cover?: Image;
  coverAlt?: string;
  summary?: string;
  imageAlt?: string;
  slug: string;
  postSlug: string;
  publishedAt: string;
  createdAt: string;
  persianDate?: string;
}

export interface ICPost {
  status: boolean;
  message: string;
  data: {
    content: PostContent;
    meta: any[];
    statusControl: PostStatusControl;
    extra: PostExtra;
  };
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PostsPagination {
  current_page: number;
  data: ICPost[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Category {
  status?: boolean;
  message?: string;
  data: {
    id: number;
    name: string;
    slug: string;
    extra?: unknown;
  };
}

export interface StatusControl {
  status: number;
  isAllowed: boolean;
  relatedPostStatus: number;
  bannerStatus: number;
  productStatus: number;
  indexStatus: number;
}

export interface Content {
  id: number;
  name: string;
  enName: string;
  slug: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface ICategoryBanner {
  name: string;
  link: string;
  image: IImageRatio;
  imageAlt: string;
  mobileImage: IImageRatio;
  mobileImageAlt: string;
}

interface Banners {
  status: boolean;
  message: string;
  data: {
    headerBanner: ICategoryBanner[];
    sidebarBanner: ICategoryBanner[];
    middleBanner: ICategoryBanner[];
    footerBanner: ICategoryBanner[];
  };
}

export interface ICategoryExtra {
  pinPosts?: any[];
  posts: PostsPagination;
  banners: Banners;
  relatedPosts?: any[];
  products?: any[];
  allCategories: {
    status: boolean;
    message: string;
    data: Category[];
  };
  recentlyPosts?: {
    status: boolean;
    message: string;
    data: ICPost[];
  };
  popularPosts?: any[];
}

export interface ICategoryData {
  message: string;
  status: boolean;
  content: Content;
  meta: Meta;
  statusControl: StatusControl;
  extra: ICategoryExtra;
}

export interface ICategoryResponse {
  data: ICategoryData;
  type?: string;
}
