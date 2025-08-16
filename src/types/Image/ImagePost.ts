import { IIndexV } from "./IndexVariants";

export interface IIP {
  id?: number | string;
  name?: string;
  altName?: string;
  image?:IIndexV
  imageAlt?: string;
  summary?: string;
  slug: string;
  postSlug?: string;
  publishedAt?: string;
  createdAt?: string;
  persianDate?: string;
}
