// types/Post.ts

// تایپ برای تصاویر (image و cover)
export interface ImageIndex {
  original: string;
  large?: string;
  large_1_5x?: string;
  large_2x?: string;
  medium?: string;
  medium_1_5x?: string;
  medium_2x?: string;
  samll?: string;
  samll_1_5x?: string; // توجه: "samll" تو JSON تو اشتباه تایپی داره، احتمالاً منظور "small" بوده
  samll_2x?: string;
}

export interface ImageIndexWeb {
  original: string;
  large?: string;
  large_1_5x?: string;
  large_2x?: string;
  medium?: string;
  medium_1_5x?: string;
  medium_2x?: string;
  samll?: string;
  samll_1_5x?: string;
  samll_2x?: string;
}

export interface Image {
  indexArray: ImageIndex;
  indexWeb: ImageIndexWeb;
  directory: string;
  currentImage: string;
}

// تایپ برای کاور پست
export interface Cover {
  indexArray: ImageIndex;
  indexWeb: ImageIndexWeb;
  directory: string;
  currentImage: string;
}

// تایپ برای محتوای پست
export interface PostContent {
  id: number;
  name: string;
  enName: string;
  summary: string;
  body: string;
  image: Image;
  imageAlt: string;
  cover: Cover;
  coverAlt: string;
  view: number;
  slug: string;
  postSlug: string;
  publishedAt: string;
  createdAt: string;
  persianDate: string;
}

// تایپ برای متا
export interface Meta {
  title: string;
  description: string;
}

// تایپ برای کنترل وضعیت
export interface StatusControl {
  status: number;
  isAllowed: boolean;
  relatedPostStatus: number;
  bannerStatus: number;
  productStatus: number;
  indexStatus: number;
  specialBoxStatus: number;
  commentStatus: number;
}

// تایپ برای دسته‌بندی
export interface Category {
  id: number;
  name: string;
  slug: string;
  extra?: any[]; // برای extra که تو نمونه خالیه
}

// تایپ برای کاربر
export interface User {
  id: number;
  slug: string;
  fullName: string;
  image: Image;
}

// تایپ برای پست‌های اخیر
export interface RecentPost {
  status: boolean;
  message: string;
  data: {
    content: {
      id: number;
      name: string;
      altName: string;
      cover: Cover;
      coverAlt: string;
      slug: string;
      postSlug: string;
      publishedAt: string;
      createdAt: string;
      persianDate: string;
    };
    meta: any[]; // خالیه تو نمونه
    statusControl: {
      status: number;
      isAllowed: boolean;
    };
    extra: {
      postCategory: Category;
      user: User;
    };
  };
}

// تایپ برای allCategories
export interface AllCategories {
  status: boolean;
  message: string;
  data: Category[];
}

// تایپ برای extra
export interface Extra {
  category: Category;
  user: User;
  tags: any[]; // خالیه تو نمونه
  categoryRelations: Category[];
  specialBox: any[]; // خالیه تو نمونه
  relatedPosts: any[]; // خالیه تو نمونه
  popularPosts: any[]; // خالیه تو نمونه
  allCategories: AllCategories;
  recentlyPosts: {
    status: boolean;
    message: string;
    data: RecentPost[];
  };
  banners: {
    status: boolean;
    message: string;
    data: {
      headerBanner: BannerItem[]; 
      sidebarBanner: BannerItem[];
      middleBanner: BannerItem[];
      footerBanner: BannerItem[];
    };
  }; 
  products: any[]; // خالیه تو نمونه
}


interface ImageData {
  indexArray: {
    original: string;
    double_ratio: string;
    triple_ratio: string;
  };
  indexWeb: {
    original: string;
    double_ratio: string;
    triple_ratio: string;
  };
  directory: string;
  currentImage: string;
}

export interface BannerItem {
  name: string;
  link: string;
  image: ImageData;
  imageAlt: string;
  mobileImage: ImageData;
  mobileImageAlt: string;
}



// تایپ برای محتوای اصلی API
export interface ApiContent {
  id: number;
  name: string;
  enName: string;
  summary: string;
  body: string;
  image: Image;
  imageAlt: string;
  cover: Cover;
  coverAlt: string;
  view: number;
  slug: string;
  postSlug: string;
  publishedAt: string;
  createdAt: string;
  persianDate: string;
  readingTime: number;
}

// تایپ برای داده‌های API
export interface ApiData {
  message: string;
  status: boolean;
  content: ApiContent;
  meta: Meta;
  statusControl: StatusControl;
  extra: Extra;
}

// تایپ برای پاسخ کامل API
export interface ApiResponse {
  data: ApiData;
  type: string;
}

// تایپ برای خطاها
export interface ApiError {
  status: false;
  message: string;
  error?: string;
}

// تایپ کلی برای پاسخ API
export type ApiResult = ApiResponse | ApiError;
